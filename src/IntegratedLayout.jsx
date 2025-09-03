import React, { useState, useEffect } from 'react';
import { EnhancedHelixProjectsShowcase } from './components/EnhancedHelixProjectsShowcase.jsx';
import { HelixProvider, useHelixConfig } from './contexts/HelixContext.jsx';
import ErrorBoundary from './components/ErrorBoundary.jsx';
import './IntegratedLayout.css';

function SpinnyContent() {
  const { effects } = useHelixConfig();
  
  return (
    <div className="spinny-viewport">
      <EnhancedHelixProjectsShowcase 
        autoRotate={true}
        effects={effects}
      />
    </div>
  );
}

export function IntegratedLayout({ 
  headerContent = null, 
  headerHeight = '64px',
  headerStyle = {},
  stickyHeader = true 
}) {
  const [viewportHeight, setViewportHeight] = useState('100vh');
  
  useEffect(() => {
    // Calculate viewport height accounting for mobile browsers
    const updateHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty('--vh', `${vh}px`);
      
      // Account for header
      const headerPx = parseInt(headerHeight);
      setViewportHeight(`calc(${window.innerHeight}px - ${headerPx}px)`);
    };
    
    updateHeight();
    window.addEventListener('resize', updateHeight);
    window.addEventListener('orientationchange', updateHeight);
    
    return () => {
      window.removeEventListener('resize', updateHeight);
      window.removeEventListener('orientationchange', updateHeight);
    };
  }, [headerHeight]);
  
  return (
    <div className="integrated-layout">
      {/* Header */}
      {headerContent && (
        <header 
          className={`integrated-header ${stickyHeader ? 'sticky-header' : 'static-header'}`}
          style={{ 
            height: headerHeight,
            ...headerStyle 
          }}
        >
          {headerContent}
        </header>
      )}
      
      {/* Spinny Container */}
      <main 
        className="spinny-container"
        style={{ 
          height: headerContent ? viewportHeight : '100vh',
          marginTop: !stickyHeader && headerContent ? headerHeight : 0
        }}
      >
        <ErrorBoundary>
          <HelixProvider>
            <SpinnyContent />
          </HelixProvider>
        </ErrorBoundary>
      </main>
    </div>
  );
}

// Example usage component
export function ExamplePage() {
  const headerContent = (
    <nav className="nav-container">
      <div className="nav-brand">
        <h1>My Portfolio</h1>
      </div>
      <ul className="nav-menu">
        <li><a href="#home">Home</a></li>
        <li><a href="#work">Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
  
  return (
    <IntegratedLayout 
      headerContent={headerContent}
      headerHeight="64px"
      stickyHeader={true}
      headerStyle={{
        background: 'rgba(0, 0, 0, 0.95)',
        backdropFilter: 'blur(10px)',
        borderBottom: '1px solid rgba(255, 255, 255, 0.1)'
      }}
    />
  );
}