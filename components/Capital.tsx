import React, { useState } from 'react';
import { useMockData } from '../hooks/useMockData';
import { Project } from '../types';
import { generateProjectPitch } from '../services/geminiService';
import ReactMarkdown from 'react-markdown';


const ProjectCard: React.FC<{ project: Project }> = ({ project }) => {
    const progress = Math.min((project.raised / project.goal) * 100, 100);

    return (
        <div className="bg-tech-card border border-tech-border rounded-lg shadow-lg overflow-hidden flex flex-col hover:border-tech-secondary transition-colors h-full">
            <div className="h-40 relative overflow-hidden">
                <img src={project.imageUrl} alt={project.title} className="w-full h-full object-cover opacity-90"/>
            </div>
            <div className="p-3 flex flex-col flex-grow">
                <h3 className="text-base font-bold text-white line-clamp-1">{project.title}</h3>
                <p className="text-xs text-tech-secondary">{project.creator}</p>
                <p className="text-xs text-tech-muted my-2 flex-grow line-clamp-3">{project.description}</p>
                <div className="mt-auto">
                    <div className="w-full bg-gray-800 rounded-full h-1.5 mb-2">
                        <div className="bg-gradient-to-r from-tech-secondary to-tech-tertiary h-1.5 rounded-full shadow-[0_0_10px_rgba(5,217,232,0.5)]" style={{ width: `${progress}%` }}></div>
                    </div>
                    <div className="flex justify-between text-xs">
                        <span className="font-bold text-white">£{project.raised.toLocaleString()}</span>
                        <span className="text-tech-muted">of £{project.goal.toLocaleString()}</span>
                    </div>
                    <button className="w-full mt-3 bg-tech-tertiary text-white px-3 py-1.5 rounded text-xs font-bold uppercase tracking-wide hover:bg-tech-secondary hover:text-black transition-colors">
                        Back Project
                    </button>
                </div>
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
        <div className="bg-tech-card border border-tech-border p-4 rounded-lg shadow-md">
            <h3 className="text-xl font-bold text-white mb-2 flex items-center gap-2">
                <span className="text-tech-primary text-xl">✦</span> AI Pitch Generator
            </h3>
            <p className="text-sm text-tech-muted mb-3">Input your concept to generate a structured business proposal.</p>
            <div className="flex flex-col gap-3">
                <textarea
                    className="w-full p-3 bg-tech-bg border border-tech-border text-white text-sm rounded focus:ring-1 focus:ring-tech-primary focus:border-tech-primary placeholder-gray-600 resize-y min-h-[80px]"
                    rows={3}
                    placeholder="Describe your project concept here..."
                    value={idea}
                    onChange={(e) => setIdea(e.target.value)}
                    disabled={isLoading}
                />
                <button
                    onClick={handleGenerate}
                    disabled={isLoading}
                    className="self-end bg-gradient-to-r from-tech-primary to-tech-tertiary text-white px-5 py-2 rounded text-sm font-semibold hover:opacity-90 transition-opacity disabled:opacity-50"
                >
                    {isLoading ? 'Processing...' : 'Generate Pitch'}
                </button>
            </div>
            {pitch && (
                <div className="mt-4 p-4 border border-tech-secondary/30 rounded bg-tech-bg/50 text-tech-text max-h-96 overflow-y-auto custom-scrollbar">
                    <ReactMarkdown className="prose prose-invert prose-sm max-w-none prose-p:text-tech-muted prose-headings:text-white prose-strong:text-tech-secondary prose-li:text-tech-muted">{pitch}</ReactMarkdown>
                </div>
            )}
        </div>
    );
}

const Capital: React.FC = () => {
  const { projects } = useMockData();

  return (
    <div className="flex flex-col gap-6">
        <div className="flex flex-col md:flex-row justify-between items-end md:items-center border-b border-tech-border pb-2">
            <div>
                <h2 className="text-2xl font-bold text-white">Capital</h2>
                <p className="text-sm text-tech-secondary">Secure funding and support.</p>
            </div>
            <button className="mt-2 md:mt-0 bg-tech-primary text-white px-4 py-1.5 rounded text-sm font-semibold hover:bg-white hover:text-tech-primary transition-colors shadow-lg shadow-tech-primary/30">
                + Start Campaign
            </button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map(project => <ProjectCard key={project.id} project={project} />)}
        </div>
        
        <PitchGenerator />
    </div>
  );
};

export default Capital;