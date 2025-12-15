'use client';

import { useActionState } from 'react';
import { useFormStatus } from 'react-dom';
import { useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import { useToast } from '@/hooks/use-toast';
import { handleMerchOrder } from '@/lib/actions';
import type { MerchItem } from '@/lib/types';

const initialState = {
  success: false,
  message: '',
  errors: null,
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Se plasează comanda...' : 'Trimite comanda'}
    </Button>
  );
}

export function MerchOrderForm({ item }: { item: MerchItem }) {
  const [state, formAction] = useActionState(handleMerchOrder, initialState);
  const { toast } = useToast();
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (state.success) {
      toast({
        title: 'Comanda primită!',
        description: state.message,
      });
      formRef.current?.reset();
    } else if (state.message) {
      toast({
        title: 'Eroare',
        description: state.message,
        variant: 'destructive',
      });
    }
  }, [state, toast]);

  return (
    <form ref={formRef} action={formAction} className="space-y-4">
      <input type="hidden" name="merchItem" value={item.name} />
      <div className="space-y-2">
        <Label htmlFor="name">Nume complet</Label>
        <Input id="name" name="name" required />
        {state.errors?.name && <p className="text-sm text-destructive">{state.errors.name[0]}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="email">Adresă de email</Label>
        <Input id="email" name="email" type="email" required />
        {state.errors?.email && <p className="text-sm text-destructive">{state.errors.email[0]}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="phone">Număr de telefon</Label>
        <Input id="phone" name="phone" type="tel" required />
        {state.errors?.phone && <p className="text-sm text-destructive">{state.errors.phone[0]}</p>}
      </div>
      <div className="space-y-2">
        <Label htmlFor="address">Adresa de livrare</Label>
        <Textarea id="address" name="address" required />
        {state.errors?.address && <p className="text-sm text-destructive">{state.errors.address[0]}</p>}
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="subscribeToNewsletter" name="subscribeToNewsletter" />
        <Label htmlFor="subscribeToNewsletter" className="text-sm font-normal">
          Adaugă-mă la newsletter
        </Label>
      </div>
      <SubmitButton />
    </form>
  );
}
