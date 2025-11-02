
import { useState } from 'react';
import { Product, Project, TrainingResource, Mentor, CommunityEvent, Collaboration } from '../types';

const mockProducts: Product[] = [
  { id: 'p1', name: 'Handwoven Fula Shawl', description: 'A colorful shawl made with traditional weaving techniques.', price: 15000, imageUrl: 'https://picsum.photos/seed/p1/400/300', seller: 'Amina Weaves', stock: 12 },
  { id: 'p2', name: 'Terracotta Pottery Set', description: 'Set of 3 decorative pots, handcrafted and sun-dried.', price: 8500, imageUrl: 'https://picsum.photos/seed/p2/400/300', seller: 'Bauchi Clay Works', stock: 8 },
  { id: 'p3', name: 'Leather "Dufuna" Bag', description: 'Durable and stylish bag made from locally sourced leather.', price: 25000, imageUrl: 'https://picsum.photos/seed/p3/400/300', seller: 'Adamu Leathercraft', stock: 5 },
  { id: 'p4', name: 'Digital Art Print - Yankari', description: 'A vibrant digital painting of the Yankari Game Reserve.', price: 5000, imageUrl: 'https://picsum.photos/seed/p4/400/300', seller: 'Musa Digital Arts', stock: 100 },
];

const mockProjects: Project[] = [
  { id: 'proj1', title: '"Sounds of Savannah" - Music Album', creator: 'Bauchi Beats Collective', goal: 500000, raised: 125000, description: 'Funding for professional recording and production of our debut album blending traditional rhythms with modern sounds.', imageUrl: 'https://picsum.photos/seed/proj1/400/300' },
  { id: 'proj2', title: 'Mobile Photography Studio for Rural Artisans', creator: 'Fatima Photgraphy', goal: 800000, raised: 650000, description: 'Help us build a mobile studio to take high-quality product photos for artisans in remote areas, boosting their online sales.', imageUrl: 'https://picsum.photos/seed/proj2/400/300' },
  { id: 'proj3', title: 'The Gubi Weavers Cooperative', creator: 'Gubi Weavers', goal: 350000, raised: 350000, description: 'We are seeking funds to purchase two new looms to increase our production capacity and train new apprentices.', imageUrl: 'https://picsum.photos/seed/proj3/400/300' },
];

const mockResources: TrainingResource[] = [
    { id: 'res1', title: 'Branding 101 for Creatives', type: 'Article', category: 'Business', summary: 'Learn the fundamentals of creating a strong brand identity for your craft.', isLowBandwidth: true },
    { id: 'res2', title: 'Pricing Your Art: A Practical Guide', type: 'Guide', category: 'Finance', summary: 'A step-by-step guide to calculating fair prices for your products.', isLowBandwidth: true, downloadLink: '#' },
    { id: 'res3', title: 'Mastering Social Media Marketing', type: 'Video', category: 'Marketing', summary: 'Video tutorial on using Instagram and Facebook to reach a wider audience (Link only).', isLowBandwidth: false },
    { id: 'res4', title: 'Financial Management for SMEs', type: 'Article', category: 'Finance', summary: 'Tips on budgeting, saving, and managing cash flow for your creative business.', isLowBandwidth: true },
];

const mockMentors: Mentor[] = [
    { id: 'm1', name: 'Dr. Aliyu Bello', expertise: 'Business Strategy & Scaling', bio: 'Seasoned entrepreneur with 20+ years of experience in helping SMEs grow.', imageUrl: 'https://picsum.photos/seed/m1/100/100' },
    { id: 'm2', name: 'Hadiza Ibrahim', expertise: 'Textile Design & International Markets', bio: 'Award-winning textile artist who has exported her work to Europe and the US.', imageUrl: 'https://picsum.photos/seed/m2/100/100' },
    { id: 'm3', name: 'Samuel Adekunle', expertise: 'Digital Marketing & E-commerce', bio: 'A digital native who specializes in building online stores and marketing for creative brands.', imageUrl: 'https://picsum.photos/seed/m3/100/100' },
];

const mockEvents: CommunityEvent[] = [
    { id: 'ev1', title: 'Bauchi Artisans Market', date: 'Last Saturday of Every Month', location: 'Ibrahim Babangida Square', description: 'A monthly market showcasing the best crafts from across the state.', type: 'In-Person' },
    { id: 'ev2', title: 'Virtual Meetup: Creatives Connect', date: 'October 15, 2024 - 6 PM', location: 'Online (Zoom)', description: 'An online networking event for artists, musicians, and writers to share ideas and collaborate.', type: 'Virtual' },
];

const mockCollaborations: Collaboration[] = [
    {id: 'col1', title: 'Seeking a musician for short film score', author: 'Reel Dreams Films', description: 'We are shooting a documentary about Bauchi and need a composer who can create a score with a local feel.', skillsNeeded: ['Music Composition', 'Sound Design']},
    {id: 'col2', title: 'Graphic Designer needed for book cover', author: 'Scribe Publishing', description: 'Looking for a talented graphic designer to create a cover for a new collection of short stories by local authors.', skillsNeeded: ['Graphic Design', 'Typography']},
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
