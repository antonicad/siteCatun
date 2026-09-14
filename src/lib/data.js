import { PlaceHolderImages } from './placeholder-images';
import { Youtube, Disc, Mic } from 'lucide-react'; // Assuming these are song platforms icons, but they are not. Using Disc and Mic as placeholders. Youtube is valid.

export const songs = [
  {
    title: 'Zori',
    platform: 'Youtube',
    url: 'https://youtu.be/p2uVRnq4b4g',
    icon: Youtube,
  },
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
    date: '2026-12-31',
    location: "More T.B.A.",
    turneu: ":(",
  }
];

export const merchItems = [
  {
    id: 'album-drumuri',
    name: 'Album "Drumuri și Umbre" CD',
    price: '50 lei',
    image: PlaceHolderImages.find((img) => img.id === 'product'),
  },
  {
    id: 'tricou-drumuri',
    name: 'Tricou "Drumuri și Umbre" - ediție limitată',
    price: '60 lei',
    image: PlaceHolderImages.find((img) => img.id === 'product'),
  },
  {
    id: 'tricou',
    name: 'Tricou simplu Cåtun',
    price: '60 lei',
    image: PlaceHolderImages.find((img) => img.id === 'product'),
  },
  {
    id: 'bat-tobe',
    name: 'Băț de tobe Cåtun',
    price: '15 lei',
    image: PlaceHolderImages.find((img) => img.id === 'product'),
  },
  {
    id: 'poster-trupa',
    name: 'Poster Trupa Cåtun',
    price: '30 lei',
    image: PlaceHolderImages.find((img) => img.id === 'product'),
  },
  {
    id: 'breloc',
    name: 'Breloc Cåtun',
    price: '20 lei',
    image: PlaceHolderImages.find((img) => img.id === 'product'),
  },
];


