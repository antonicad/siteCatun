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
    location: "Iași, RO",
  },
  {
    date: '2026-04-18',
    location: "București, RO - Omen Bar (cu Phonic Bastard)",
  },
  {
    date: '2026-04-19',
    location: "Iași, RO",
  },
  {
    date: '2026-05-09',
    location: "Cluj, RO - Machines (cu Frontkill)",
  },
  {
    date: '2026-05-16',
    location: "Bistrița, RO - Soho Music Hall (cu Polystate)",
  },
  {
    date: '2026-05-22',
    location: "Gura Humorului, RO - Obciniada",
  },
  {
    date: '2026-05-23',
    location: "Botoșani, RO - Cross Medio Pub (cu Downside)",
  },
  {
    date: '2026-05-30',
    location: "Galați, RO - Uzina (cu Polystate)",
  },
  {
    date: '2026-06-05',
    location: "Brașov, RO - Tâmplărie (cu Polystate)",
  },
  {
    date: '2026-06-06',
    location: "Sibiu, RO - Rock N Bike (cu Polystate)",
  },
  {
    date: '2026-06-13',
    location: "Chișinău, MD - Labrewtory (cu Hypnotical & Encore)",
  },
  {
    date: '2026-07-18',
    location: "Iași, RO - Artă, Tată",
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
