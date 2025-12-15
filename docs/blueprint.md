# **App Name**: CÅTUN Official

## Core Features:

- Homepage with Band Info: Displays a cover image, band description, latest songs, future concerts, and a link to a Revolut payment page for buying the band a coffee.
- Navigation Bar: A simple navigation bar that always persists when navigating through the pages.
- Band Description Page: A page containing the band's full bio and history.
- Contact Page: A contact form using Web3Forms API, including fields for name, email, message, phone number. When the message is sent the contents will be posted using Web3Forms
- Merch Page: Displays available merchandise with a button to trigger a popup form for order submission (name, address, phone number) and a checkbox for newsletter subscription. The data will be sent using Web3Form.
- Newsletter Subscription: Form on a dedicated Newsletter page to save names and emails to Firestore.
- Newsletter Data Storage: The backend uses Firestore to store and manage names and emails of users who subscribe to the newsletter. Store users subscribing from the merch page.

## Style Guidelines:

- Primary color: Off-white (#F0F0F0) for a clean, high-contrast look.
- Background color: Dark charcoal (#1A1A1A) to provide a contrasting backdrop that emphasizes the band's intensity.
- Accent color: Dark violet (#4B0082) to highlight key elements such as button states and interactive components, in a way that evokes a hard rock and/or metal aesthetic.
- Body and headline font: 'Space Grotesk', sans-serif, to keep it techy and bold, matching the metal vibe of the band
- Use high-contrast, minimalist icons. Icons for social media links and other interactive elements should be clear and easily recognizable.
- Maintain a straightforward layout with clear sections for content. Ensure the site is fully responsive across all devices.
- Implement subtle transitions and animations for interactive elements, such as button hovers and form submissions. The transitions should be snappy to reflect the band's energy.