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
              Cåtun este o trupă rock din România, activă din 2024, cu un sound care îmbină hard rock, metal, rock alternativ și influențe pop rock. Trupa interpretează exclusiv material original, cu un repertoriu live de aproximativ o oră ce aduce pe scenă energie pură, riff-uri puternice și o conexiune autentică cu publicul. 
            </p>
            <p className="text-lg text-muted-foreground">
              Am avut ocazia să electrizăm scene locale, 
              și am dus muzica noastră în orașe precum Iași, Bistrița, Brașov și Chișinău. 
              Cu un repertoriu 100% original, garantăm un show memorabil, 
              în care fiecare piesă spune o poveste și fiecare notă ridică publicul la un nou nivel de energie.
          </p>

          <p className="text-muted-foreground">
              Trupa este formată din:
          </p>
              <ul className="list-disc list-inside text-muted-foreground">
<li>— D'Jurj (Sebastian) - Voce</li>
<li>— Mircea Rusu - Chitară</li>
<li>— Nyppy (Rareș) - Chitară</li>
<li>— Denis Antonică - Bass</li>
<li>— Matei Bolea - Tobe</li>
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
