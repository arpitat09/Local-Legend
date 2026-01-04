export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'talent' | 'business';
  avatar?: string;
  bio?: string;
  location?: string;
}

export interface Talent {
  id: string;
  userId: string;
  name: string;
  category: string;
  description: string;
  rating: number;
  reviewCount: number;
  imageUrl: string;
  hourlyRate?: number;
  tags: string[];
}

export interface Message {
  id: string;
  senderId: string;
  receiverId: string;
  content: string;
  timestamp: string;
  read: boolean;
}

export const CURRENT_USER: User = {
  id: 'u1',
  name: 'Alex Rivera',
  email: 'alex@example.com',
  role: 'user',
  avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
  location: 'San Francisco, CA'
};

export const FEATURED_TALENTS: Talent[] = [
  {
    id: 't1',
    userId: 'u2',
    name: 'Sarah Chen - Artisan Potter',
    category: 'Arts & Crafts',
    description: 'Handcrafted ceramics inspired by nature. Custom orders available for home decor and dining.',
    rating: 4.9,
    reviewCount: 128,
    imageUrl: 'https://images.unsplash.com/photo-1493106641515-6b5631de4bb9?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hourlyRate: 45,
    tags: ['Ceramics', 'Handmade', 'Pottery']
  },
  {
    id: 't2',
    userId: 'u3',
    name: 'Marcus Bell - Jazz Pianist',
    category: 'Music',
    description: 'Professional pianist available for private events, weddings, and cozy restaurant evenings.',
    rating: 5.0,
    reviewCount: 84,
    imageUrl: 'https://images.unsplash.com/photo-1552422535-c45813c61732?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hourlyRate: 120,
    tags: ['Jazz', 'Piano', 'Live Music']
  },
  {
    id: 't3',
    userId: 'u4',
    name: 'Green Thumb Gardens',
    category: 'Landscaping',
    description: 'Sustainable urban gardening and landscape design. We bring life to your balcony or backyard.',
    rating: 4.8,
    reviewCount: 215,
    imageUrl: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hourlyRate: 60,
    tags: ['Gardening', 'Eco-friendly', 'Design']
  },
  {
    id: 't4',
    userId: 'u5',
    name: 'Elena Rodriguez - Photography',
    category: 'Photography',
    description: 'Capturing moments that matter. Specializing in family portraits and local events.',
    rating: 4.9,
    reviewCount: 156,
    imageUrl: 'https://images.unsplash.com/photo-1554048612-387768052bf7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80',
    hourlyRate: 95,
    tags: ['Portrait', 'Event', 'Photography']
  }
];

export const MOCK_MESSAGES: Message[] = [
  {
    id: 'm1',
    senderId: 'u2',
    receiverId: 'u1',
    content: 'Hi Alex! Thanks for your interest in the custom vases. I can definitely have them ready by next week.',
    timestamp: '2023-10-25T10:30:00Z',
    read: true
  },
  {
    id: 'm2',
    senderId: 'u1',
    receiverId: 'u2',
    content: 'That sounds perfect, Sarah. What would be the total cost for 3 medium-sized ones?',
    timestamp: '2023-10-25T10:35:00Z',
    read: true
  },
  {
    id: 'm3',
    senderId: 'u2',
    receiverId: 'u1',
    content: 'For 3 medium vases, it would be $120 total. I can glaze them in that deep blue you liked.',
    timestamp: '2023-10-25T10:40:00Z',
    read: false
  }
];
