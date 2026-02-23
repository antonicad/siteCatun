import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/header';
import Footer from '@/components/footer';
import NewsletterButton from "@/components/newsletterbutton";
import './globals.css';

export const metadata = {
  title: 'Trupa Cåtun - Site Oficial',
  description: 'Site-ul oficial al trupei Cåtun.',
  icons: {
    icon: '/favicon.ico', // favicon standard
    shortcut: '/favicon.ico',
  },
  keywords: [
    'ce este catun',
    'catun',
    'cătun',
    'cartoon',
    'concerte catun'
  ],
  authors: [{ name: 'Trupa Cătun' }],
  openGraph: {
    title: 'Trupa Cåtun - Site Oficial',
    description: 'Site-ul oficial al trupei Cåtun.',
    url: 'https://catunband.ro',
    siteName: 'Trupa Cåtun',
    locale: 'ro_RO',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="ro" className="dark">
      <head>
        {/* Preconnect Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

        {/* Google Font */}
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;500;700&display=swap"
          rel="stylesheet"
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
      </head>

      <body className="font-body bg-background text-foreground antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
        <Toaster />
        <NewsletterButton />
      </body>
    </html>
  );
}
