export type Category = 
  | 'all'
  | 'keychains'
  | 'BagHangingCharms'
  | 'ScarfPins'
  | 'clips'
  | 'flowers'
  | 'plushies'
  | 'bookmarks'
  | 'custom';

export interface Product {
  id: string;
  name: string;
  category: Category;
  price: number; // in PKR
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  image: string;
  galleryImages?: string[];
  description: string;
  isBestSeller?: boolean;
  isNew?: boolean;
  inStock: boolean;
  colors: string[];
  yarnType: string;
  dimensions?: string;
  leadTime: string; // e.g., "1-2 days"
  details: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
  selectedColor?: string;
  customNote?: string;
}

export interface Review {
  id: string;
  customerName: string;
  rating: number;
  date: string;
  comment: string;
  productName: string;
  verified: boolean;
  avatar?: string;
  productImage?: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'ordering' | 'custom' | 'care' | 'shipping';
}

export interface CustomOrderRequest {
  itemType: string;
  primaryColor: string;
  secondaryColor: string;
  customText?: string;
  giftBox: boolean;
  specialInstructions: string;
  customerName: string;
  contactNumber: string;
}
