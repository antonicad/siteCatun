import { ContactForm } from './contact-form';

export const metadata = {
  title: 'Contact | CÅTUN Official',
  description: 'Luați legătura cu CÅTUN pentru rezervări, presă sau orice alte întrebări.',
};

export default function ContactPage() {
  return (
    <div className="container px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">
              Contactează-ne
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Pentru rezervări, presă sau întrebări generale, vă rugăm să folosiți formularul de mai jos.
            </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
