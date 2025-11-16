# JDM Collective - Premium Landing Page

A production-grade Next.js landing page for a JDM (Japanese Domestic Market) car import marketplace, built with TypeScript, React Server Components, Shadcn UI, and Tailwind CSS.

## 🚀 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **UI Components**: Shadcn UI + Radix UI primitives
- **Styling**: Tailwind CSS (mobile-first)
- **Animations**: Framer Motion
- **State Management**: nuqs (for URL params)
- **Icons**: Lucide React

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with header/footer
│   ├── page.tsx            # Landing page (composes sections)
│   └── globals.css         # Global styles + Tailwind
├── components/
│   ├── layout/
│   │   ├── site-header.tsx  # Sticky navigation
│   │   └── site-footer.tsx # Footer with links
│   ├── sections/
│   │   ├── hero-section.tsx
│   │   ├── trust-section.tsx
│   │   ├── features-section.tsx
│   │   ├── how-it-works-section.tsx
│   │   ├── calculator-section.tsx
│   │   └── featured-inventory-section.tsx
│   └── ui/                 # Shadcn UI primitives
│       ├── button.tsx
│       ├── card.tsx
│       ├── badge.tsx
│       ├── input.tsx
│       ├── select.tsx
│       └── separator.tsx
├── lib/
│   ├── types.ts            # Domain types (Vehicle, Seller, etc.)
│   ├── utils.ts            # Utility functions (cn, formatCurrency, etc.)
│   └── mock-data.ts        # Mock data for development
└── package.json
```

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Type check
npm run type-check
```

Open [http://localhost:3000](http://localhost:3000) to view the landing page.

## 🎨 Design System

### Color Palette

- **Primary**: `#1f2937` (Dark Navy)
- **Accent**: `#dc2626` (Vibrant Red)
- **Background**: Dark theme with gradients (`gray-900` → `gray-950` → `black`)

### Typography

- **Headlines**: `font-black`, `text-4xl` to `text-7xl`
- **Body**: `text-base` to `text-xl`, `text-gray-400` for secondary
- **Font**: Inter (via Next.js)

### Component Patterns

- **Server Components First**: Only use `"use client"` when needed (interactivity, hooks, browser APIs)
- **Composition**: Small, focused components that compose together
- **Type Safety**: All props are typed with TypeScript interfaces
- **Accessibility**: Radix UI primitives provide ARIA support out of the box

## 📦 Key Features

### Landing Page Sections

1. **Hero Section**: Full-screen hero with search bar and CTAs
2. **Trust Section**: Social proof with animated stat cards
3. **Features Section**: 6-column feature grid with icons
4. **How It Works**: 5-step timeline with alternating layout
5. **Calculator**: Interactive cost breakdown calculator
6. **Featured Inventory**: Auto-advancing vehicle carousel

### Components

- **Responsive**: Mobile-first design, works on all screen sizes
- **Animated**: Framer Motion for scroll-triggered animations
- **Accessible**: Semantic HTML, ARIA labels, keyboard navigation
- **Performant**: Next.js Image optimization, lazy loading

## 🔧 Development Guidelines

### Code Style

- Use **functional components** with TypeScript
- Prefer **named exports** over default exports
- Use **descriptive variable names**: `isLoading`, `hasError`, `canSubmit`
- Keep components **small and focused** (< 200 lines when possible)

### TypeScript

- Always define **interfaces** for component props
- Use **union types** instead of enums
- Avoid `any`; use `unknown` if type is truly unknown

### React Patterns

- **Server Components by default** (no `"use client"` unless needed)
- Use `Suspense` boundaries for async data
- Prefer composition over prop drilling

## 🚧 Next Steps

To complete the full landing page, add:

- [ ] Live Auctions Section
- [ ] Agent Profiles Section
- [ ] Community Stories Section
- [ ] Sellers Section
- [ ] FAQ Accordion
- [ ] Newsletter CTA
- [ ] Final CTA Section

## 📝 Notes

- All images use Next.js `Image` component for optimization
- Mock data is in `lib/mock-data.ts` for development
- Replace with real API calls when backend is ready
- Calculator uses mock pricing logic; connect to real pricing service

## 🎯 Performance Targets

- **LCP**: < 2.5s
- **FID**: < 100ms
- **CLS**: < 0.1
- **Lighthouse Score**: 90+

## 📄 License

Private - JDM Collective

