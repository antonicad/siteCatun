'use server';

import { z } from 'zod';
import { db } from './firebase';
import { collection, addDoc, query, where, getDocs } from 'firebase/firestore';

// --- CONFIGURATION ---
// IMPORTANT: Replace with your Web3Forms access key
const WEB3FORMS_ACCESS_KEY = 'YOUR_WEB3FORMS_ACCESS_KEY';

// --- SCHEMAS ---
const newsletterSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
});

const contactSchema = newsletterSchema.extend({
  phone: z.string().optional(),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const merchOrderSchema = newsletterSchema.extend({
  address: z.string().min(10, { message: 'Address must be at least 10 characters.' }),
  phone: z.string().min(5, { message: 'Please enter a valid phone number.' }),
  merchItem: z.string(),
  subscribeToNewsletter: z.boolean().optional(),
});

// --- HELPER FUNCTIONS ---
async function sendToWeb3Forms(data: Record<string, unknown>, subject: string) {
  if (WEB3FORMS_ACCESS_KEY === 'YOUR_WEB3FORMS_ACCESS_KEY') {
    console.warn("Web3Forms access key is not set. Please update src/lib/actions.ts.");
    // Simulate a successful submission for development purposes
    return { success: true, message: "Form submitted successfully (simulated)." };
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
    return { success: false, message: 'An error occurred while submitting the form.' };
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
      message: 'Invalid form data.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  const { email, name } = validatedFields.data;

  try {
     if (Object.values(db.app.options).some(value => typeof value === 'string' && value.startsWith("YOUR_"))) {
      console.warn("Firebase not configured, skipping database write.");
      return { success: true, message: `Thank you for subscribing, ${name}! (Simulated)` };
    }
    
    // Check if email already exists
    const subscribersRef = collection(db, 'subscribers');
    const q = query(subscribersRef, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      return { success: false, message: 'This email is already subscribed.' };
    }

    await addDoc(subscribersRef, {
      name,
      email,
      subscribedAt: new Date(),
    });

    return { success: true, message: `Thank you for subscribing, ${name}!` };
  } catch (error) {
    console.error('Firebase Error:', error);
    return { success: false, message: 'An error occurred. Please try again.' };
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
      message: 'Invalid form data.',
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }
  
  const result = await sendToWeb3Forms(validatedFields.data, `New Contact Message from ${validatedFields.data.name}`);

  if (result.success) {
    return { success: true, message: "Thank you for your message! We'll get back to you soon." };
  } else {
    return { success: false, message: result.message || 'An error occurred.' };
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
            message: 'Invalid form data.',
            errors: validatedFields.error.flatten().fieldErrors,
        };
    }

    const { subscribeToNewsletter, ...orderData } = validatedFields.data;

    const web3FormsResult = await sendToWeb3Forms(orderData, `New Merch Order: ${orderData.merchItem}`);

    if (!web3FormsResult.success) {
        return { success: false, message: web3FormsResult.message || 'Could not place order. Please try again.' };
    }

    if (subscribeToNewsletter) {
        const newsletterFormData = new FormData();
        newsletterFormData.append('name', orderData.name);
        newsletterFormData.append('email', orderData.email);
        await handleNewsletterSubscription({}, newsletterFormData);
    }
    
    return { success: true, message: 'Your order has been received! We will contact you shortly to finalize payment and shipping.' };
}
