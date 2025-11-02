
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
        className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center cursor-pointer transform hover:-translate-y-2 transition-transform duration-300 border-b-4 border-b-green"
    >
        <div className="bg-b-light-green text-white rounded-full p-4 mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-b-dark-green mb-2">{title}</h3>
        <p className="text-gray-600 text-sm">{description}</p>
    </div>
);

const Dashboard: React.FC<DashboardProps> = ({ onNavigate }) => {
  return (
    <div className="animate-fade-in">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-b-dark-green leading-tight">
          Welcome to the Bauchi Creative Hub
        </h2>
        <p className="mt-4 text-lg text-b-green max-w-3xl mx-auto">
          Your integrated platform for Commerce, Capital, Capacity, and Community. Connect, create, and grow with us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <PillarCard 
            title="Commerce" 
            description="Showcase your work and sell your creations to a wider audience." 
            icon={<StoreIcon />}
            onClick={() => onNavigate('commerce')}
        />
        <PillarCard 
            title="Capital" 
            description="Raise funds for your projects through community crowdfunding." 
            icon={<CoinsIcon />}
            onClick={() => onNavigate('capital')}
        />
        <PillarCard 
            title="Capacity" 
            description="Learn new skills, find mentors, and enhance your creative talents." 
            icon={<BrainCircuitIcon />}
            onClick={() => onNavigate('capacity')}
        />
        <PillarCard 
            title="Community" 
            description="Collaborate with peers, find events, and build your network." 
            icon={<UsersIcon />}
            onClick={() => onNavigate('community')}
        />
      </div>

      <div className="mt-16 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-bold text-b-dark-green mb-4">Platform Notice</h3>
        <div className="text-sm text-gray-700 space-y-2">
            <p><strong>Low-Bandwidth Friendly:</strong> This platform is designed to work well on slow internet connections. For large uploads, we recommend using off-peak night data plans for better speed and cost-effectiveness.</p>
            <p><strong>Cultural Adherence:</strong> All content shared on this platform should align with the local cultural and religious values. Content is subject to moderation.</p>
            <p><strong>SME Registration:</strong> By creating a profile, you help the Bauchi State Government build a database of local businesses. You can find resources on formal business registration and taxation in the 'Capacity' section.</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
