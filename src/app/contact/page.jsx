import { ContactForm } from './contact-form';
import Link from 'next/link';

export const metadata = {
  title: 'Contact | Trupa Cåtun',
  description: 'Luați legătura cu Trupa Cåtun.',
};

export default function ContactPage() {
  return (
    <div className="container px-4 py-16 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">
              Contact
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Suntem deschiși pentru orice opinie, întrebare sau propunere.
            </p>
           <p className="mt-4 text-lg space-y-1">
            <span>
              Instagram:{' '}
              <Link href="https://www.instagram.com/catunband/" target="_blank">
                @catunband
              </Link>
            </span>
            <br />
            <span>
              Facebook:{' '}
              <Link href="https://www.facebook.com/catunband" target="_blank">
                Cåtun Band
              </Link>
            </span>
            <br />
            <span>E-mail: <a href="mailto:contact@catunband.ro">contact@catunband.ro</a></span>
            <br />
            <span>Telefon: <a href="tel:+40755298699">0755 298 699</a></span>
          </p>

            <p className="mt-4 text-lg text-muted-foreground">
              sau încearcă prin:
            </p>
        </div>

        <ContactForm />

        <p className="mt-4 text-lg text-center">
            <a href="/press-kit">Press Kit RO</a> • <a href="/press-kit-en">Press Kit EN</a>
          </p>
          <p className="mt-4 text-lg text-center text-muted-foreground">
            Pentru booking, colaborări sau alte întrebări, nu ezitați să ne contactați!
        </p>
      </div>
    </div>
  );
}
