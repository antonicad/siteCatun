'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog';

import { MerchOrderForm } from './merch-order-form';

export default function MerchItem({ item }) {
  const [open, setOpen] = useState(false);

  return (
    <Card className="flex flex-col overflow-hidden group">
      {/* IMAGE */}
      <div className="overflow-hidden">
        <Image
          src={item.image.imageUrl}
          alt={item.name}
          width={600}
          height={600}
          className="w-full aspect-[3/4] object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      {/* TITLE */}
      <CardHeader>
        <CardTitle className="text-lg font-headline tracking-wide">
          {item.name}
        </CardTitle>
      </CardHeader>

      {/* PRICE */}
      <CardContent>
        <p className="text-xl font-bold">{item.price}</p>
      </CardContent>

      {/* BUTTON */}
      <CardFooter>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button className="w-full">
              Comandă acum
            </Button>
          </DialogTrigger>

          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>
                Comandă: {item.name}
              </DialogTitle>
            </DialogHeader>

            <MerchOrderForm item={item} setOpen={setOpen} />
          </DialogContent>
        </Dialog>
      </CardFooter>
    </Card>
  );
}