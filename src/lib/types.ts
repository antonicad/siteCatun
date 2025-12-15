import type { ImagePlaceholder } from './placeholder-images';

export type Song = {
  title: string;
  platform: string;
  url: string;
  icon: React.ElementType;
};

export type Concert = {
  date: string;
  venue: string;
  city: string;
  ticketUrl: string;
  status: 'La vânzare' | 'Sold Out' | 'Urmează';
};

export type MerchItem = {
  id: string;
  name: string;
  price: string;
  image: ImagePlaceholder;
};
