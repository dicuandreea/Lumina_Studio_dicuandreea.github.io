export interface Artwork {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technique: string; // e.g., Liquify, Color Grading
  price: number;
}

export interface Service {
  id: number;
  title: string;
  description: string;
  price: string;
  icon: string;
}

export interface CartItem extends Artwork {
  quantity: number;
}

export enum PageState {
  HOME = 'HOME',
  PORTFOLIO = 'PORTFOLIO',
  SERVICES = 'SERVICES',
  SHOP = 'SHOP',
  ABOUT = 'ABOUT',
  CONTACT = 'CONTACT',
  CHECKOUT = 'CHECKOUT'
}