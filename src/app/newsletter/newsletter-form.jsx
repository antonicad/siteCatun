'use client';

import { useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/lib/supabaseClient.js';

function SubmitButton({ pending }) {
  return (
    <Button type="submit" disabled={pending} className="w-full sm:w-auto">
      {pending ? 'Abonare...' : 'Abonează-te'}
    </Button>
  );
}

export function NewsletterForm() {
  const { toast } = useToast();
  const formRef = useRef(null);
  const [pending, setPending] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    setPending(true);

    const formData = new FormData(formRef.current);
    const name = formData.get('name');
    const email = formData.get('email');

    const { error } = await supabase.from('newsletter').insert([
      {
        name,
        email,
      },
    ]);

    if (error) {
      toast({
        title: 'Eroare',
        description:
          error.code === '23505'
            ? 'Acest email este deja abonat.'
            : 'Nu s-a putut realiza abonarea.',
        variant: 'destructive',
      });
    } else {
      toast({
        title: 'Succes!',
        description: 'Te-ai abonat cu succes la newsletter.',
      });
      formRef.current.reset();
    }

    setPending(false);
  }

  return (
    <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="name">Nume</Label>
          <Input id="name" name="name" required />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required />
        </div>
      </div>

      <div className="flex justify-center">
        <SubmitButton pending={pending} />
      </div>
    </form>
  );
}
