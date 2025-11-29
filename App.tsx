import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import Commerce from './components/Commerce';
import Capital from './components/Capital';
import Capacity from './components/Capacity';
import Community from './components/Community';
import Profile from './components/Profile';
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
      case 'profile':
        return <Profile />;
      case 'dashboard':
      default:
        return <Dashboard onNavigate={handleSetView} />;
    }
  };

  return (
    <div className="min-h-screen bg-tech-bg flex flex-col font-sans text-tech-text selection:bg-tech-primary selection:text-white overflow-x-hidden">
      <Header onNavigate={handleSetView} currentView={currentView} />
      <main className="flex-grow w-full max-w-7xl mx-auto px-4 py-6 md:px-6 space-y-6">
        {renderContent()}
      </main>
      <Footer />
    </div>
  );
};

export default App;