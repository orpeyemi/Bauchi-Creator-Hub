import React from 'react';
import { View } from '../types';
import { StoreIcon, CoinsIcon, BrainCircuitIcon, UsersIcon } from './Icons';

interface DashboardProps {
    onNavigate: (view: View) => void;
}

interface PillarCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
    onClick: () => void;
}

const PillarCard: React.FC<PillarCardProps> = ({ title, description, icon, onClick }) => (
    <div 
        onClick={onClick}
        className="bg-tech-card border border-tech-border rounded-lg p-5 flex flex-col items-center text-center cursor-pointer transform hover:-translate-y-1 hover:border-tech-primary hover:shadow-[0_0_20px_rgba(119,0,255,0.3)] transition-all duration-300 group h-full justify-center"
    >
        <div className="bg-tech-tertiary/20 text-tech-secondary group-hover:text-white group-hover:bg-tech-primary rounded-full p-3 mb-3 transition-colors">
            {icon}
        </div>
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-tech-primary transition-colors">{title}</h3>
        <p className="text-tech-muted text-sm leading-tight">{description}</p>
    </div>
);

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in flex flex-col gap-6">
      <div className="text-center py-2">
        <h2 className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-tech-secondary via-white to-tech-primary leading-tight mb-2">
          London Creative Hub
        </h2>
        <p className="text-base md:text-lg text-tech-muted max-w-3xl mx-auto leading-snug">
          The integrated operating system for the capital's creative economy.
          <span className="block mt-1 text-tech-secondary font-medium">Connect. Create. Innovate.</span>
        </p>
      </div>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <PillarCard 
            title="Commerce" 
            description="Marketplace for assets." 
            icon={<StoreIcon />}
            onClick={() => onNavigate('commerce')}
        />
        <PillarCard 
            title="Capital" 
            description="Crowdfunding & funds." 
            icon={<CoinsIcon />}
            onClick={() => onNavigate('capital')}
        />
        <PillarCard 
            title="Capacity" 
            description="Resources & mentors." 
            icon={<BrainCircuitIcon />}
            onClick={() => onNavigate('capacity')}
        />
        <PillarCard 
            title="Community" 
            description="Events & network." 
            icon={<UsersIcon />}
            onClick={() => onNavigate('community')}
        />
      </div>

      <div className="bg-gradient-to-r from-tech-card to-tech-bg border border-tech-border p-4 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
            <h3 className="text-lg font-bold text-white">Platform Status</h3>
            <div className="text-sm text-tech-muted mt-1">
                <span className="mr-4"><strong>System:</strong> <span className="text-green-400">Operational</span></span>
                <span><strong>Region:</strong> London, UK</span>
            </div>
        </div>
        <p className="text-xs text-tech-muted md:max-w-md text-right">Access business support resources via the 'Capacity' tab. All content is secured.</p>
      </div>
    </div>
  );
};

export default Dashboard;