export interface Product {
  product_id: string;
  product_name: string;
  category: 'dress' | 'coord' | 'girlswear' | 'ethnic' | 'new_arrival';
  collection: string;
  description: string;
  price?: string | null;
  sale_price?: string | null;
  images: string[];
  sizes: string[];
  colors?: { name: string; hex: string }[];
  fabric?: string;
  care_instructions?: string[];
  availability: 'In Stock' | 'Made to Order' | 'Limited Stock' | 'DM to Check';
  featured?: boolean;
  new_arrival?: boolean;
  instagram_order_link?: string;
  code?: string;
}

export interface CollectionItem {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  tag: string;
  categoryKey: string;
}

export interface SizeChartRow {
  age: string;
  heightCm: string;
  heightIn: string;
  chestCm: string;
  chestIn: string;
  waistCm: string;
  waistIn: string;
  lengthCm: string;
  lengthIn: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Ordering' | 'Sizing & Care' | 'Delivery & Contact';
}

export interface OrderEnquiry {
  fullName: string;
  contact: string;
  productName: string;
  size: string;
  message: string;
}

export type PageId = 'home' | 'shop' | 'about' | 'size-guide' | 'contact';
