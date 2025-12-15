import type { Song, Concert, MerchItem } from './types';
import { PlaceHolderImages } from './placeholder-images';
import { Youtube, Disc, Mic } from 'lucide-react'; // Assuming these are song platforms icons, but they are not. Using Disc and Mic as placeholders. Youtube is valid.

export const songs: Song[] = [
  {
    title: 'Echoes of the Void',
    platform: 'Spotify',
    url: '#',
    icon: Disc,
  },
  {
    title: 'Fractured Reality',
    platform: 'Apple Music',
    url: '#',
    icon: Mic,
  },
  {
    title: 'Midnight Insomnia - Official Video',
    platform: 'YouTube',
    url: '#',
    icon: Youtube,
  },
  {
    title: 'Screaming into the Abyss',
    platform: 'Spotify',
    url: '#',
    icon: Disc,
  },
];

export const concerts: Concert[] = [
  {
    date: '2024-10-26',
    venue: 'The Underworld',
    city: 'London, UK',
    ticketUrl: '#',
    status: 'On Sale',
  },
  {
    date: '2024-11-02',
    venue: 'Le Bataclan',
    city: 'Paris, FR',
    ticketUrl: '#',
    status: 'On Sale',
  },
  {
    date: '2024-11-09',
    venue: 'SO36',
    city: 'Berlin, DE',
    ticketUrl: '#',
    status: 'Sold Out',
  },
  {
    date: '2024-11-15',
    venue: 'Melkweg',
    city: 'Amsterdam, NL',
    ticketUrl: '#',
    status: 'On Sale',
  },
];

export const merchItems: MerchItem[] = [
  {
    id: 't-shirt',
    name: 'CÅTUN Logo T-Shirt',
    price: '€25',
    image: PlaceHolderImages.find((img) => img.id === 't-shirt')!,
  },
  {
    id: 'hoodie',
    name: 'CÅTUN Logo Hoodie',
    price: '€50',
    image: PlaceHolderImages.find((img) => img.id === 'hoodie')!,
  },
  {
    id: 'cap',
    name: 'CÅTUN Logo Cap',
    price: '€20',
    image: PlaceHolderImages.find((img) => img.id === 'cap')!,
  },
];
