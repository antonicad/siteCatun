'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, Music, X, Home, Shirt, Info, Calendar, Mail, Newspaper } from 'lucide-react';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Acasă', icon: Home, anchor: false },
  { href: '/#about', label: 'Despre', icon: Info, anchor: true },
  { href: '/#music', label: 'Muzică', icon: Music, anchor: true },
  { href: '/#concerts', label: 'Concerte', icon: Calendar, anchor: true },
  { href: '/merch', label: 'Merch', icon: Shirt, anchor: false },
  { href: '/contact', label: 'Contact', icon: Mail, anchor: false },
  { href: '/newsletter', label: 'Newsletter', icon: Newspaper, anchor: false },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  // Închide meniul când schimbă pagina
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Scroll smooth pentru ancore
  const handleScroll = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault();
      const targetId = href.replace('/#', '');
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const yOffset = -80;
        const y = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: y, behavior: 'smooth' });
        setIsOpen(false);
      }
    }
  };

  const NavLink = ({ href, label, icon: Icon, anchor }) => (
    <Link
      href={href}
      onClick={(e) => anchor && handleScroll(e, href)}
      className="flex items-center gap-2 text-lg font-medium text-primary/80 transition-colors hover:text-primary sm:text-sm"
    >
      <Icon className="h-5 w-5 sm:hidden" />
      <span>{label}</span>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="relative h-12 w-12">
          <Image src="/logo.png" alt="CÅTUN logo" fill style={{ objectFit: 'contain' }} />
        </Link>

        {/* Meniu desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        {/* Meniu mobil */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          {/* Trigger hamburger */}
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Deschide meniul</span>
            </Button>
          </SheetTrigger>

          {/* Conținut meniul mobil */}
          <SheetContent side="right" className="w-[300px] bg-background">
            <SheetTitle className="sr-only">Meniu principal</SheetTitle>
            <div className="flex h-full flex-col">
              <div className="flex items-center justify-between border-b pb-4">

                {/* Buton închidere X */}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                >
                  <span className="sr-only">Închide meniul</span>
                </Button>
              </div>

              {/* Link-uri mobil */}
              <nav className="mt-8 flex flex-col gap-6">
                {navLinks.map((link) => (
                  <NavLink key={link.href} {...link} />
                ))}
              </nav>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
