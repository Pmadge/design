// Mock layout data
export const mockLayouts = [
  {
    id: 1,
    name: "Minimalist Haven",
    style: "minimalist",
    cost: 850,
    items: 8,
    matchScore: 95,
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    products: [1, 2, 3, 4, 5, 6, 7, 8]
  },
  {
    id: 2,
    name: "Cozy Comfort",
    style: "cozy",
    cost: 1200,
    items: 10,
    matchScore: 88,
    imageUrl: "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=800&h=600&fit=crop",
    products: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    id: 3,
    name: "Modern Minimal",
    style: "modern",
    cost: 1100,
    items: 9,
    matchScore: 92,
    imageUrl: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=600&fit=crop",
    products: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }
];

// Mock product data
export const mockProducts = [
  {
    id: 1,
    name: "Modern Platform Bed Frame",
    price: 249,
    category: "Furniture",
    retailer: "IKEA",
    imageUrl: "https://images.unsplash.com/photo-1551298370-9c63b6a538ad?w=400&h=400&fit=crop",
    link: "https://ikea.com"
  },
  {
    id: 2,
    name: "Minimalist Desk Chair",
    price: 89,
    category: "Seating",
    retailer: "Amazon",
    imageUrl: "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400&h=400&fit=crop",
    link: "https://amazon.com"
  },
  {
    id: 3,
    name: "Storage Ottoman",
    price: 129,
    category: "Storage",
    retailer: "Target",
    imageUrl: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&h=400&fit=crop",
    link: "https://target.com"
  },
  {
    id: 4,
    name: "Floor Lamp with Shelf",
    price: 79,
    category: "Lighting",
    retailer: "IKEA",
    imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
    link: "https://ikea.com"
  },
  {
    id: 5,
    name: "Abstract Wall Art Set",
    price: 45,
    category: "Decor",
    retailer: "Target",
    imageUrl: "https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?w=400&h=400&fit=crop",
    link: "https://target.com"
  },
  {
    id: 6,
    name: "Area Rug 5x7",
    price: 159,
    category: "Decor",
    retailer: "Amazon",
    imageUrl: "https://images.unsplash.com/photo-1556911220-bff31c812dba?w=400&h=400&fit=crop",
    link: "https://amazon.com"
  },
  {
    id: 7,
    name: "Bookshelf Unit",
    price: 199,
    category: "Storage",
    retailer: "IKEA",
    imageUrl: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop",
    link: "https://ikea.com"
  },
  {
    id: 8,
    name: "Throw Pillow Set",
    price: 35,
    category: "Decor",
    retailer: "Target",
    imageUrl: "https://images.unsplash.com/photo-1584100936595-c0655ba50a59?w=400&h=400&fit=crop",
    link: "https://target.com"
  },
  {
    id: 9,
    name: "Coffee Table",
    price: 179,
    category: "Furniture",
    retailer: "Amazon",
    imageUrl: "https://images.unsplash.com/photo-1532372320572-cda25653a26d?w=400&h=400&fit=crop",
    link: "https://amazon.com"
  },
  {
    id: 10,
    name: "Table Lamp",
    price: 49,
    category: "Lighting",
    retailer: "Target",
    imageUrl: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=400&h=400&fit=crop",
    link: "https://target.com"
  }
];

// Mock designer data
export const mockDesigners = [
  {
    id: 1,
    name: "Sarah Chen",
    experience: "Beginner",
    rate: 30,
    rating: 4.8,
    projectsCompleted: 12,
    specialties: ["minimalist", "small spaces"],
    profilePhoto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop",
    portfolio: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=300&h=200&fit=crop"
    ]
  },
  {
    id: 2,
    name: "Marcus Johnson",
    experience: "Beginner",
    rate: 28,
    rating: 4.6,
    projectsCompleted: 8,
    specialties: ["modern", "industrial"],
    profilePhoto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop",
    portfolio: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop"
    ]
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    experience: "Intermediate",
    rate: 35,
    rating: 4.9,
    projectsCompleted: 25,
    specialties: ["bohemian", "cozy"],
    profilePhoto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop",
    portfolio: [
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=300&h=200&fit=crop"
    ]
  },
  {
    id: 4,
    name: "David Kim",
    experience: "Beginner",
    rate: 32,
    rating: 4.7,
    projectsCompleted: 15,
    specialties: ["minimalist", "modern"],
    profilePhoto: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop",
    portfolio: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300&h=200&fit=crop"
    ]
  },
  {
    id: 5,
    name: "Jessica Park",
    experience: "Beginner",
    rate: 27,
    rating: 4.5,
    projectsCompleted: 10,
    specialties: ["cozy", "traditional"],
    profilePhoto: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=200&h=200&fit=crop",
    portfolio: [
      "https://images.unsplash.com/photo-1556912172-45b7abe8b7e1?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop"
    ]
  },
  {
    id: 6,
    name: "Alex Thompson",
    experience: "Intermediate",
    rate: 38,
    rating: 4.9,
    projectsCompleted: 30,
    specialties: ["modern", "industrial"],
    profilePhoto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&h=200&fit=crop",
    portfolio: [
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=300&h=200&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=300&h=200&fit=crop"
    ]
  }
];

