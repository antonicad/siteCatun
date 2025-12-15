/* import MerchItem from './merch-item'; */
import { merchItems } from '@/lib/data';

export const metadata = {
  title: 'Merch | Trupa Cåtun',
  description: 'Produse oficiale de la trupa Cåtun.',
};

export default function MerchPage() {
  return (
    <div className="container px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">
          Merch Trupa Cåtun
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          În curând vei putea găsi aici produse oficiale ale trupei Cåtun. Rămâi aproape pentru lansarea noastră de merch! 🤟🖤
          <br></br><br></br>
          Pentru întrebări legate de merch, contactează-ne din pagina de contact.
        </p>
      </div>
    </div>
  );
}
