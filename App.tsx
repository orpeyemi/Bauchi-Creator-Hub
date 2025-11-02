
import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Commerce from './components/Commerce';
import Capital from './components/Capital';
import Capacity from './components/Capacity';
import Community from './components/Community';
import { View } from './types';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>('dashboard');

  const handleSetView = useCallback((view: View) => {
    setCurrentView(view);
  }, []);

  const renderContent = () => {
    switch (currentView) {
      case 'commerce':
        return <Commerce />;
      case 'capital':
        return <Capital />;
      case 'capacity':
        return <Capacity />;
      case 'community':
        return <Community />;
      case 'dashboard':
      default:
        return <Dashboard onNavigate={handleSetView} />;
    }
  };

  return (
    <div className="min-h-screen bg-b-light-tan flex flex-col font-sans text-b-dark-green">
      <Header onNavigate={handleSetView} currentView={currentView} />
      <main className="flex-grow container mx-auto px-4 py-8">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;
