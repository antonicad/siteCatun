import { NewsletterForm } from './newsletter-form';

export const metadata = {
  title: 'Newsletter | CÅTUN Official',
  description: 'Abonează-te la newsletter-ul CÅTUN pentru noutăți, lansări noi și date de turneu.',
};

export default function NewsletterPage() {
  return (
    <div className="container py-16 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">
              Alătură-te Newsletter-ului Nostru
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Fii la curent. Primește actualizări exclusive, anunțuri despre muzică nouă și date de turneu direct în inbox-ul tău.
            </p>
        </div>
        <NewsletterForm />
      </div>
    </div>
  );
}
