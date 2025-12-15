import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, url: 'https://www.instagram.com/catunband/' },
  { name: 'Facebook', icon: Facebook, url: 'https://www.facebook.com/catunband' },
  { name: 'YouTube', icon: Youtube, url: 'https://www.youtube.com/@catunband' },
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
