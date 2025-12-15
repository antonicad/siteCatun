import Hero from '@/app/page-components/hero';
import About from '@/app/page-components/about';
import Music from '@/app/page-components/music';
import Concerts from '@/app/page-components/concerts';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Music />
      <Concerts />
    </>
  );
}
