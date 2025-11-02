
import React from 'react';
import { useMockData } from '../hooks/useMockData';
import { TrainingResource, Mentor } from '../types';
import { DownloadIcon } from './Icons';

const ResourceCard: React.FC<{ resource: TrainingResource }> = ({ resource }) => (
    <div className="bg-white p-4 rounded-lg shadow-md flex justify-between items-start">
        <div>
            <span className={`text-xs font-bold px-2 py-1 rounded-full ${resource.type === 'Video' ? 'bg-red-100 text-red-800' : 'bg-blue-100 text-blue-800'}`}>
                {resource.category}
            </span>
            <h3 className="font-bold mt-2">{resource.title}</h3>
            <p className="text-sm text-gray-600">{resource.summary}</p>
            {!resource.isLowBandwidth && (
                <p className="text-xs text-orange-600 mt-2">Note: This content may consume more data.</p>
            )}
        </div>
        {resource.downloadLink && (
            <a href={resource.downloadLink} title="Download for offline access" className="ml-4 flex-shrink-0 bg-b-light-green text-white p-2 rounded-full hover:bg-b-green">
                <DownloadIcon />
            </a>
        )}
    </div>
);

const MentorCard: React.FC<{ mentor: Mentor }> = ({ mentor }) => (
    <div className="bg-white p-4 rounded-lg shadow-md text-center">
        <img src={mentor.imageUrl} alt={mentor.name} className="w-24 h-24 rounded-full mx-auto object-cover border-4 border-b-tan"/>
        <h4 className="font-bold mt-3">{mentor.name}</h4>
        <p className="text-sm text-b-orange font-semibold">{mentor.expertise}</p>
        <p className="text-xs text-gray-500 mt-2">{mentor.bio}</p>
        <button className="mt-4 w-full bg-b-green text-white px-3 py-1.5 rounded-md text-sm font-semibold hover:bg-opacity-90 transition-colors">
            Request Mentorship
        </button>
    </div>
);


const Capacity: React.FC = () => {
    const { resources, mentors } = useMockData();

    return (
        <div>
            <div className="text-center mb-12">
                <h2 className="text-3xl font-bold">Capacity: Learn and Grow</h2>
                <p className="text-b-green mt-2">Access resources, connect with mentors, and build your skills.</p>
            </div>

            {/* Training Resources */}
            <section>
                <h3 className="text-2xl font-bold mb-4">Training Content Repository</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {resources.map(res => <ResourceCard key={res.id} resource={res} />)}
                </div>
            </section>
            
            {/* Mentorship */}
            <section className="mt-12">
                <h3 className="text-2xl font-bold mb-4">Mentorship Matching</h3>
                <p className="text-gray-600 mb-6">Connect with experienced professionals for guidance and support.</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mentors.map(mentor => <MentorCard key={mentor.id} mentor={mentor} />)}
                </div>
            </section>

             {/* Peer-to-Peer Learning */}
            <section className="mt-12 bg-white p-6 rounded-lg shadow-md">
                 <h3 className="text-2xl font-bold mb-4">Peer-to-Peer Learning & Skill Exchange</h3>
                 <p className="text-gray-700">Join our community forums (coming soon) to ask questions, share your knowledge, and learn directly from fellow creatives in Bauchi. This is a space for mutual growth and support.</p>
                 <button className="mt-4 bg-b-dark-green text-white px-5 py-2 rounded-lg font-semibold hover:bg-b-green transition-colors disabled:bg-gray-400 disabled:cursor-not-allowed" disabled>
                    Go to Forums
                </button>
            </section>
        </div>
    );
};

export default Capacity;
