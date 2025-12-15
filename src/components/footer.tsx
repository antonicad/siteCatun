import { Instagram, Twitter, Facebook, Youtube } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, url: '#' },
  { name: 'Twitter', icon: Twitter, url: '#' },
  { name: 'Facebook', icon: Facebook, url: '#' },
  { name: 'YouTube', icon: Youtube, url: '#' },
];

export default function Footer() {
  return (
    <footer className="border-t border-border/40 bg-background">
      <div className="container flex flex-col items-center justify-between gap-4 py-8 sm:flex-row">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} CÅTUN. All rights reserved.
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
