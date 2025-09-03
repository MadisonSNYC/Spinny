import React from 'react';
import { EnhancedHelixProjectsShowcase } from './components/EnhancedHelixProjectsShowcase.jsx';
import { HelixProvider, useHelixConfig } from './contexts/HelixContext.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import './App.css';

function AppContent() {
  const { effects } = useHelixConfig();

  return (
    <div className="App relative">
      <EnhancedHelixProjectsShowcase 
        autoRotate={true}
        effects={effects}
      />
    </div>
  );
}

// Wrap with provider and error boundary
function App() {
  return (
    <ErrorBoundary>
      <HelixProvider>
        <AppContent />
      </HelixProvider>
    </ErrorBoundary>
  );
}

export default App;

