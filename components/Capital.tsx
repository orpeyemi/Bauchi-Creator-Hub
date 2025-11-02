
import React, { useState } from 'react';
import { useMockData } from '../hooks/useMockData';
import { Project } from '../types';
import { generateProjectPitch } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';


const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const progress = Math.min((project.raised / project.goal) * 100, 100);

    return (
        <div className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col">
            <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover"/>
            <div className="p-4 flex flex-col flex-grow">
                <h3 className="text-lg font-bold text-b-dark-green">{project.title}</h3>
                <p className="text-sm text-gray-600 mt-1">by {project.creator}</p>
                <p className="text-xs text-gray-500 my-2 flex-grow">{project.description}</p>
                <div className="mt-4">
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                        <div className="bg-b-light-green h-2.5 rounded-full" style={{ width: `${progress}%` }}></div>
                    </div>
                    <div className="flex justify-between text-sm mt-2">
                        <span className="font-bold text-b-green">₦{project.raised.toLocaleString()}</span>
                        <span className="text-gray-500">Goal: ₦{project.goal.toLocaleString()}</span>
                    </div>
                </div>
                <button className="w-full mt-4 bg-b-orange text-white px-4 py-2 rounded-md text-sm font-semibold hover:bg-opacity-90 transition-colors">
                    Support Project
                </button>
            </div>
        </div>
    );
};

const PitchGenerator: React.FC = () => {
    const [idea, setIdea] = useState('');
    const [pitch, setPitch] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerate = async () => {
        if (!idea.trim()) {
            alert('Please enter your project idea.');
            return;
        }
        setIsLoading(true);
        setPitch('');
        const result = await generateProjectPitch(idea);
        setPitch(result);
        setIsLoading(false);
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow-md mt-12">
            <h3 className="text-2xl font-bold text-b-dark-green mb-2">AI Project Pitch Generator</h3>
            <p className="text-gray-600 mb-4">Need help structuring your business plan? Enter your core idea below, and our AI assistant will generate a professional pitch template for you.</p>
            <textarea
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-b-green focus:border-b-green"
                rows={3}
                placeholder="E.g., A collective that creates modern fashion using traditional Fula fabrics..."
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                disabled={isLoading}
            />
            <button
                onClick={handleGenerate}
                disabled={isLoading}
                className="mt-4 bg-b-dark-green text-white px-6 py-2 rounded-lg font-semibold hover:bg-b-green transition-colors disabled:bg-gray-400"
            >
                {isLoading ? 'Generating...' : 'Generate Pitch'}
            </button>
            {pitch && (
                <div className="mt-6 p-4 border border-b-tan rounded-md bg-gray-50">
                    <ReactMarkdown className="prose prose-sm max-w-none">{pitch}</ReactMarkdown>
                </div>
            )}
        </div>
    );
}

const Capital: React.FC = () => {
  const { projects } = useMockData();

  return (
    <div>
        <div className="text-center mb-8">
            <h2 className="text-3xl font-bold">Capital: Fund Your Vision</h2>
            <p className="text-b-green mt-2">Launch crowdfunding campaigns and get support from the community.</p>
        </div>
        <div className="text-right mb-6">
            <button className="bg-b-dark-green text-white px-5 py-2 rounded-lg font-semibold hover:bg-b-green transition-colors">
                + Start a New Project
            </button>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
        <PitchGenerator />
    </div>
  );
};

export default Capital;
