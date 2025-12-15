import Link from 'next/link';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { songs } from '@/lib/data';
import type { Song } from '@/lib/types';
import { ArrowRight } from 'lucide-react';

function SongItem({ song }: { song: Song }) {
  return (
    <div className="flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        <song.icon className="h-6 w-6 text-accent" />
        <div>
          <h3 className="font-medium text-primary">{song.title}</h3>
          <p className="text-sm text-muted-foreground">{song.platform}</p>
        </div>
      </div>
      <Button variant="ghost" size="icon" asChild>
        <Link href={song.url} target="_blank" rel="noopener noreferrer">
          <ArrowRight className="h-5 w-5" />
          <span className="sr-only">Ascultă</span>
        </Link>
      </Button>
    </div>
  );
}

export default function Music() {
  return (
    <section id="music" className="py-16 sm:py-24 bg-black/20">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">
              Ultimele Lansări
            </h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Scufundă-te în cele mai recente creații sonore ale noastre. Disponibile pe toate platformele majore de streaming.
            </p>
        </div>
        <Card className="max-w-3xl mx-auto bg-card border-border/60 shadow-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-headline tracking-wide">Ascultă Muzica Noastră</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {songs.map((song, index) => (
                <SongItem key={index} song={song} />
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
