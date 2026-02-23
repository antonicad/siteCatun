import { PlaceHolderImages } from './placeholder-images';
import { Youtube, Disc, Mic } from 'lucide-react'; // Assuming these are song platforms icons, but they are not. Using Disc and Mic as placeholders. Youtube is valid.

export const songs = [
  {
    title: 'Poduri',
    platform: 'Youtube',
    url: 'https://www.youtube.com/watch?v=u2lyqo2vTOA',
    icon: Youtube,
  },
  {
    title: 'Amurg',
    platform: 'Youtube',
    url: 'https://www.youtube.com/watch?v=dt9_Pv6S7Ok',
    icon: Youtube,
  },
  {
    title: 'Lancia',
    platform: 'Youtube',
    url: 'https://youtu.be/_WbcbacV2F8',
    icon: Youtube,
  },
  {
    title: 'Nisipuri',
    platform: 'YouTube',
    url: 'https://youtu.be/ee_AeH_nkwE',
    icon: Youtube,
  },
];

export const concerts = [
  {
    date: '2026-03-21',
    venue: 'Cåtun x Snoe Vane x Polystate',
    location: "Rock'N'Rolla, Iași, România",
    price: '50 RON',
  }
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
