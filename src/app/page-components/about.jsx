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
              Despre Cåtun
            </h2>
            <p className="text-lg text-muted-foreground">
              Cåtun este o trupă de hard rock din Iași, fondată pe 8 martie 2024, ce aduce pe scenă energie pură, 
              riff-uri puternice și o conexiune autentică cu publicul. 
              Suntem mai mult decât o trupă – suntem o familie ce oferă experiențe live memorabile, 
              lăsând întotdeauna fanii cu amintiri de neuitat.
            </p>
            <p className="text-lg text-muted-foreground">
              Am avut ocazia să electrizăm scene locale, 
              și am dus muzica noastră în orașe precum Iași, Bistrița, Brașov și Chișinău. 
              Cu un repertoriu 100% original, garantăm un show memorabil, 
              în care fiecare piesă spune o poveste și fiecare riff ridică publicul la un nou nivel de energie.
          </p>

          <p className="text-muted-foreground">
              Trupa este formată din:
          </p>
              <ul className="list-disc list-inside text-muted-foreground">
                <li>Sebastian Djurj - Voce</li>
                <li>Matei Bolea - Tobe</li>
                <li>Denis Antonică - Bass</li>
                <li>Rareș Bandol - Chitară</li>
                <li>Mircea Rusu - Chitară</li>
              </ul>

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
