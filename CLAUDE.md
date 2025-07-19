# GUAMAC Business Solutions - Company Website (Astro)

## Project Overview

This is the **GUAMAC** main company website built with Astro framework, part of a comprehensive 3-application Firebase + Vercel hybrid architecture. GUAMAC is a comprehensive business solutions provider offering complete digital services including website design, mobile app development, e-commerce solutions, digital marketing, AI services, UI/UX design, cloud services, and SEO optimization.

## Architecture Position

This Astro application serves as **Application 2 of 3** in the GUAMAC ecosystem:
- **Application 1**: Next.js AI Services Platform (`/src/` - main directory)
- **Application 2**: Astro Company Website (`/Positivus/` - this directory) 
- **Application 3**: Team Collaboration Platform (`/firebasee/`)
- **Backend**: Firebase Functions with Gemini AI integration (`/functions/`)

## Tech Stack

### Core Framework
- **Astro 5.0.9** - Modern static site generator with islands architecture
- **TypeScript 5.4.5** - Type-safe JavaScript development
- **Node.js** - Runtime environment

### Styling & UI
- **Tailwind CSS 3.4.3** - Utility-first CSS framework
- **Astro Navbar 2.3.7** - Navigation component
- **Lucide React 0.525.0** - Icon library

### Animations & Interactions
- **Framer Motion 12.23.6** - Animation library for React components
- **Lenis 1.0.45** - Smooth scrolling library
- **Swiper 11.1.3** - Touch slider component

### AI Integration
- **Google Generative AI 0.24.1** - AI services integration

### Development & Deployment
- **Astro Check 0.9.4** - TypeScript and error checking
- **Vercel Adapter 8.0.1** - Deployment to Vercel platform
- **Astro Tailwind Integration 5.1.3** - Seamless Tailwind integration

## Development Commands

```bash
# From main project directory:
cd Positivus

# Development server (runs on port 4322)
npm run dev

# Type checking and build
npm run build

# Preview production build
npm run preview

# Start development server (alias for dev)
npm run start
```

## Integration with Other Applications

### Cross-Application Features
- **Shared Firebase Backend**: Connects to same Firestore database as other apps
- **Unified Branding**: Consistent GUAMAC branding across all platforms
- **Navigation Links**: Links to AI services (`/app`) and team portal (`/forteam`)
- **Environment Variables**: Shared Firebase configuration with main applications

### URL Routing in Production
- **Main Domain**: `guamac.com` → This Astro website
- **AI Services**: `guamac.com/app` → Next.js AI platform
- **Team Portal**: `guamac.com/forteam` → Team collaboration
- **API Backend**: Firebase Functions for all applications

## Project Structure

```
src/
├── components/
│   ├── sections/          # Page sections (Hero, Services, Contact, etc.)
│   ├── ui/               # Reusable UI components (Navbar, Footer)
│   ├── enhanced/         # Advanced interactive components
│   └── ai/               # AI-powered components
├── data/
│   ├── siteData.json     # Site metadata and configuration
│   └── clientData.json   # Client testimonials data
├── assets/               # Images, SVGs, and static assets
├── content/
│   └── blog/            # Blog content (Markdown files)
├── pages/                # Route pages
└── styles/
    └── global.css       # Global styles and Tailwind base
```

## Key Features

### Website Features
- **Responsive Design** - Mobile-first approach with Tailwind CSS
- **Modern UI Components** - Interactive sections with Framer Motion animations
- **Smooth Scrolling** - Enhanced UX with Lenis
- **Touch Sliders** - Testimonials and content carousels with Swiper
- **AI Integration** - Google Generative AI for enhanced functionality
- **SEO Optimized** - Meta tags and structured data
- **TypeScript** - Type-safe development environment

### Business Solutions Showcase
1. **UI/UX Design** - User interface and experience design
2. **Web Development** - Custom website development
3. **Digital Marketing** - Complete digital marketing solutions
4. **Mobile App Development** - iOS and Android applications
5. **Cloud Services** - Cloud infrastructure and services
6. **Search Engine Optimization** - SEO and online visibility

