import { NewsletterForm } from './newsletter-form';

export const metadata = {
  title: 'Newsletter | Trupa Cåtun',
  description: 'Abonează-te la newsletter-ul trupei Cåtun pentru noutăți, lansări noi și date de concerte.',
};

export default function NewsletterPage() {
  return (
    <div className="container px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">
              Newsletter
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Primește actualizări, anunțuri despre lansări și concerte. 
              Promitem că nu deranjăm prea mult! 🤟🖤
            </p>
        </div>
        <NewsletterForm />
      </div>

      <p className="mt-4 text-lg text-muted-foreground text-center mb-12">
         Notă: Pregătim ceva nou și tu vei fi primul care află! 😉
      </p>
    </div>
  );
}
