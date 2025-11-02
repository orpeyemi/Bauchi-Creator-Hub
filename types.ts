
export type View = 'dashboard' | 'commerce' | 'capital' | 'capacity' | 'community' | 'profile';

export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  imageUrl: string;
  seller: string;
  stock: number;
}

export interface Project {
  id: string;
  title: string;
  creator: string;
  goal: number;
  raised: number;
  description: string;
  imageUrl: string;
}

export interface TrainingResource {
  id: string;
  title: string;
  type: 'Article' | 'Video' | 'Guide';
  category: string;
  summary: string;
  isLowBandwidth: boolean;
  downloadLink?: string;
}

export interface Mentor {
    id: string;
    name: string;
    expertise: string;
    bio: string;
    imageUrl: string;
}

export interface CommunityEvent {
  id: string;
  title: string;
  date: string;
  location: string;
  description: string;
  type: 'In-Person' | 'Virtual';
}

export interface Collaboration {
    id: string;
    title: string;
    author: string;
    description: string;
    skillsNeeded: string[];
}
