import React from 'react';
import { useMockData } from '../hooks/useMockData';
import { TrainingResource, Mentor } from '../types';
import { DownloadIcon } from './Icons';

const ResourceCard: React.FC<{ resource: TrainingResource }> = ({ resource }) => (
    <div className="bg-tech-card border border-tech-border p-3 rounded-lg shadow-md flex justify-between items-start hover:border-tech-secondary/50 transition-colors h-full">
        <div>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase tracking-wide ${resource.type === 'Video' ? 'bg-tech-primary/20 text-tech-primary' : 'bg-tech-secondary/20 text-tech-secondary'}`}>
                {resource.category}
            </span>
            <h3 className="font-bold text-white mt-2 text-sm md:text-base">{resource.title}</h3>
            <p className="text-xs text-tech-muted mt-1 leading-relaxed">{resource.summary}</p>
        </div>
        {resource.downloadLink && (
            <a href={resource.downloadLink} title="Download" className="ml-3 flex-shrink-0 bg-tech-border text-white p-1.5 rounded-md hover:bg-tech-primary transition-colors">
                <DownloadIcon />
            </a>
        )}
    </div>
);

const MentorCard: React.FC<{ mentor: Mentor }> = ({ mentor }) => (
    <div className="bg-tech-card border border-tech-border p-4 rounded-lg shadow-md text-center group hover:-translate-y-1 transition-transform flex flex-col items-center h-full">
        <div className="relative inline-block mb-3">
            <img src={mentor.imageUrl} alt={mentor.name} className="w-20 h-20 rounded-full object-cover border-2 border-tech-tertiary"/>
            <div className="absolute inset-0 rounded-full border-2 border-tech-secondary opacity-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"></div>
        </div>
        <h4 className="font-bold text-white text-base">{mentor.name}</h4>
        <p className="text-xs text-tech-secondary font-semibold uppercase tracking-wide my-1">{mentor.expertise}</p>
        <p className="text-xs text-tech-muted mb-3 flex-grow">{mentor.bio}</p>
        <button className="w-full bg-transparent border border-tech-tertiary text-tech-tertiary px-3 py-1 rounded text-xs font-bold hover:bg-tech-tertiary hover:text-white transition-colors">
            Request Access
        </button>
    </div>
);


const Capacity: React.FC = () => {
    const { resources, mentors } = useMockData();

    return (
        <div className="flex flex-col gap-8">
            <div className="text-center pb-2 border-b border-tech-border">
                <h2 className="text-2xl font-bold text-white">Capacity Building</h2>
                <p className="text-sm text-tech-secondary mt-1">Knowledge base and mentorship.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-6">
                {/* Resources Column */}
                <section className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold text-white border-l-4 border-tech-secondary pl-3">Resources</h3>
                    <div className="grid grid-cols-1 gap-3">
                        {resources.map(res => <ResourceCard key={res.id} resource={res} />)}
                    </div>
                </section>
                
                {/* Mentorship Column */}
                <section className="flex flex-col gap-4">
                    <h3 className="text-lg font-bold text-white border-l-4 border-tech-primary pl-3">Mentorship</h3>
                    <div className="grid grid-cols-2 gap-3">
                        {mentors.map(mentor => <MentorCard key={mentor.id} mentor={mentor} />)}
                    </div>
                </section>
            </div>

             {/* Footer CTA */}
            <section className="bg-gradient-to-r from-tech-card to-tech-bg border border-tech-border p-4 rounded-lg shadow-md flex flex-col md:flex-row justify-between items-center gap-4">
                 <div>
                    <h3 className="text-lg font-bold text-white">The Hive Mind</h3>
                    <p className="text-xs text-tech-muted">Encrypted peer-to-peer learning network.</p>
                 </div>
                 <button className="bg-tech-border text-tech-muted px-4 py-1.5 rounded text-sm font-semibold cursor-not-allowed border border-tech-border opacity-70" disabled>
                    Network Offline (Beta)
                </button>
            </section>
        </div>
    );
};

export default Capacity;