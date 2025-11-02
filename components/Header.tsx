
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
  const activeClasses = 'bg-b-tan text-b-dark-green';
  const inactiveClasses = 'hover:bg-b-green hover:text-b-light-tan';

  return (
    <button
      onClick={() => onNavigate(view)}
      className={`flex items-center space-x-2 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${isActive ? activeClasses : inactiveClasses}`}
    >
      {icon}
      <span>{label}</span>
    </button>
  );
};

const Header: React.FC<HeaderProps> = ({ onNavigate, currentView }) => {
  return (
    <header className="bg-b-dark-green text-b-light-tan shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3 cursor-pointer" onClick={() => onNavigate('dashboard')}>
            <svg className="h-8 w-8 text-b-orange" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9V3m0 18a9 9 0 009-9M3 12a9 9 0 019-9m0 18a9 9 0 00-9-9m9-9h9" />
            </svg>
            <h1 className="text-xl font-bold">Bauchi Creative Hub</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-2">
            <NavLink view="dashboard" currentView={currentView} onNavigate={onNavigate} icon={<LayoutDashboardIcon />} label="Dashboard" />
            <NavLink view="commerce" currentView={currentView} onNavigate={onNavigate} icon={<StoreIcon />} label="Commerce" />
            <NavLink view="capital" currentView={currentView} onNavigate={onNavigate} icon={<CoinsIcon />} label="Capital" />
            <NavLink view="capacity" currentView={currentView} onNavigate={onNavigate} icon={<BrainCircuitIcon />} label="Capacity" />
            <NavLink view="community" currentView={currentView} onNavigate={onNavigate} icon={<UsersIcon />} label="Community" />
          </nav>
           <div className="flex items-center">
             <button className="h-10 w-10 bg-b-green rounded-full flex items-center justify-center text-b-light-tan font-bold text-lg">
                A
             </button>
           </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
