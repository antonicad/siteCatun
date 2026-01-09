import { Instagram, Facebook, Youtube, Music4, Disc, Clapperboard } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/catunband/' },
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/catunband' },
  { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@catunband' },
  { name: 'Apple Music', icon: Music4, url: 'https://music.apple.com/us/artist/c%C3%A5tun/1769647522' },
  { name: 'Spotify', icon: Disc, url: 'https://open.spotify.com/artist/2yr6XQ0YzYjAibW2L7uD6A' },
  { name: 'TikTok', icon: Clapperboard, url: 'https://www.tiktok.com/@catunband' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 sm:flex-row px-4">
        <p className="text-sm text-muted-foreground sm:ml-4">
          &copy; {new Date().getFullYear()} CÅTUN. Toate drepturile rezervate.
        </p>
        <div className="flex items-center gap-2">
          {socialLinks.map((social) => (
            <Button key={social.name} variant="ghost" size="icon" asChild>
              <Link href={social.url} target="_blank" rel="noopener noreferrer">
                <social.icon className="h-5 w-5" />
                <span className="sr-only">{social.name}</span>
              </Link>
            </Button>
          ))}
        </div>
      </div>
    </footer>
  );
}
