import { Link } from "lucide-react";

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
        <p className="mt-4 text-lg text-white">
          Din păcate, momentan produsele de merch nu sunt disponibile pe site. Însă, daca dorești să achiziționezi merch oficial, te rugăm să ne contactezi prin intermediul formularului de contact. Mulțumim pentru susținere! {"<3"}
        </p>
        <a href="/contact">
        <button className="mt-6 px-6 py-3 bg-primary text-black rounded-md hover:bg-primary-grey transition-colors">Contactează-ne</button>
        </a>
      </div>
    </div>
  );
}