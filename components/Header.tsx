import React from 'react';
import { View } from '../types';
import { StoreIcon, CoinsIcon, BrainCircuitIcon, UsersIcon, LayoutDashboardIcon } from './Icons';

interface HeaderProps {
  onNavigate: (view: View) => void;
  currentView: View;
}

const NavLink: React.FC<{
  view: View;
  currentView: View;
  onNavigate: (view: View) => void;
  icon: React.ReactNode;
  label: string;
}> = ({ view, currentView, onNavigate, icon, label }) => {
  const isActive = currentView === view;
  const activeClasses = 'bg-tech-primary text-white shadow-[0_0_15px_rgba(255,42,109,0.5)]';
  const inactiveClasses = 'text-tech-muted hover:text-tech-secondary hover:bg-white/5';

  return (
    <button
      onClick={() => onNavigate(view)}
      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 whitespace-nowrap ${isActive ? activeClasses : inactiveClasses}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  return (
    <header className="bg-tech-bg/95 backdrop-blur-md border-b border-tech-border text-tech-text sticky top-0 z-50">
      <div className="w-full max-w-7xl mx-auto px-4 py-3">
        <div className="flex flex-wrap items-center justify-between gap-y-3">
          
          {/* Logo */}
          <div className="flex items-center space-x-3 cursor-pointer group shrink-0" onClick={() => onNavigate('dashboard')}>
            <div className="relative">
                <div className="absolute inset-0 bg-tech-secondary blur-sm opacity-50 group-hover:opacity-100 transition-opacity"></div>
                <svg className="h-8 w-8 text-tech-secondary relative z-10" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9M3 12a9 9 0 019-9m0 18a9 9 0 00-9-9m9-9h9" />
                </svg>
            </div>
            <h1 className="text-lg md:text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-tech-secondary leading-none">London Creative Hub</h1>
          </div>

           {/* Profile Toggle - Right aligned on all screens */}
           <div className="flex items-center md:order-last shrink-0">
             <button 
                onClick={() => onNavigate('profile')}
                className={`h-9 w-9 rounded-full flex items-center justify-center font-bold text-lg transition-all border-2 ${currentView === 'profile' ? 'bg-tech-primary border-tech-primary text-white shadow-[0_0_15px_rgba(255,42,109,0.5)]' : 'bg-transparent border-tech-secondary text-tech-secondary hover:bg-tech-secondary hover:text-tech-bg'}`}
             >
                A
             </button>
           </div>

          {/* Navigation - Scrollable on mobile, flex on desktop */}
          <nav className="flex items-center space-x-1 overflow-x-auto w-full md:w-auto md:flex-none order-last md:order-none no-scrollbar pb-1 md:pb-0">
            <NavLink view="dashboard" currentView={currentView} onNavigate={onNavigate} icon={<LayoutDashboardIcon />} label="Dashboard" />
            <NavLink view="commerce" currentView={currentView} onNavigate={onNavigate} icon={<StoreIcon />} label="Commerce" />
            <NavLink view="capital" currentView={currentView} onNavigate={onNavigate} icon={<CoinsIcon />} label="Capital" />
            <NavLink view="capacity" currentView={currentView} onNavigate={onNavigate} icon={<BrainCircuitIcon />} label="Capacity" />
            <NavLink view="community" currentView={currentView} onNavigate={onNavigate} icon={<UsersIcon />} label="Community" />
          </nav>

        </div>
      </div>
    </header>
  );
};

export default Header;