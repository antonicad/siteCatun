import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Music } from 'lucide-react';

export default function Hero() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'hero');

  return (
    <section className="relative h-[60vh] min-h-[400px] w-full flex items-center justify-center text-center text-white">
      {heroImage && (
        <Image
          src={heroImage.imageUrl}
          alt={heroImage.description}
          data-ai-hint={heroImage.imageHint}
          fill
          className="object-cover object-center"
          priority
        />
      )}
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 flex flex-col items-center gap-6 px-4">
        <div className="relative w-48 h-48 md:w-64 md:h-64 lg:w-48 lg:h-48">
            <Image 
                src="/logo.png" 
                alt="CÅTUN logo" 
                fill 
                style={{objectFit: 'contain'}} 
                className="animate-fade-in-down"
            />
        </div>
        <p className="max-w-2xl text-lg md:text-xl text-primary/90">
          Bun venit pe site-ul oficial al trupei Cåtun - 
          o trupă hard rock din Iași, România
        </p>
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="https://www.youtube.com/watch?v=u2lyqo2vTOA" rel="noopener noreferrer">
            <Music className="mr-2 h-5 w-5" />
            Lansarea piesei "Poduri" - Youtube
          </Link>
        </Button>
      </div>
    </section>
  );
}
