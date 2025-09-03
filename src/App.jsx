import React from 'react';
import { EnhancedHelixProjectsShowcase } from './components/EnhancedHelixProjectsShowcase.jsx';
import { HelixProvider, useHelixConfig } from './contexts/HelixContext.jsx';
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

// Wrap with provider
function App() {
  return (
    <HelixProvider>
      <AppContent />
    </HelixProvider>
  );
}

export default App;

