import { PlaceHolderImages } from './placeholder-images';
import { Youtube, Disc, Mic } from 'lucide-react'; // Assuming these are song platforms icons, but they are not. Using Disc and Mic as placeholders. Youtube is valid.

export const songs = [
  {
    title: 'Amurg - Lyrics Video',
    platform: 'Youtube',
    url: 'https://www.youtube.com/watch?v=dt9_Pv6S7Ok',
    icon: Youtube,
  },
    {
    title: 'Amurg',
    platform: 'Spotify',
    url: 'https://open.spotify.com/track/3GWruzbtXnev769NHr4k90',
    icon: Mic,
  },
  {
    title: 'Lancia - Official Video',
    platform: 'Youtube',
    url: 'https://youtu.be/_WbcbacV2F8',
    icon: Youtube,
  },
    {
    title: 'Lancia',
    platform: 'Spotify',
    url: 'https://open.spotify.com/track/5BT3yiztVNIfhi6H9twJUx',
    icon: Mic,
  },
  {
    title: 'Nisipuri - Official Video',
    platform: 'YouTube',
    url: 'https://youtu.be/ee_AeH_nkwE',
    icon: Youtube,
  },
    {
    title: 'Nisipuri',
    platform: 'Spotify',
    url: 'https://open.spotify.com/track/0cRSrAVwCOcbTFaUioxccw',
    icon: Mic,
  }
];

export const concerts = [
  {
    date: '2024-03-08',
    venue: 'Nu sunt concerte planificate în acest moment.',
    location: 'Romania',
    price: ' ',
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
