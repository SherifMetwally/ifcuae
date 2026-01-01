# IFC - Innovative Founders Consultancy

A modern, professional Next.js website with Tailwind CSS for IFC (Innovative Founders Consultancy).

## Features

- **Next.js 16** with App Router
- **TypeScript** for type safety
- **Tailwind CSS v4** for styling
- **Responsive Design** - Mobile-first approach
- **Smooth Scrolling** navigation
- **Back to Top** button
- **Mobile Menu** with hamburger navigation
- **Professional UI** with brand colors

## Sections

1. **Hero Section** - Main landing area with tagline
2. **Features** - Three main service cards
3. **Vision** - Company vision statement
4. **Brands** - Fitbird and Medwings showcase
5. **About** - Company information
6. **Services** - Detailed service descriptions
7. **Contact** - Contact information and booking
8. **Footer** - Links and social media

## Getting Started

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build

```bash
npm run build
npm start
```

## Project Structure

```
nextjs-app/
├── app/
│   ├── layout.tsx      # Root layout with metadata
│   ├── page.tsx         # Homepage with all sections
│   └── globals.css      # Global styles and Tailwind config
├── components/
│   ├── Navbar.tsx       # Navigation bar
│   ├── Hero.tsx         # Hero section
│   ├── FeatureCard.tsx  # Feature card component
│   ├── ServiceCard.tsx  # Service card component
│   ├── BrandCard.tsx    # Brand card component
│   ├── ContactSection.tsx # Contact section
│   ├── Footer.tsx       # Footer component
│   └── BackToTop.tsx    # Back to top button
└── public/
    └── img/             # All images from original site
```

## Brand Colors

- Primary: `#114C5F`
- Primary Dark: `#064a61`
- Light: `#EDF5FF`
- Dark: `#202942`

## Technologies Used

- Next.js 16.1.1
- React 19.2.3
- TypeScript 5
- Tailwind CSS 4
- Font Awesome 6.4.0 (for icons)
- Heebo Font (Google Fonts)

## Content

All content and images have been preserved from the original `public_html` folder. No new content has been added - only redesigned with modern, professional styling.
