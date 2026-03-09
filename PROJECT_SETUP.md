# SSAARGG Website - Complete Setup Guide

## Prerequisites
- Node.js (v16 or higher)
- npm or pnpm

## Setup Instructions

### 1. Install Dependencies
Run this command in your terminal:

```bash
npm install motion react-hook-form@7.55.0 sonner lucide-react
```

or with pnpm:

```bash
pnpm install motion react-hook-form@7.55.0 sonner lucide-react
```

### 2. Project Structure
Your project should have this structure:

```
/
├── src/
│   ├── app/
│   │   ├── App.tsx
│   │   └── components/
│   │       ├── Navbar.tsx
│   │       ├── Hero.tsx
│   │       ├── Services.tsx
│   │       ├── Stats.tsx
│   │       ├── Projects.tsx
│   │       ├── Testimonials.tsx
│   │       ├── ContactInfo.tsx
│   │       ├── ContactForm.tsx
│   │       ├── Footer.tsx
│   │       └── figma/
│   │           └── ImageWithFallback.tsx
│   └── styles/
│       └── theme.css
├── package.json
└── README.md
```

### 3. Run the Development Server

```bash
npm run dev
```

or

```bash
pnpm dev
```

### 4. Making Changes

- All component files are in `/src/app/components/`
- Edit any component file in VS Code
- Changes will hot-reload automatically
- Styles are in `/src/styles/theme.css`

### 5. Key Features

- **Animations**: Using Motion (Framer Motion) library
- **Forms**: React Hook Form for validation
- **Notifications**: Sonner for toast messages
- **Icons**: Lucide React icons
- **Styling**: Tailwind CSS v4

### 6. Customization Tips

**Colors**: Search and replace these hex codes:
- Primary Purple: `#9333ea`
- Secondary Purple: `#7e22ce`
- Tertiary Blue: `#4f46e5`

**Contact Info**: Edit `/src/app/components/ContactInfo.tsx`
- Email: Line 10
- Phone: Line 17
- Location: Line 24

**Brand Name**: Search and replace "SSAARGG" across all files

**Images**: All Unsplash URLs can be replaced with your own images

### 7. Build for Production

```bash
npm run build
```

Your production-ready files will be in the `dist` folder.

---

## Troubleshooting

**Issue**: Motion import errors
**Solution**: Make sure you import from `motion/react` not `framer-motion`

**Issue**: Form not submitting
**Solution**: Check react-hook-form version is 7.55.0

**Issue**: Images not loading
**Solution**: Verify ImageWithFallback component exists in components/figma/

---

## Support

For questions or issues, refer to:
- Motion docs: https://motion.dev
- React Hook Form: https://react-hook-form.com
- Tailwind CSS: https://tailwindcss.com
