import { format } from 'date-fns';
import { Button } from '@/components/ui/button';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { concerts } from '@/lib/data';
import Link from 'next/link';

function ConcertRow({ concert }) {
    const statusVariant = concert.status === 'Sold Out' ? 'destructive' : concert.status === 'La vânzare' ? 'default' : 'secondary';
  return (
    <TableRow className="hover:bg-muted/10">
      <TableCell className="font-medium text-primary">
        {format(new Date(concert.date), 'dd MMM, yyyy')}
      </TableCell>
      <TableCell>{concert.venue}</TableCell>
      <TableCell className="hidden md:table-cell">{concert.location}</TableCell>
      <TableCell className="text-center">
        <Badge variant={statusVariant} className="bg-accent text-accent-foreground">{concert.price}</Badge>
      </TableCell>
    </TableRow>
  );
}

export default function Concerts() {
  return (
    <section id="concerts" className="py-16 sm:py-24 bg-background">
      <div className="container px-4">
        <div className="mx-auto max-w-2xl text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold tracking-tight text-primary">
            Concerte Viitoare
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Vino să ne vezi live. Nu vei regreta!
          </p>
        </div>
        <div className="max-w-4xl mx-auto bg-card rounded-lg border border-border/60 shadow-xl overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="border-b-border/60">
                <TableHead>Data</TableHead>
                <TableHead>Descriere</TableHead>
                <TableHead className="hidden md:table-cell">Locație</TableHead>
                <TableHead className="text-center">Suport Artist</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {concerts.map((concert, index) => (
                <ConcertRow key={index} concert={concert} />
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
}
