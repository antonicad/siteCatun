'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname, useRouter } from 'next/navigation';
import {
  Menu,
  Music,
  Home,
  Shirt,
  Info,
  Calendar,
  Mail,
  Newspaper,
  BookOpen,
} from 'lucide-react';

import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/', label: 'Acasă', icon: Home },
  { href: '/#about', label: 'Despre', icon: Info },
  { href: '/#music', label: 'Muzică', icon: Music },
  { href: '/#concerts', label: 'Concerte', icon: Calendar },
  { href: '/blog', label: 'Blog din Cåtun', icon: BookOpen },
  { href: '/merch', label: 'Merch', icon: Shirt },
  { href: '/contact', label: 'Contact', icon: Mail },
  { href: '/newsletter', label: 'Newsletter', icon: Newspaper },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Închide meniul la schimbare de pagină
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Navigare + scroll pentru ancore
  const handleNavClick = (e, href) => {
    if (!href.includes('#')) return;

    e.preventDefault();
    const [path, hash] = href.split('#');

    const scrollToTarget = () => {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    };

    if (pathname !== path) {
      router.push(path);
      setTimeout(scrollToTarget, 150);
    } else {
      scrollToTarget();
    }
  };

  const isActive = (href) => {
    if (href === '/') return pathname === '/';
    return pathname === href || pathname.startsWith(href);
  };

  const NavLink = ({ href, label, icon: Icon }) => (
    <Link
      href={href}
      onClick={(e) => handleNavClick(e, href)}
      className={`flex items-center gap-2 text-sm font-medium transition-colors
        ${
          isActive(href)
            ? 'text-primary'
            : 'text-primary/70 hover:text-primary'
        }`}
    >
      <Icon className="h-4 w-4 md:hidden" />
      <span>{label}</span>
    </Link>
  );

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur">
      <div className="container flex h-16 items-center justify-between px-4">

        {/* Logo */}
        <Link href="/" className="relative h-12 w-12">
          <Image
            src="/logo.png"
            alt="CÅTUN logo"
            fill
            className="object-contain"
          />
        </Link>

        {/* Desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          {navLinks.map((link) => (
            <NavLink key={link.href} {...link} />
          ))}
        </nav>

        {/* Mobile */}
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild className="md:hidden">
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>

          <SheetContent side="right" className="w-[280px]">
            <SheetTitle className="sr-only">Meniu principal</SheetTitle>

            <nav className="mt-10 flex flex-col gap-6">
              {navLinks.map((link) => (
                <NavLink key={link.href} {...link} />
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}
