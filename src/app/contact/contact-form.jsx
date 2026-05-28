'use client';

import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';

const WEB3FORMS_KEY = '7424b87e-ade2-4c93-8f9f-32bcb0e82fa0';

function SubmitButton({ pending }) {
  return (
    <Button type="submit" disabled={pending} className="w-full">
      {pending ? 'Se trimite...' : 'Trimite Mesaj'}
    </Button>
  );
}

export function ContactForm() {
  const { toast } = useToast();
  const formRef = useRef(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setPending(true);

    const formData = new FormData(formRef.current);
    formData.append('access_key', WEB3FORMS_KEY);
    formData.append('subject', 'Mesaj nou din formularul de contact');
    formData.append('from_name', 'Mesaj Site Catun');
    formData.append('replyto', formData.get('email'));

    try {
      const res = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (data.success) {
        toast({
          title: 'Mesaj trimis!',
          description: 'Îți mulțumim! Te vom contacta în curând.',
        });
        formRef.current.reset();
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      toast({
        title: 'Eroare',
        description: 'Mesajul nu a putut fi trimis.',
        variant: 'destructive',
      });
    } finally {
      setPending(false);
    }
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <div className="space-y-2">
          <Label htmlFor="name">Nume complet</Label>
          <Input id="name" name="name" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Adresă de email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="phone">Număr de telefon (Opțional)</Label>
        <Input id="phone" name="phone" type="tel" />
      </div>

      <div className="space-y-2">
        <Label htmlFor="message">Mesaj</Label>
        <Textarea id="message" name="message" rows={5} required />
      </div>

      <SubmitButton pending={pending} />
    </form>
  );
}