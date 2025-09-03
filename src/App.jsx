import React, { useState } from 'react';
import { EnhancedHelixProjectsShowcase } from './components/EnhancedHelixProjectsShowcase.jsx';
import { HelixProvider } from './contexts/HelixContext.jsx';
import { useEffectsCompat } from './hooks/useMigrationBridge.js';
import './App.css';

function AppContent() {
  const { effects, toggleEffect, resetEffects, undoEffects, redoEffects, canUndo: canUndoEffects, canRedo: canRedoEffects, setPlacementStrength, setRepeatTurns } = useEffectsCompat();

  return (
    <div className="App relative">
      {/* DevPanel removed for streamlined UI */}
      
      <EnhancedHelixProjectsShowcase 
        autoRotate={true}
        scrollDriven={false}
        effects={effects}
        onEffectToggle={toggleEffect}
        onReset={resetEffects}
        onUndo={undoEffects}
        onRedo={redoEffects}
        canUndo={canUndoEffects}
        canRedo={canRedoEffects}
        setPlacementStrength={setPlacementStrength}
        setRepeatTurns={setRepeatTurns}
      />
      
      {/* All debug components removed for production */}
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

