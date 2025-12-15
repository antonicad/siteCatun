import Image from 'next/image';
import { PlaceHolderImages } from '@/lib/placeholder-images';

export default function About() {
  const bandPhoto = PlaceHolderImages.find((img) => img.id === 'band-photo');

  return (
    <section id="about" className="py-16 sm:py-24 bg-background">
      <div className="container px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">
              Despre CÅTUN
            </h2>
            <p className="text-lg text-muted-foreground">
              Născută din inima industrială a orașului, CÅTUN este o trupă de metal formată din patru membri care canalizează energia brută și haosul vieții moderne într-un asalt sonor. Muzica noastră este o călătorie prin peisaje sonore fracturate, combinând voci guturale, poliritmuri complexe și elemente electronice atmosferice.
            </p>
            <p className="text-muted-foreground">
              De la formarea noastră în 2018, ne-am dedicat depășirii limitelor sunetului nostru, inspirându-ne din genurile industrial, progresiv și post-metal. Suntem mai mult decât o trupă; suntem o experiență colectivă, o rebeliune auditivă împotriva banalului.
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
