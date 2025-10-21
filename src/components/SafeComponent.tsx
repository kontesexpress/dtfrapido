'use client';

import React, { Suspense, ComponentType, ReactNode } from 'react';
import { ErrorBoundary } from './ErrorBoundary';

interface SafeComponentProps {
  children: ReactNode;
  fallback?: ReactNode;
  errorFallback?: ComponentType<{ error: Error; resetError: () => void }>;
}

export function SafeComponent({ 
  children, 
  fallback = <div className="animate-pulse bg-gray-200 h-32 rounded"></div>,
  errorFallback 
}: SafeComponentProps) {
  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}

// Componente específico para componentes que podem ter problemas de lazy loading
export function SafeLazyComponent({ 
  children, 
  fallback = <div className="animate-pulse bg-gray-200 h-32 rounded"></div>,
  errorFallback 
}: SafeComponentProps) {
  const [hasError, setHasError] = React.useState(false);
  const [retryCount, setRetryCount] = React.useState(0);

  const resetError = React.useCallback(() => {
    setHasError(false);
    setRetryCount(prev => prev + 1);
  }, []);

  React.useEffect(() => {
    const handleError = (event: ErrorEvent) => {
      if (event.error?.message?.includes("Cannot read properties of undefined (reading 'call')") ||
          event.error?.message?.includes("webpack") ||
          event.error?.message?.includes("factory")) {
        console.warn('SafeLazyComponent caught webpack error, attempting recovery...');
        event.preventDefault();
        setHasError(true);
        setTimeout(() => {
          resetError();
        }, 1000);
      }
    };

    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, [resetError]);

  if (hasError && retryCount < 3) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-gold-500 mx-auto mb-2"></div>
          <p className="text-sm text-gray-500">Carregando componente...</p>
        </div>
      </div>
    );
  }

  if (hasError && retryCount >= 3) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="text-center">
          <p className="text-sm text-gray-500 mb-2">Erro ao carregar componente</p>
          <button 
            onClick={resetError}
            className="text-gold-500 hover:text-gold-400 text-sm underline"
          >
            Tentar novamente
          </button>
        </div>
      </div>
    );
  }

  return (
    <ErrorBoundary fallback={errorFallback}>
      <Suspense fallback={fallback}>
        {children}
      </Suspense>
    </ErrorBoundary>
  );
}
