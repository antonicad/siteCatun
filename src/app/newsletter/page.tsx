import { NewsletterForm } from './newsletter-form';

export const metadata = {
  title: 'Newsletter | CÅTUN Official',
  description: 'Subscribe to the CÅTUN newsletter for updates, new releases, and tour dates.',
};

export default function NewsletterPage() {
  return (
    <div className="container py-16 sm:py-24">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-12">
            <h1 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">
              Join Our Newsletter
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
              Stay in the loop. Get exclusive updates, new music announcements, and tour dates delivered straight to your inbox.
            </p>
        </div>
        <NewsletterForm />
      </div>
    </div>
  );
}