## Company Information

- **Website**: https://guamac.com
- **Logo**: https://guamac.com/wp-content/uploads/2025/03/guamac.png
- **Contact**: contact@guamac.com
- **Phone**: +1 343-453-5550
- **Address**: 201 sherbourne st Toronto on M5A 3×2
- **Hours**: M-F: 8am – 10pm, S-S: Closed

## Development Configuration

### Astro Configuration
- **Output**: Server-side rendering enabled
- **Site URL**: https://positivustheme.vercel.app
- **Adapter**: Vercel for deployment
- **Integrations**: Tailwind CSS

### TypeScript Setup
- Full TypeScript support across all components
- Type checking integrated into build process
- Strict type safety for enhanced development experience

## Content Management

### Site Data (`/src/data/siteData.json`)
- Company information and metadata
- Navigation structure
- Service descriptions
- Contact information

### Client Data (`/src/data/clientData.json`)
- Customer testimonials
- Client feedback and reviews
- Success stories

### Blog Content (`/src/content/blog/`)
- Markdown-based blog posts
- Industry insights and company updates
- Technical articles and tutorials

## Deployment

### Vercel Deployment
- Configured for automatic deployment via Vercel adapter
- Server-side rendering capabilities
- Optimized build process with type checking

### Environment
- **Development**: http://localhost:4322 (auto-switches if port occupied)
- **Production**: Vercel platform deployment
- **Preview**: Local preview of production build

## Performance Optimizations

- **Islands Architecture** - Astro's selective hydration
- **Static Generation** - Pre-built pages for fast loading
- **Optimized Assets** - Automatic image and asset optimization
- **Modern JavaScript** - ES modules and modern syntax support
- **CSS Optimization** - Tailwind CSS purging and optimization

## Recent Updates

### Firebase + Vercel Hybrid Integration (July 2025)
- ✅ **Multi-App Architecture**: Integrated as part of 3-application ecosystem
- ✅ **Vercel Deployment**: Configured for `guamac-main` project deployment
- ✅ **URL Routing**: Set up subdirectory routing to other applications
- ✅ **Shared Backend**: Connected to Firebase Functions and Firestore
- ✅ **Cross-Platform Navigation**: Links to AI services and team portal
- ✅ **Environment Configuration**: Shared Firebase config with other apps

### GUAMAC Branding Integration (2025)
- ✅ Updated to official GUAMAC branding and logo across all pages
- ✅ Replaced all "Positivus" references with "GUAMAC"
- ✅ Updated hero messaging: "Elevating Digital Excellence Together"
- ✅ Integrated real GUAMAC contact information and business details
- ✅ Updated testimonials with GUAMAC client feedback
- ✅ Modern 2025 copyright and branding consistency
- ✅ Responsive design optimized for all devices

## Development Notes

### Technical Specifications
- **Node.js**: Version 18+ required
- **Package Manager**: npm (compatible with yarn)
- **Build System**: Astro with Vite under the hood
- **Hot Reloading**: Automatic browser refresh during development
- **Component Islands**: Selective JavaScript hydration for performance
- **Type Safety**: Full TypeScript integration with error checking
- **Modern Tooling**: Latest versions of all dependencies for security and performance
- **Responsive Design**: Mobile-first approach with Tailwind utilities

### Development Workflow
1. **Start from main directory**: `cd Positivus`
2. **Install dependencies**: `npm install` (if not done)
3. **Start development**: `npm run dev`
4. **Access website**: http://localhost:4322
5. **Build for production**: `npm run build`
6. **Preview production**: `npm run preview`

### Integration Testing
- **Cross-app navigation**: Test links to `/app` and `/forteam`
- **Responsive design**: Test on mobile, tablet, and desktop
- **Performance**: Lighthouse scores and Core Web Vitals
- **SEO**: Meta tags and structured data validation

### Deployment Checklist
- [ ] All GUAMAC branding updated
- [ ] Contact information accurate
- [ ] Links to other applications working
- [ ] Responsive design tested
- [ ] Build process successful
- [ ] Vercel deployment configured