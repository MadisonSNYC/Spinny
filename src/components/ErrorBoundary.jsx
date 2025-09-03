import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    console.error('Helix Error:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="flex items-center justify-center min-h-screen bg-black text-white">
          <div className="text-center p-8">
            <h1 className="text-2xl mb-4">Something went wrong</h1>
            <p className="text-gray-400 mb-6">
              The 3D visualization encountered an error.
            </p>
            <button 
              onClick={() => window.location.reload()} 
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded"
            >
              Reload Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;