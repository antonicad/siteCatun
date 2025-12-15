import { PlaceHolderImages } from './placeholder-images';
import { Youtube, Disc, Mic } from 'lucide-react'; // Assuming these are song platforms icons, but they are not. Using Disc and Mic as placeholders. Youtube is valid.

export const songs = [
  {
    title: 'Ecourile Vidului',
    platform: 'Spotify',
    url: '#',
    icon: Disc,
  },
  {
    title: 'Realitate Fracturată',
    platform: 'Apple Music',
    url: '#',
    icon: Mic,
  },
  {
    title: 'Insomnie de Miezul Nopții - Videoclip Oficial',
    platform: 'YouTube',
    url: '#',
    icon: Youtube,
  },
  {
    title: 'Țipând în Abis',
    platform: 'Spotify',
    url: '#',
    icon: Disc,
  },
];

export const concerts = [
  {
    date: '2024-10-26',
    venue: 'The Underworld',
    city: 'Londra, UK',
    ticketUrl: '#',
    status: 'La vânzare',
  },
  {
    date: '2024-11-02',
    venue: 'Le Bataclan',
    city: 'Paris, FR',
    ticketUrl: '#',
    status: 'La vânzare',
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
    status: 'La vânzare',
  },
];

export const merchItems = [
  {
    id: 't-shirt',
    name: 'Tricou cu logo CÅTUN',
    price: '€25',
    image: PlaceHolderImages.find((img) => img.id === 't-shirt'),
  },
  {
    id: 'hoodie',
    name: 'Hanorac cu logo CÅTUN',
    price: '€50',
    image: PlaceHolderImages.find((img) => img.id === 'hoodie'),
  },
  {
    id: 'cap',
    name: 'Șapcă cu logo CÅTUN',
    price: '€20',
    image: PlaceHolderImages.find((img) => img.id === 'cap'),
  },
];
