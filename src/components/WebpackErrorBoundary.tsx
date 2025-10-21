'use client';

import React, { Component, ReactNode } from 'react';

interface WebpackErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  retryCount: number;
}

interface WebpackErrorBoundaryProps {
  children: ReactNode;
  fallback?: ReactNode;
}

export class WebpackErrorBoundary extends Component<WebpackErrorBoundaryProps, WebpackErrorBoundaryState> {
  constructor(props: WebpackErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false, retryCount: 0 };
  }

  static getDerivedStateFromError(error: Error): WebpackErrorBoundaryState {
    return { hasError: true, error, retryCount: 0 };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('WebpackErrorBoundary caught an error:', error, errorInfo);
    
    // Trata especificamente erros de webpack
    if (this.isWebpackError(error)) {
      console.warn('Detected webpack error, attempting recovery...');
      
      // Tenta recuperar automaticamente
      setTimeout(() => {
        this.setState(prevState => ({
          hasError: false,
          retryCount: prevState.retryCount + 1
        }));
      }, 1000);
    }
  }

  private isWebpackError(error: Error): boolean {
    const errorMessage = error.message || '';
    return (
      errorMessage.includes("Cannot read properties of undefined (reading 'call')") ||
      errorMessage.includes("webpack") ||
      errorMessage.includes("factory") ||
      errorMessage.includes("requireModule") ||
      errorMessage.includes("mountLazyComponent") ||
      errorMessage.includes("options.factory")
    );
  }

  private handleRetry = () => {
    this.setState({ hasError: false, retryCount: 0 });
  };

  render() {
    if (this.state.hasError) {
      if (this.state.retryCount >= 3) {
        return (
          <div className="flex items-center justify-center p-8 bg-gray-100 rounded-lg">
            <div className="text-center">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">
                Erro ao carregar componente
              </h3>
              <p className="text-gray-600 mb-4">
                Ocorreu um problema técnico. Tente recarregar a página.
              </p>
              <button
                onClick={this.handleRetry}
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors"
              >
                Tentar Novamente
              </button>
            </div>
          </div>
        );
      }

      return (
        <div className="flex items-center justify-center p-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500 mx-auto mb-2"></div>
            <p className="text-sm text-gray-500">Carregando componente...</p>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Hook para tratamento de erros de webpack
export function useWebpackErrorHandler() {
  const [error, setError] = React.useState<Error | null>(null);

  React.useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      const errorMessage = event.error?.message || '';
      
      if (
        errorMessage.includes("Cannot read properties of undefined (reading 'call')") ||
        errorMessage.includes("webpack") ||
        errorMessage.includes("factory") ||
        errorMessage.includes("requireModule")
      ) {
        console.warn('Webpack error detected, preventing crash');
        event.preventDefault();
        return;
      }
      
      setError(event.error);
    };

    const handleUnhandledRejection = (event: PromiseRejectionEvent) => {
      const reasonMessage = event.reason?.message || '';
      
      if (
        reasonMessage.includes("Cannot read properties of undefined (reading 'call')") ||
        reasonMessage.includes("webpack") ||
        reasonMessage.includes("factory") ||
        reasonMessage.includes("requireModule")
      ) {
        console.warn('Webpack promise rejection detected, preventing crash');
        event.preventDefault();
        return;
      }
      
      setError(new Error(event.reason));
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  return { error, clearError: () => setError(null) };
}
