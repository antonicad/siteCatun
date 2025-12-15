'use client';

import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';
import { MerchOrderForm } from './merch-order-form';

export default function MerchItem({ item }) {
  return (
    <Card className="bg-card border-border/60 shadow-xl flex flex-col overflow-hidden group">
      <div className="overflow-hidden">
        <Image
          src={item.image.imageUrl}
          alt={item.image.description}
          data-ai-hint={item.image.imageHint}
          width={600}
          height={600}
          className="w-full h-auto object-cover aspect-square transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <CardHeader>
        <CardTitle className="text-xl font-headline tracking-wide">{item.name}</CardTitle>
      </CardHeader>
      <CardContent className="flex-grow">
        <p className="text-2xl font-bold text-accent">{item.price}</p>
      </CardContent>
      <CardFooter>
        <Dialog>
          <DialogTrigger asChild>
            <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Comandă acum</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px] bg-background">
            <DialogHeader>
              <DialogTitle className="font-headline text-2xl">Comandă: {item.name}</DialogTitle>
              <DialogDescription>
                Completați formularul de mai jos. Vă vom contacta pentru detalii de plată și livrare.
              </DialogDescription>
            </DialogHeader>
            <MerchOrderForm item={item} />
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}
