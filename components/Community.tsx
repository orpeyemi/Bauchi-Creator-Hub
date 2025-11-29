import React from 'react';
import { useMockData } from '../hooks/useMockData';
import { CommunityEvent, Collaboration } from '../types';

const EventCard: React.FC<{ event: CommunityEvent }> = ({ event }) => (
    <div className="bg-tech-card border border-tech-border p-4 rounded-lg shadow-md hover:border-tech-primary/50 transition-colors flex flex-col h-full">
        <div className="flex justify-between items-start mb-2">
            <div>
                <h4 className="font-bold text-base text-white">{event.title}</h4>
                <div className="text-xs text-tech-primary font-mono mt-1">{event.date}</div>
            </div>
            <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full uppercase ${event.type === 'In-Person' ? 'bg-green-900/50 text-green-300' : 'bg-purple-900/50 text-purple-300'}`}>
                {event.type}
            </span>
        </div>
        <p className="text-xs text-tech-muted mb-1 flex items-center gap-1">
             <span className="opacity-70">📍</span> {event.location}
        </p>
        <p className="text-xs text-gray-400 mt-2 flex-grow leading-relaxed">{event.description}</p>
        <button className="mt-3 w-full bg-tech-secondary text-black px-3 py-1.5 rounded text-xs font-bold hover:bg-white transition-colors">
            RSVP Now
        </button>
    </div>
);

const CollaborationCard: React.FC<{ collab: Collaboration }> = ({ collab }) => (
    <div className="bg-tech-card border border-tech-border p-4 rounded-lg shadow-md flex flex-col h-full">
        <h4 className="font-bold text-white text-base">{collab.title}</h4>
        <p className="text-xs text-tech-muted mb-3 mt-1">Posted by <span className="text-tech-secondary">{collab.author}</span></p>
        <p className="text-xs text-gray-400 flex-grow leading-relaxed">{collab.description}</p>
        <div className="mt-3 mb-3 flex flex-wrap gap-1.5">
            {collab.skillsNeeded.map(skill => (
                <span key={skill} className="text-[10px] bg-tech-border text-white px-2 py-0.5 rounded border border-gray-700/50">{skill}</span>
            ))}
        </div>
         <button className="w-full bg-transparent border border-tech-secondary text-tech-secondary px-3 py-1.5 rounded text-xs font-bold hover:bg-tech-secondary hover:text-black transition-colors">
            Connect
        </button>
    </div>
);

const Community: React.FC = () => {
    const { events, collaborations } = useMockData();

    return (
        <div className="flex flex-col gap-8">
            <div className="text-center pb-2 border-b border-tech-border">
                <h2 className="text-2xl font-bold text-white">Community Node</h2>
                <p className="text-sm text-tech-secondary mt-1">Sync with the network.</p>
            </div>

            {/* Events */}
            <section className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <h3 className="text-lg font-bold text-white">Upcoming Events</h3>
                    <button className="bg-tech-primary text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-white hover:text-tech-primary transition-colors shadow shadow-tech-primary/20">
                        + Create Event
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {events.map(event => <EventCard key={event.id} event={event} />)}
                </div>
            </section>

            {/* Collaboration Marketplace */}
            <section className="flex flex-col gap-4">
                <div className="flex justify-between items-center">
                    <div>
                        <h3 className="text-lg font-bold text-white">Collaboration Matrix</h3>
                        <p className="text-xs text-tech-muted mt-0.5">Find partners for your next sprint.</p>
                    </div>
                     <button className="bg-tech-border border border-tech-muted text-white px-3 py-1.5 rounded text-xs font-semibold hover:bg-tech-muted hover:text-black transition-colors">
                        + Post Request
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {collaborations.map(collab => <CollaborationCard key={collab.id} collab={collab} />)}
                </div>
            </section>

        </div>
    );
};

export default Community;