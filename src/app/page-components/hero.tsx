import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Coffee } from 'lucide-react';

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
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-headline font-bold tracking-tighter text-shadow-lg animate-fade-in-down">
          CÅTUN
        </h1>
        <p className="max-w-2xl text-lg md:text-xl text-primary/90">
          Forjând sunete din adâncurile abisului urban.
        </p>
        <Button size="lg" asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
          <Link href="#" target="_blank" rel="noopener noreferrer">
            <Coffee className="mr-2 h-5 w-5" />
            Cumpără-ne o cafea
          </Link>
        </Button>
      </div>
    </section>
  );
}
