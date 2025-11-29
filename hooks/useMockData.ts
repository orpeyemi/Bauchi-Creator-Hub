
import { useState } from 'react';
import { Product, Project, TrainingResource, Mentor, CommunityEvent, Collaboration } from '../types';

const mockProducts: Product[] = [
  { id: 'p1', name: 'Urban Knit Scarf', description: 'Hand-knitted wool scarf, perfect for London winters.', price: 45, imageUrl: 'https://picsum.photos/seed/london1/400/300', seller: 'Camden Knits', stock: 12 },
  { id: 'p2', name: 'Modern Ceramic Vase', description: 'Minimalist vase thrown in a Hackney studio.', price: 85, imageUrl: 'https://picsum.photos/seed/london2/400/300', seller: 'East End Clay', stock: 8 },
  { id: 'p3', name: 'Upcycled Leather Satchel', description: 'Durable bag made from reclaimed leather.', price: 120, imageUrl: 'https://picsum.photos/seed/london3/400/300', seller: 'Soho Leatherworks', stock: 5 },
  { id: 'p4', name: 'The Shard - Digital Print', description: 'A vibrant digital painting of the London skyline.', price: 30, imageUrl: 'https://picsum.photos/seed/london4/400/300', seller: 'Thames Art Studio', stock: 100 },
];

const mockProjects: Project[] = [
  { id: 'proj1', title: '"Sounds of the Underground" - Jazz Album', creator: 'Brixton Jazz Collective', goal: 5000, raised: 1250, description: 'Funding for professional recording and production of our debut album featuring local talent.', imageUrl: 'https://picsum.photos/seed/proj1uk/400/300' },
  { id: 'proj2', title: 'Pop-up Portrait Studio', creator: 'Sarah Jenkins Photography', goal: 8000, raised: 6500, description: 'Help us build a mobile studio to take high-quality portraits at local markets across London.', imageUrl: 'https://picsum.photos/seed/proj2uk/400/300' },
  { id: 'proj3', title: 'Sustainable Fashion Workshop', creator: 'EcoStitch London', goal: 3500, raised: 3500, description: 'We are seeking funds to host free workshops on upcycling clothing for youth in Tower Hamlets.', imageUrl: 'https://picsum.photos/seed/proj3uk/400/300' },
];

const mockResources: TrainingResource[] = [
    { id: 'res1', title: 'Branding 101 for Creatives', type: 'Article', category: 'Business', summary: 'Learn the fundamentals of creating a strong brand identity for your craft.', isLowBandwidth: true },
    { id: 'res2', title: 'Pricing Your Art: A UK Guide', type: 'Guide', category: 'Finance', summary: 'A step-by-step guide to calculating fair prices for your products in the UK market.', isLowBandwidth: true, downloadLink: '#' },
    { id: 'res3', title: 'Mastering Instagram for Artists', type: 'Video', category: 'Marketing', summary: 'Video tutorial on using Instagram Reels to reach a wider audience (Link only).', isLowBandwidth: false },
    { id: 'res4', title: 'Tax & Self-Assessment for Freelancers', type: 'Article', category: 'Finance', summary: 'Tips on budgeting, saving, and managing taxes with HMRC.', isLowBandwidth: true },
];

const mockMentors: Mentor[] = [
    { id: 'm1', name: 'James Sterling', expertise: 'FinTech & Strategy', bio: 'Seasoned entrepreneur with 20+ years of experience in the City of London.', imageUrl: 'https://picsum.photos/seed/m1uk/100/100' },
    { id: 'm2', name: 'Elena Rossi', expertise: 'Fine Art & Galleries', bio: 'Curator who has worked with major galleries in Mayfair and Shoreditch.', imageUrl: 'https://picsum.photos/seed/m2uk/100/100' },
    { id: 'm3', name: 'David Chen', expertise: 'E-commerce & Digital Marketing', bio: 'Specializes in helping creative brands scale their online presence.', imageUrl: 'https://picsum.photos/seed/m3uk/100/100' },
];

const mockEvents: CommunityEvent[] = [
    { id: 'ev1', title: 'Spitalfields Arts Market', date: 'Every Weekend', location: 'Spitalfields Market, E1', description: 'A bustling market showcasing the best independent crafts and art.', type: 'In-Person' },
    { id: 'ev2', title: 'Virtual Meetup: London Creatives', date: 'October 15, 2024 - 6 PM', location: 'Online (Zoom)', description: 'An online networking event for artists, musicians, and writers to share ideas.', type: 'Virtual' },
];

const mockCollaborations: Collaboration[] = [
    {id: 'col1', title: 'Seeking a musician for short film score', author: 'Soho Productions', description: 'We are shooting a short film set in Camden and need a composer with an edgy style.', skillsNeeded: ['Music Composition', 'Sound Design']},
    {id: 'col2', title: 'Graphic Designer needed for Book Cover', author: 'Bloomsbury Indie Press', description: 'Looking for a talented graphic designer to create a cover for a new London mystery novel.', skillsNeeded: ['Graphic Design', 'Typography']},
];


export const useMockData = () => {
  const [products] = useState<Product[]>(mockProducts);
  const [projects] = useState<Project[]>(mockProjects);
  const [resources] = useState<TrainingResource[]>(mockResources);
  const [mentors] = useState<Mentor[]>(mockMentors);
  const [events] = useState<CommunityEvent[]>(mockEvents);
  const [collaborations] = useState<Collaboration[]>(mockCollaborations);

  return { products, projects, resources, mentors, events, collaborations };
};