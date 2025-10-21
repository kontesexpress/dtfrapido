'use client';

import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error: Error; resetError: () => void }>;
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Trata especificamente o erro "Cannot read properties of undefined (reading 'call')"
    if (error.message.includes("Cannot read properties of undefined (reading 'call')")) {
      console.warn('Detected webpack/lazy loading error, attempting recovery...');
      
      // Força uma re-renderização após um pequeno delay
      setTimeout(() => {
        this.setState({ hasError: false });
      }, 200);
    }
    
    // Trata erros de webpack em geral
    if (error.message.includes("webpack") || error.message.includes("factory") || error.message.includes("requireModule")) {
      console.warn('Detected webpack error, attempting recovery...');
      
      setTimeout(() => {
        this.setState({ hasError: false });
      }, 300);
    }
  }

  resetError = () => {
    this.setState({ hasError: false });
  };

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback;
        return <FallbackComponent error={this.state.error!} resetError={this.resetError} />;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-dark-900">
          <div className="text-center p-8">
            <h2 className="text-2xl font-bold text-white mb-4">
              Ops! Algo deu errado
            </h2>
            <p className="text-gray-400 mb-6">
              Ocorreu um erro inesperado. Tente recarregar a página.
            </p>
            <button
              onClick={this.resetError}
              className="bg-gold-500 text-dark-900 px-6 py-3 rounded-lg font-bold hover:bg-gold-400 transition-colors"
            >
              Tentar Novamente
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook para tratamento de erros em componentes funcionais
export function useErrorHandler() {
  const [error, setError] = React.useState<Error | null>(null);

  const resetError = React.useCallback(() => {
    setError(null);
  }, []);

  const handleError = React.useCallback((error: Error) => {
    console.error('Error caught by useErrorHandler:', error);
    
    // Trata especificamente o erro do useInView
    if (error.message.includes("Cannot read properties of undefined (reading 'call')")) {
      console.warn('Detected useInView hook error, attempting recovery...');
      // Não define o erro para evitar quebrar a UI
      return;
    }
    
    setError(error);
  }, []);

  React.useEffect(() => {
    const handleGlobalError = (event: ErrorEvent) => {
      const errorMessage = event.error?.message || '';
      
      // Trata erros de webpack e lazy loading
      if (errorMessage.includes("Cannot read properties of undefined (reading 'call')") ||
          errorMessage.includes("webpack") ||
          errorMessage.includes("factory") ||
          errorMessage.includes("requireModule") ||
          errorMessage.includes("mountLazyComponent")) {
        console.warn('Global error handler caught webpack/lazy loading error, preventing crash');
        event.preventDefault();
        return;
      }
      handleError(event.error);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reasonMessage = event.reason?.message || '';
      
      // Trata rejeições de webpack e lazy loading
      if (reasonMessage.includes("Cannot read properties of undefined (reading 'call')") ||
          reasonMessage.includes("webpack") ||
          reasonMessage.includes("factory") ||
          reasonMessage.includes("requireModule")) {
        console.warn('Global error handler caught webpack/lazy loading promise rejection, preventing crash');
        event.preventDefault();
        return;
      }
      handleError(new Error(event.reason));
    };

    window.addEventListener('error', handleGlobalError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleGlobalError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, [handleError]);

  return { error, resetError, handleError };
}
