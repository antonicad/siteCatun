export const metadata = {
  title: "Press Kit | Cåtun Band",
  description:
    "Official press kit of Cåtun Band – bio, music, press photos, and media contact.",
  alternates: {
    languages: {
      en: "https://catunband.ro/en/press-kit",
      ro: "https://catunband.ro/press-kit",
    },
  },
};

import MapWrapper from '@/components/MapWrapper';

export default function PressKitEN() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 space-y-20">

      {/* LANGUAGE SWITCH */}
      <div className="flex justify-end">
        <a
          href="/press-kit"
          className="px-4 py-2 border rounded hover:bg-muted transition"
        >
          RO
        </a>
      </div>

      {/* HERO */}
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          PRESS KIT
        </h1>
        <p className="text-muted-foreground text-lg">
          Cåtun Band — hard rock / metal
        </p>
      </div>

      {/* SHORT BIO */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Short Bio</h2>
        <p className="text-muted-foreground leading-relaxed">
          Cåtun is a Romanian rock band active since 2024, blending hard rock, metal, alternative rock, and pop rock influences. The band performs exclusively original material and has played concerts in cities such as Bucharest, Cluj, Iași, Suceava, Brașov, Bistrița, and Chișinău.
        </p>
      </section>

      {/* EXTENDED BIO */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Extended Bio</h2>
        <p className="text-muted-foreground leading-relaxed whitespace-pre-line">
          Cåtun is a Romanian rock band active since <b>March 8, 2024</b>, with a sound influenced by <b>hard rock</b>, <b>metal</b>, <b>alternative rock</b>, and <b>pop rock</b>. Their style combines strong riffs with clear song structures and memorable choruses, designed for both live impact and accessibility.<br /><br />
          The project started during a joint rehearsal session and was formalized as a band on <b>Mother’s Day 2024</b> by vocalist D'Jurj and guitarist Nyppy. The name <b>Cåtun</b> comes from a small village where drummer Matei used to pick up bassist Denis on the way to rehearsals in Iași, a detail that became part of the band’s identity. The band is based in Iași, but members come from different towns. The “main headquarters” is in Boroaia, Suceava County, where they regularly meet for rehearsals and songwriting.<br /><br />
          Between 2024 and 2025, Cåtun performed <b>16 concerts</b>, <b>9 of which in 2025</b>, in cities like Iași, Suceava, Botoșani, Piatra Neamț, Brașov, Bistrița, and also internationally in Chișinău. Their live set is approximately one hour, suitable for clubs, festivals, and themed events.<br /><br />
          Certain songs, like <b>“Lancia”</b> and <b>“Nisipuri”</b>, are already well-known among concertgoers and considered representative of their live shows. Stylistically, the repertoire includes energetic tracks like <b>“Zori”</b>, accessible songs like <b>“Lancia”</b>, and introspective pieces like <b>“Poduri”</b>, their latest release.<br /><br />
          <b>All of Cåtun’s repertoire is original</b>. The band is currently preparing their debut album, scheduled for release in <b>2026</b>, which will include both live-performed and new material. Their activity focuses on growing their presence in the rock scene, media appearances, and participation in events and festivals domestically and abroad.
        </p>
      </section>

      {/* MEMBERS */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Band Members</h2>
        <ul className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
          <li>— D'Jurj (Sebastian) - Vocals</li>
          <li>— Mircea Rusu - Guitar</li>
          <li>— Nyppy (Rareș) - Guitar</li>
          <li>— Denis Antonică - Bass</li>
          <li>— Matei Bolea - Drums</li>
        </ul>
      </section>

      {/* LATEST RELEASE */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Latest Release</h2>
        <div className="space-y-2 text-muted-foreground">
          <p><strong>Song title:</strong> Poduri</p>
          <p><strong>Release date:</strong> January 9, 2026</p>
          <p>
            "Poduri" is a sentimental song exploring themes of reflection, guilt, and loss. The lyrics depict an inner struggle of someone taking responsibility for mistakes, trying to rebuild relationships, and overcome past pain.
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <a href="https://open.spotify.com/track/37th37UrfYBF1XEJIjFFy6" className="underline">Spotify</a>
          <a href="https://www.youtube.com/watch?v=u2lyqo2vTOA" className="underline">YouTube</a>
          <a href="https://music.apple.com/us/song/poduri/1867195497" className="underline">Apple Music</a>
        </div>
      </section>

<div className="relative z-0">
       <section
      className="
        px-4
        py-12
        md:min-h-screen
        md:flex
        md:items-center
        md:justify-center
      "
    >
      <div className="w-full max-w-6xl">
        <h2 className="text-3xl font-bold text-center mb-8">
          Concerts & Live Activity
        </h2>
        <MapWrapper />
      </div>
    </section>
</div>

      {/* MEDIA DOWNLOAD */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Media Materials</h2>
        <div className="grid sm:grid-cols-3 gap-6">
          <a
            href="/press_kit_catun.pdf"
            className="border border-border rounded-lg p-6 text-center hover:bg-muted transition"
          >
            📄 Press Kit PDF
          </a>
          <a
            href="https://drive.google.com/drive/folders/12JEJTqYht2EAFnPKRQ7Et-6ZK0nV7T9g?usp=drive_link"
            className="border border-border rounded-lg p-6 text-center hover:bg-muted transition"
          >
            📸 Press Photos
          </a>
          <a
            href="https://drive.google.com/drive/folders/1Ap_tSLe4a7QyUDsC4-BS6riuVRfE3J4S?usp=drive_link"
            className="border border-border rounded-lg p-6 text-center hover:bg-muted transition"
          >
            🎨 Logo (PNG, SVG)
          </a>
        </div>
      </section>

      {/* OFFICIAL LINKS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Official Links</h2>
        <div className="flex flex-wrap gap-6 text-muted-foreground">
          <a href="https://catunband.ro" className="underline">Website</a>
          <a href="https://open.spotify.com/artist/2yr6XQ0YzYjAibW2L7uD6A" className="underline">Spotify</a>
          <a href="https://www.youtube.com/@catunband" className="underline">YouTube</a>
          <a href="https://www.instagram.com/catunband/" className="underline">Instagram</a>
          <a href="https://www.facebook.com/catunband" className="underline">Facebook</a>
          <a href="https://music.apple.com/us/artist/c%C3%A5tun/1769647522" className="underline">Apple Music</a>
          <a href="https://www.tiktok.com/@catunband" className="underline">TikTok</a>
        </div>
      </section>

      {/* MEDIA CONTACT */}
      <section className="space-y-4 border-t border-border pt-10">
        <h2 className="text-2xl font-semibold">Media Contact</h2>
        <p className="text-muted-foreground">
          Email: <a href="mailto:contact@catunband.ro" className="underline">contact@catunband.ro</a><br />
          Phone: <a href="tel:+40755298699" className="underline">+40755 298 699</a>
        </p>
      </section>

    </section>
  );
}