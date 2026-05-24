export const metadata = {
  title: 'Press Kit | Trupa Cåtun',
  description: 'Press kit oficial Cåtun Band – bio, muzică, poze și contact media.',
};

export default function PressKitPage() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 space-y-20">

      <div className="flex justify-end">
        <a
          href="/press-kit-en"
          className="px-4 py-2 border rounded hover:bg-muted transition"
        >
          EN
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

      {/* BIO SCURT */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Bio scurt</h2>
        <p className="text-muted-foreground leading-relaxed">
          Cåtun este o trupă rock din România, activă din 2024, cu un sound care îmbină hard rock, metal, rock alternativ și influențe pop rock. Trupa interpretează exclusiv material original și a susținut concerte în orașe precum București, Cluj, Iași, Suceava, Brașov, Bistrița și Chișinău.

        </p>
      </section>

      {/* BIO EXTINS */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Bio extins</h2>
        <p className="text-muted-foreground leading-relaxed">
          Cåtun este o trupă rock din România, activă din <b>8 martie 2024</b>, cu un sound construit pe influențe de <b>hard rock</b>, <b>metal</b>, <b>rock alternativ</b> și <b>pop rock</b>. Trupa abordează un stil direct, cu piese orientate atât spre impact live, cât și spre accesibilitate, îmbinând riff-uri puternice cu structuri clare și refrene memorabile.
<br /><br />
Proiectul a luat naștere în urma unei sesiuni de repetiții comune, iar decizia de a continua sub forma unei trupe a fost luată de <b>Ziua Mamei, în 2024</b>, la inițiativa vocalistului D'Jurj și al chitaristului Nyppy. Numele <b>Cåtun</b> provine de la o mică localitate din care toboșarul <b>Matei</b> îl ridica pe bassistul <b>Denis</b> în drumul spre repetițiile din <b>Iași</b>, acest detaliu devenind parte din identitatea formației. Trupa este localizată în Iași, dar membrii provin din diverse orașe și localități. "Sediul" principal al trupei este în Boroaia, un sat din județul Suceava unde aceștia se reunesc frecvent pentru repetiții și creație.
<br /><br />
În perioada 2024–2025, Cåtun a susținut <b>16 concerte</b>, dintre care <b>9 doar în anul 2025</b>, în orașe precum <b>Iași</b>, <b>Suceava</b>, <b>Botoșani</b>, <b>Piatra Neamț</b>, <b>Brașov</b>, <b>Bistrița</b>, dar și în afara României, la <b>Chișinău</b>. Trupa are un <b>repertoriu live de aproximativ o oră</b>, construit pentru evenimente de club, festivaluri și concerte tematice.
<br /><br />
Anumite piese din repertoriu, precum <b>„Lancia”</b> și <b>„Nisipuri”</b>, sunt deja bine cunoscute publicului care frecventează concertele trupei și sunt considerate <i>piese reprezentative</i> pentru show-urile live. Din punct de vedere stilistic, repertoriul include piese energice precum <b>„Zori”</b>, materiale cu un caracter mai accesibil precum <b>„Lancia”</b>, dar și compoziții cu o abordare mai introspectivă, cum este <b>„Poduri”</b>, cea mai recentă lansare a trupei.
<br /><br />
<b>Întreg repertoriul Cåtun este original</b>. Trupa lucrează în prezent la <b>albumul de debut</b>, programat pentru lansare în <b>2026</b>, care va include atât piese deja prezentate live, cât și materiale noi. Activitatea trupei este orientată spre extinderea prezenței pe scena rock, apariții media și participări la evenimente și festivaluri din țară și din străinătate.

        </p>
      </section>

      {/* MEMBRI */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Membrii trupei</h2>
        <ul className="grid sm:grid-cols-2 gap-4 text-muted-foreground">
<li>— D'Jurj (Sebastian) - Voce</li>
<li>— Mircea Rusu - Chitară</li>
<li>— Nyppy (Rareș) - Chitară</li>
<li>— Denis Antonică - Bass</li>
<li>— Matei Bolea - Tobe</li>

        </ul>
      </section>

      {/* LANSARE CURENTĂ */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Ultima lansare</h2>
        <div className="space-y-2 text-muted-foreground">
          <p><strong>Titlu piesă:</strong> Poduri</p>
          <p><strong>Data lansării:</strong> 9 ianuarie 2026</p>
          <p>
            {/* COMPLETEAZĂ */}
            "Poduri" este o piesă sentimentală care explorează teme de reflecție, vinovăție și pierdere. Versurile transmit lupta interioară a celui care își asumă greșelile, încearcă să reconstruiască relații și să depășească durerea trecutului.
          </p>
        </div>

        {/* LINKURI LANSARE */}
        <div className="flex flex-wrap gap-4">
          <a href="https://open.spotify.com/track/37th37UrfYBF1XEJIjFFy6" className="underline">Spotify</a>
          <a href="https://www.youtube.com/watch?v=u2lyqo2vTOA" className="underline">YouTube</a>
          <a href="https://music.apple.com/us/song/poduri/1867195497" className="underline">Apple Music</a>
        </div>
      </section>

<section className="space-y-4">
  <h2 className="text-2xl font-semibold">Concerte & activitate live</h2>
  <ul className="list-disc list-inside text-muted-foreground">
    <li>03/08/2024 Roman - La Casa Veche</li>
    <li>16/08/2024 Iași - La "Container"</li>
    <li>21/09/2024 Iași - Concurs Rock’N’Iași</li>
    <li>04/10/2024 Iași - Rock’N’Iași</li>
    <li>02/11/2024 Suceava - Art Rock Cafe</li>
    <li>15/02/2025 Iași - Rock'N'Rolla</li>
    <li>22/02/2025 Piatra Neamț - Central Plaza Hotel</li>
    <li>08/03/2025 Suceava - Art Rock Cafe</li>
    <li>15/03/2025 Botoșani - Cross Medio Pub</li>
    <li>26/04/2025 Chișinău - LaBrewTory</li>
    <li>15/06/2025 Roman - Terra Peutique</li>
    <li>26/07/2025 Iași - Rock'N'Rolla</li>
    <li>15/08/2025 Roman - Alege Moto Rock</li>
    <li>16/08/2025 Bistrița - WTF Rock Contest</li>
    <li>18/10/2025 Botoșani - Cross Medio Pub</li>
    <li>15/11/2025 Brașov - Tâmplărie Pub</li>
  </ul>
</section>


      {/* MEDIA DOWNLOAD */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Materiale media</h2>
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
            📸 Fotografii de presă
          </a>
          <a
            href="https://drive.google.com/drive/folders/1Ap_tSLe4a7QyUDsC4-BS6riuVRfE3J4S?usp=drive_link"
            className="border border-border rounded-lg p-6 text-center hover:bg-muted transition"
          >
            🎨 Logo (PNG, SVG)
          </a>
        </div>
      </section>

      {/* LINKURI OFICIALE */}
      <section className="space-y-4">
        <h2 className="text-2xl font-semibold">Linkuri oficiale</h2>
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

      {/* CONTACT MEDIA */}
      <section className="space-y-4 border-t border-border pt-10">
        <h2 className="text-2xl font-semibold">Contact media</h2>
        <p className="text-muted-foreground">
          Email: <a href="mailto:contact@catunband.ro" className="underline">
            contact@catunband.ro
          </a>
          <br></br>
          Telefon: <a href="tel:+40755298699" className="underline">
            +40755 298 699
          </a>
        </p>
      </section>

    </section>
  );
}
