'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

export function MerchOrderForm({ item }) {
  const { toast } = useToast();
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);

    formData.append('access_key', '7424b87e-ade2-4c93-8f9f-32bcb0e82fa0');
    formData.append('subject', `Comandă merch - ${item.name}`);
    formData.append('Produs', item.name);

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast({
          title: 'Succes',
          description:
            'Comanda trimisă cu succes. Vei fi contactat în scurt timp în legătură cu aceasta.',
        });

        e.target.reset();
      } else {
        toast({
          title: 'Eroare',
          description: 'A apărut o problemă. Încearcă din nou.',
          variant: 'destructive',
        });
      }
    } catch (err) {
      toast({
        title: 'Eroare',
        description: 'Nu s-a putut trimite comanda.',
        variant: 'destructive',
      });
    }

    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label>Nume</Label>
        <Input name="name" required />
      </div>

      <div>
        <Label>Email</Label>
        <Input name="email" type="email" required />
      </div>

      <div>
        <Label>Telefon</Label>
        <Input name="phone" required />
      </div>

      <div>
        <Label>Adresă</Label>
        <Textarea name="address" required />
      </div>

      <div>
        <Label>Preferințe (mărime, alt merch, etc.)</Label>
        <Textarea name="other_preferences" required />
      </div>

      <Button type="submit" className="w-full" disabled={loading}>
        {loading ? 'Se trimite...' : 'Trimite comanda'}
      </Button>
    </form>
  );
}