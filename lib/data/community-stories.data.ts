// Community stories mock data

import type { CommunityStory } from "@/lib/types/community.types";

export const mockCommunityStories: CommunityStory[] = [
  {
    id: "story-1",
    author: {
      name: "Alex Chen",
      location: "Seattle, WA",
    },
    vehicle: "R34 Skyline GTR Build",
    quote: "Childhood dream to reality",
    views: 3427,
    likes: 1240,
    comments: 156,
    importedCost: 28500,
  },
  {
    id: "story-2",
    author: {
      name: "Marcus Thompson",
      location: "Los Angeles, CA",
    },
    vehicle: "1993 Toyota Supra A60",
    quote: "The investment that paid off",
    views: 8942,
    likes: 3204,
    comments: 428,
    importedCost: 22300,
  },
  {
    id: "story-3",
    author: {
      name: "Priya Kapoor",
      location: "Toronto, ON",
    },
    vehicle: "1999 Honda Civic Type-R",
    quote: "Daily driver perfection",
    views: 2156,
    likes: 912,
    comments: 89,
    importedCost: 12800,
  },
];


