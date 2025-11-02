
import React from 'react';
import { useMockData } from '../hooks/useMockData';
import { CommunityEvent, Collaboration } from '../types';

const EventCard: React.FC<{ event: CommunityEvent }> = ({ event }) => (
    <div className="bg-white p-4 rounded-lg shadow-md">
        <div className="flex justify-between items-start">
            <div>
                <h4 className="font-bold text-lg">{event.title}</h4>
                <p className="text-sm text-b-orange">{event.date}</p>
                <p className="text-sm text-gray-600">{event.location}</p>
            </div>
            <span className={`text-xs font-semibold px-2 py-1 rounded-full ${event.type === 'In-Person' ? 'bg-green-100 text-green-800' : 'bg-purple-100 text-purple-800'}`}>
                {event.type}
            </span>
        </div>
        <p className="text-sm text-gray-700 mt-3">{event.description}</p>
        <button className="mt-4 w-full bg-b-light-green text-white px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-opacity-90 transition-colors">
            RSVP / View Details
        </button>
    </div>
);

const CollaborationCard: React.FC<{ collab: Collaboration }> = ({ collab }) => (
    <div className="bg-white p-4 rounded-lg shadow-md">
        <h4 className="font-bold">{collab.title}</h4>
        <p className="text-xs text-gray-500 mb-2">Posted by {collab.author}</p>
        <p className="text-sm text-gray-700">{collab.description}</p>
        <div className="mt-3 flex flex-wrap gap-2">
            {collab.skillsNeeded.map(skill => (
                <span key={skill} className="text-xs bg-b-tan px-2 py-1 rounded-full">{skill}</span>
            ))}
        </div>
         <button className="mt-4 w-full bg-b-dark-green text-white px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-b-green transition-colors">
            Connect
        </button>
    </div>
);

const Community: React.FC = () => {
    const { events, collaborations } = useMockData();

    return (
        <div>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Community: Connect & Collaborate</h2>
                <p className="text-b-green mt-2">Find events, join collaborations, and build your professional network.</p>
            </div>

            {/* Events */}
            <section>
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">Upcoming Events</h3>
                    <button className="bg-b-dark-green text-white px-4 py-2 rounded-lg font-semibold hover:bg-b-green transition-colors text-sm">
                        + Create Event
                    </button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {events.map(event => <EventCard key={event.id} event={event} />)}
                </div>
            </section>

            {/* Collaboration Marketplace */}
            <section className="mt-12">
                <div className="flex justify-between items-center mb-4">
                    <h3 className="text-2xl font-bold">Collaboration Marketplace</h3>
                     <button className="bg-b-dark-green text-white px-4 py-2 rounded-lg font-semibold hover:bg-b-green transition-colors text-sm">
                        + Post a Request
                    </button>
                </div>
                 <p className="text-gray-600 mb-6">Looking for a partner for your next project? Browse collaboration opportunities below.</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {collaborations.map(collab => <CollaborationCard key={collab.id} collab={collab} />)}
                </div>
            </section>

        </div>
    );
};

export default Community;
