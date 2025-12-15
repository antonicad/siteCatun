import { ContactForm } from './contact-form';

export const metadata = {
  title: 'Contact | CÅTUN Official',
  description: 'Get in touch with CÅTUN for bookings, press, or any other inquiries.',
};

export default function ContactPage() {
  return (
    <div className="container py-16 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">
              Contact Us
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              For bookings, press, or general inquiries, please use the form below.
            </p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
}
