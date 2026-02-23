import MailerLiteEmbed from "./MailerLiteEmbed.jsx";

export const metadata = {
  title: "Newsletter | Trupa Cåtun",
  description:
    "Abonează-te la newsletter-ul trupei Cåtun pentru noutăți, lansări noi și date de concerte.",
};

export default function NewsletterPage() {
  return (
    <div className="container mx-auto py-16 px-4 text-center">
      <h1 className="text-3xl font-bold mb-6">
        Newsletter Trupa Cåtun
      </h1>

      <p className="mb-8 text-muted-foreground">
        Primește actualizări, anunțuri despre lansări și concerte. Promitem că nu deranjăm prea mult! 🤟🖤
      </p>

      <MailerLiteEmbed />
    </div>
  );
}