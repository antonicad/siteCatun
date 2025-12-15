import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function About() {
  const bandPhoto = PlaceHolderImages.find((img) => img.id === 'band-photo');

  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">
              About CÅTUN
            </h2>
            <p className="text-lg text-muted-foreground">
              Born from the industrial heart of the city, CÅTUN is a four-piece metal band that channels the raw energy and chaos of modern life into a sonic onslaught. Our music is a journey through fractured soundscapes, combining guttural vocals, complex polyrhythms, and atmospheric electronics.
            </p>
            <p className="text-muted-foreground">
              Since our formation in 2018, we've been dedicated to pushing the boundaries of our sound, drawing inspiration from industrial, progressive, and post-metal genres. We are more than a band; we are a collective experience, an auditory rebellion against the mundane.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden shadow-2xl">
            {bandPhoto && (
              <Image
                src={bandPhoto.imageUrl}
                alt={bandPhoto.description}
                data-ai-hint={bandPhoto.imageHint}
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
