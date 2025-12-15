import MerchItem from './merch-item';
import { merchItems } from '@/lib/data';

export const metadata = {
  title: 'Merch | CÅTUN Official',
  description: 'Produse oficiale de la CÅTUN.',
};

export default function MerchPage() {
  return (
    <div className="container py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">
          Merchandise
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Ia-ți echipamentul oficial CÅTUN. Disponibil la concerte sau prin poștă.
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {merchItems.map((item) => (
          <MerchItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}
