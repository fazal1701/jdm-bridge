// Community domain types

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  vehicle: string;
  quote: string;
  rating: number;
  avatar?: string;
  verified: boolean;
}

export interface CommunityStory {
  id: string;
  author: {
    name: string;
    location: string;
    avatar?: string;
  };
  vehicle: string;
  quote: string;
  image?: string;
  views: number;
  likes: number;
  comments: number;
  importedCost: number;
}

export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: string;
}


