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
    date: '2026-03-21',
    location: "Iași, RO (cu Polystate & Snoe Vane)",
  },
  {
    date: '2026-04-18',
    location: "București, RO - Omen Bar (cu Phonic Bastard)",
    turneu: "TURNEU",
  },
  {
    date: '2026-04-19',
    location: "Iași, RO (cu Hypnotical)",
  },
  {
    date: '2026-05-09',
    location: "Cluj, RO - Machines (cu Frontkill)",
    turneu: "TURNEU",
  },
  {
    date: '2026-05-16',
    location: "Bistrița, RO - Soho Music Hall (cu Polystate)",
    turneu: "TURNEU",
  },
  {
    date: '2026-05-22',
    location: "Gura Humorului, RO - Obciniada",
    turneu: "TURNEU",
  },
  {
    date: '2026-05-23',
    location: "Botoșani, RO - Cross Medio Pub (cu Downside)",
    turneu: "TURNEU",
  },
  {
    date: '2026-05-30',
    location: "Galați, RO - Uzina (cu Polystate)",
    turneu: "TURNEU",
  },
  {
    date: '2026-06-05',
    location: "Brașov, RO - Tâmplărie (cu Polystate)",
    turneu: "TURNEU",
  },
  {
    date: '2026-06-06',
    location: "Sibiu, RO - Rock N Bike (cu Polystate)",
    turneu: "TURNEU",
  },
  {
    date: '2026-06-13',
    location: "Chișinău, MD - Labrewtory (cu Hypnotical & Encore)",
    turneu: "TURNEU",
  },
  {
    date: '2026-07-18',
    location: "Iași, RO - Artă, Tată",
    turneu: "TURNEU",
  },
    {
    date: '2026-12-31',
    location: "More T.B.A.",
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
