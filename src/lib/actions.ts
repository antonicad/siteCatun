'use server';

import { z } from 'zod';
import { db } from './firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

// --- CONFIGURATION ---
// IMPORTANT: Replace with your Web3Forms access key
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';

// --- SCHEMAS ---
const newsletterSchema = z.object({
  name: z.string().min(2, { message: 'Numele trebuie să aibă cel puțin 2 caractere.' }),
  email: z.string().email({ message: 'Vă rugăm să introduceți o adresă de email validă.' }),
});

const contactSchema = newsletterSchema.extend({
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Mesajul trebuie să aibă cel puțin 10 caractere.' }),
});

const merchOrderSchema = newsletterSchema.extend({
  address: z.string().min(10, { message: 'Adresa trebuie să aibă cel puțin 10 caractere.' }),
  phone: z.string().min(5, { message: 'Vă rugăm să introduceți un număr de telefon valid.' }),
  merchItem: z.string(),
  subscribeToNewsletter: z.boolean().optional(),
});

// --- HELPER FUNCTIONS ---
async function sendToWeb3Forms(data: Record<string, unknown>, subject: string) {
  if (WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
    console.warn("Web3Forms access key is not set. Please update src/lib/actions.ts.");
    // Simulate a successful submission for development purposes
    return { success: true, message: "Formular trimis cu succes (simulat)." };
  }

  const formData = new FormData();
  Object.entries(data).forEach(([key, value]) => {
    formData.append(key, value as string);
  });
  formData.append('access_key', WEB3FORMS_ACCESS_KEY);
  formData.append('subject', subject);
  formData.append('from_name', 'CÅTUN Official Website');

  try {
    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      body: formData,
    });
    const result = await response.json();
    return result;
  } catch (error) {
    console.error('Error submitting to Web3Forms:', error);
    return { success: false, message: 'A apărut o eroare la trimiterea formularului.' };
  }
}

// --- SERVER ACTIONS ---

/**
 * Handles newsletter subscription.
 * @param prevState - The previous state of the form.
 * @param formData - The form data.
 */
export async function handleNewsletterSubscription(
  prevState: any,
  formData: FormData
) {
  const validatedFields = newsletterSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Date invalide în formular.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, name } = validatedFields.data;

  try {
     if (Object.values(db.app.options).some(value => typeof value === 'string' && value.startsWith("YOUR_"))) {
      console.warn("Firebase not configured, skipping database write.");
      return { success: true, message: `Vă mulțumim pentru abonare, ${name}! (Simulat)` };
    }
    
    // Check if email already exists
    const subscribersRef = collection(db, 'subscribers');
    const q = query(subscribersRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return { success: false, message: 'Acest email este deja abonat.' };
    }

    await addDoc(subscribersRef, {
      name,
      email,
      subscribedAt: new Date(),
    });

    return { success: true, message: `Vă mulțumim pentru abonare, ${name}!` };
  } catch (error) {
    console.error('Firebase Error:', error);
    return { success: false, message: 'A apărut o eroare. Vă rugăm să încercați din nou.' };
  }
}

/**
 * Handles contact form submission.
 * @param prevState - The previous state of the form.
 * @param formData - The form data.
 */
export async function handleContactForm(prevState: any, formData: FormData) {
  const validatedFields = contactSchema.safeParse({
    name: formData.get('name'),
    email: formData.get('email'),
    phone: formData.get('phone'),
    message: formData.get('message'),
  });

  if (!validatedFields.success) {
    return {
      success: false,
      message: 'Date invalide în formular.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  const result = await sendToWeb3Forms(validatedFields.data, `Mesaj nou de contact de la ${validatedFields.data.name}`);

  if (result.success) {
    return { success: true, message: "Vă mulțumim pentru mesaj! Vă vom contacta în curând." };
  } else {
    return { success: false, message: result.message || 'A apărut o eroare.' };
  }
}

/**
 * Handles merchandise order form submission.
 * @param prevState - The previous state of the form.
 * @param formData - The form data.
 */
export async function handleMerchOrder(prevState: any, formData: FormData) {
    const validatedFields = merchOrderSchema.safeParse({
        name: formData.get('name'),
        email: formData.get('email'),
        address: formData.get('address'),
        phone: formData.get('phone'),
        merchItem: formData.get('merchItem'),
        subscribeToNewsletter: formData.get('subscribeToNewsletter') === 'on',
    });

    if (!validatedFields.success) {
        return {
            success: false,
            message: 'Date invalide în formular.',
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { subscribeToNewsletter, ...orderData } = validatedFields.data;

    const web3FormsResult = await sendToWeb3Forms(orderData, `Comandă nouă de merchandise: ${orderData.merchItem}`);

    if (!web3FormsResult.success) {
        return { success: false, message: web3FormsResult.message || 'Nu s-a putut plasa comanda. Vă rugăm să încercați din nou.' };
    }

    if (subscribeToNewsletter) {
        const newsletterFormData = new FormData();
        newsletterFormData.append('name', orderData.name);
        newsletterFormData.append('email', orderData.email);
        await handleNewsletterSubscription({}, newsletterFormData);
    }
    
    return { success: true, message: 'Comanda dvs. a fost primită! Vă vom contacta în scurt timp pentru a finaliza plata și expedierea.' };
}
