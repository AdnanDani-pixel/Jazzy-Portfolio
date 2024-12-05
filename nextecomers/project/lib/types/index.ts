export interface Product {
  id: string;
  name: string;
  price: number;
  imageUrl: string;
  description?: string;
  category?: string;
}

export interface Category {
  name: string;
  imageUrl: string;
  description?: string;
}