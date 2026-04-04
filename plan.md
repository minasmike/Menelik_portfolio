# Portfolio Update Plan - Minas Studio

Update the portfolio with new branding, text content, enhanced glassmorphism, and contact form improvements.

## 1. Branding & Text Content Updates
- **Global Branding**: Update site title and branding references to **Minas Studio**.
- **Hero Section**:
    - Update primary `<h1>` to "Menelik Michael Meshesha".
    - Update tagline to "Bridging the Gap Between Engineering Logic and Creative Vision".
- **About Section**:
    - Update intro paragraph to: "I am a freelance Graphic Designer and Web Developer with a background in Electrical Engineering. I specialize in building high-performance web applications and industrial visual identities. My portfolio includes strategic work for Pathfinder International Ethiopia and the Amare Tiruneh Business Group (ATBG)."
- **Services Section**:
    - Ensure all service descriptions have at least two sentences.
    - Update **Web Development** to: "Web Development: Creating scalable, SEO-optimized applications using Next.js and Tailwind CSS for a seamless user experience. Ensuring robust performance and maintainability across platforms."

## 2. Style Enhancements
- **Glassmorphism**:
    - Update `GlassCard` and other glassmorphic elements.
    - Apply `backdrop-filter: blur(40px);`.
    - Apply `border: 0.5px solid rgba(255, 255, 255, 0.7);`.

## 3. Component Functionality
- **Contact Form**:
    - Add a "Project Type" select field with options: "Web Dev", "Branding", "Consulting".

## 4. File Changes
- `src/lib/i18n.ts`: Update translation strings for brand, about, and tagline.
- `src/lib/data.ts`: Update service descriptions.
- `src/components/sections/Hero.tsx`: Update `<h1>` and layout if necessary to match the name request.
- `src/components/ui/GlassCard.tsx`: Update CSS/Tailwind classes for blur and border.
- `src/components/sections/Contact.tsx`: Add the new form field.
- `src/components/layout/Navbar.tsx`: Verify brand name.
- `src/components/layout/Footer.tsx`: Verify brand name.
