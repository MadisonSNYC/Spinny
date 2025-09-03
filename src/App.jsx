import React from 'react';
import { EnhancedHelixProjectsShowcase } from './components/EnhancedHelixProjectsShowcase.jsx';
import { HelixProvider } from './contexts/HelixContext.jsx';
import { useEffectsCompat } from './hooks/useMigrationBridge.js';
import './App.css';

function AppContent() {
  const { effects } = useEffectsCompat();

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

