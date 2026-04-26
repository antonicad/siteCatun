import MerchItem from './merch-item';
import { merchItems } from '@/lib/data';

export const metadata = {
  title: 'Merch | Trupa Cåtun',
  description: 'Produse oficiale de la trupa Cåtun.',
};

export default function MerchPage() {
  return (
    <div className="container px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center mb-12">
        <h1 className="font-headline text-4xl md:text-5xl font-bold text-primary">
          Merch Trupa Cåtun
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Descoperă colecția oficială de merch Cåtun – tricouri, albume și accesorii create pentru fani. Comandă acum și fii parte din comunitate.
        </p>
        <p className="mt-4 text-lg text-muted-foreground">
          Orice comanda iti aduce un mic bonus din partea noastra, asa ca nu ezita sa ne sustii si sa porti cu mandrie merch-ul nostru! 🙌
        </p>
      </div>

      {merchItems.length === 0 ? (
        <p className="text-center text-muted-foreground">
          Produsele vor apărea în curând 👀
        </p>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {merchItems.map((item) => (
            <MerchItem key={item.id} item={item} />
          ))}
        </div>
      )}
      <div className="mx-auto max-w-2xl text-center mb-12">
        <p className="mt-4 text-lg text-muted-foreground">
          Fiecare solicitare este procesată manual, așa că te rugăm să ai răbdare. Vei fi contactat în scurt timp pentru detalii legate de plată și livrare. Mulțumim pentru susținere! 🙏
        </p>
      </div>
    </div>
  );
}