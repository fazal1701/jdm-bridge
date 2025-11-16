# JDM Collective - Complete Development Framework
## Production-Ready Architecture & Development Guide

---

## 🎯 What You're Building

**JDM Collective** is a full-stack marketplace platform for importing Japanese Domestic Market (JDM) vehicles. Think of it as the "Stripe of JDM imports" - making international car buying as simple and trustworthy as local buying.

### Core Value Propositions

1. **Transparency**: Real-time cost calculators, no hidden fees
2. **Trust**: Verified sellers, bilingual agents, milestone escrow
3. **Efficiency**: Shipping pools, automated logistics, real-time tracking
4. **Community**: Forums, success stories, Q&A, maintenance guides

---

## 🏗️ Architecture Overview

### Tech Stack

```
Frontend:
├── Next.js 14 (App Router) - Server Components First
├── TypeScript (Strict Mode)
├── Tailwind CSS (Mobile-First)
├── Shadcn UI + Radix UI (Accessible Components)
├── Framer Motion (Animations)
├── nuqs (URL State Management)
└── React Hook Form + Zod (Forms & Validation)

Backend (Future):
├── Next.js API Routes / Server Actions
├── Prisma ORM
├── PostgreSQL Database
├── Stripe (Payments)
├── AWS S3 (Image Storage)
└── Redis (Caching)
```

### Project Structure

```
jdm-collective/
├── app/                          # Next.js App Router
│   ├── (marketing)/              # Public marketing pages
│   │   ├── page.tsx              # Landing page
│   │   ├── about/
│   │   └── blog/
│   ├── (buyer)/                  # Buyer-facing routes
│   │   ├── browse/
│   │   │   ├── page.tsx          # Vehicle search & grid
│   │   │   └── components/       # Browse-specific components
│   │   ├── vehicles/
│   │   │   └── [id]/
│   │   │       └── page.tsx      # Vehicle detail page
│   │   ├── auctions/
│   │   │   ├── page.tsx          # Live auctions feed
│   │   │   └── [id]/
│   │   │       └── page.tsx      # Auction detail
│   │   ├── community/
│   │   │   ├── page.tsx          # Community hub (6 tabs)
│   │   │   ├── stories/
│   │   │   ├── qa/
│   │   │   ├── maintenance/
│   │   │   └── discussions/
│   │   └── account/
│   │       ├── dashboard/        # Buyer dashboard
│   │       ├── orders/           # Order tracking
│   │       └── wishlist/        # Saved vehicles
│   ├── (seller)/                 # Seller-facing routes
│   │   ├── onboarding/          # Seller signup flow
│   │   ├── dashboard/            # Seller dashboard
│   │   │   ├── page.tsx          # Analytics overview
│   │   │   ├── inventory/        # Vehicle management
│   │   │   ├── orders/           # Order management
│   │   │   └── analytics/       # Sales analytics
│   │   └── settings/            # Account settings
│   ├── (shared)/                 # Shared routes
│   │   ├── auth/
│   │   │   ├── sign-in/
│   │   │   └── sign-up/
│   │   └── agents/               # Agent profiles
│   ├── api/                      # API routes
│   │   ├── vehicles/
│   │   ├── auctions/
│   │   ├── orders/
│   │   └── webhooks/
│   ├── layout.tsx                # Root layout
│   └── globals.css               # Global styles
│
├── components/
│   ├── ui/                       # Shadcn UI primitives
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── dialog.tsx
│   │   ├── sheet.tsx
│   │   ├── tabs.tsx
│   │   ├── table.tsx
│   │   ├── skeleton.tsx
│   │   └── ...
│   ├── layout/                   # Layout components
│   │   ├── site-header.tsx
│   │   ├── site-footer.tsx
│   │   └── sidebar.tsx
│   ├── shared/                   # Reusable domain components
│   │   ├── vehicle-card.tsx
│   │   ├── vehicle-grid.tsx
│   │   ├── auction-card.tsx
│   │   ├── auction-list.tsx
│   │   ├── seller-card.tsx
│   │   ├── agent-card.tsx
│   │   ├── cost-calculator.tsx
│   │   ├── shipping-pool-card.tsx
│   │   ├── tracking-timeline.tsx
│   │   ├── testimonial-card.tsx
│   │   └── community-story-card.tsx
│   └── sections/                 # Landing page sections
│       ├── hero-section.tsx
│       ├── trust-section.tsx
│       └── ...
│
├── lib/
│   ├── types.ts                  # All TypeScript types
│   ├── utils.ts                  # Utility functions (cn, etc.)
│   ├── formatting.ts             # Currency, date, number formatting
│   ├── calculator.ts             # Cost calculation logic
│   ├── filters.ts                # Vehicle filtering/sorting
│   ├── validation.ts             # Zod schemas
│   ├── constants.ts              # App constants (makes, models, etc.)
│   └── mock-data*.ts             # Mock data (split by feature)
│       ├── mock-data.ts          # Vehicles, sellers
│       ├── mock-data-auctions.ts
│       ├── mock-data-pools.ts
│       ├── mock-data-agents.ts
│       ├── mock-data-community.ts
│       └── mock-data-sellers.ts
│
├── hooks/                        # Custom React hooks
│   ├── use-filters.ts            # Filter state with nuqs
│   ├── use-wishlist.ts           # Wishlist management
│   ├── use-auction-timer.ts      # Auction countdown
│   ├── use-cost-calculator.ts    # Cost calculation
│   └── use-shipping-pools.ts     # Pool management
│
└── public/                       # Static assets
    ├── images/
    └── videos/
```

---

## 📋 Feature Roadmap

### Phase 1: Landing & Discovery (Current)
- ✅ Landing page with all sections
- ✅ Hero, Trust, Features, How It Works
- ✅ Cost Calculator
- ✅ Featured Inventory
- ✅ FAQ Section

### Phase 2: Browse & Search
- [ ] Browse page with filters (make, model, year, price, condition)
- [ ] Advanced search with nuqs URL state
- [ ] Vehicle detail page (images, specs, seller, calculator)
- [ ] Wishlist functionality
- [ ] Compare vehicles

### Phase 3: Auctions
- [ ] Live auctions feed
- [ ] Auction detail page
- [ ] Real-time bidding
- [ ] Proxy bidding
- [ ] Auction watchlist

### Phase 4: Community Hub
- [ ] Stories tab (success stories)
- [ ] Q&A tab (questions & answers)
- [ ] Maintenance guides
- [ ] Discussion forums
- [ ] Regional groups
- [ ] Expert profiles

### Phase 5: Seller Tools
- [ ] Seller onboarding flow
- [ ] Inventory management
- [ ] Order management
- [ ] Analytics dashboard
- [ ] Payout management

### Phase 6: Buyer Dashboard
- [ ] Order tracking
- [ ] Shipping pool management
- [ ] Milestone tracking
- [ ] Document management
- [ ] Communication hub

### Phase 7: Agents & Support
- [ ] Agent profiles
- [ ] Live chat integration
- [ ] Video call scheduling
- [ ] Agent ratings

---

## 🎨 Design System

### Color Palette

```typescript
// Primary Colors
primary: "#1f2937"      // Dark Navy
accent: "#dc2626"       // Vibrant Red

// Status Colors
success: "#059669"      // Green
warning: "#f59e0b"      // Yellow
error: "#dc2626"       // Red

// Neutral Colors
gray-50: "#f9fafb"
gray-100: "#f3f4f6"
gray-200: "#e5e7eb"
gray-300: "#d1d5db"
gray-400: "#9ca3af"
gray-500: "#6b7280"
gray-600: "#4b5563"
gray-700: "#374151"
gray-800: "#1f2937"
gray-900: "#111827"
```

### Typography Scale

```typescript
// Headlines
h1: "text-5xl sm:text-6xl lg:text-7xl font-black"
h2: "text-4xl sm:text-5xl font-black"
h3: "text-2xl sm:text-3xl font-bold"
h4: "text-xl font-bold"

// Body
body-lg: "text-lg"
body: "text-base"
body-sm: "text-sm"
body-xs: "text-xs"

// Font Family
font-sans: Inter (default)
```

### Spacing System

```typescript
// Container
container: "max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"

// Section Padding
section: "py-24"
section-sm: "py-12"
section-lg: "py-32"

// Gaps
gap-sm: "gap-4"
gap-md: "gap-6"
gap-lg: "gap-8"
```

### Component Patterns

```typescript
// Card Pattern
<Card className="rounded-lg border border-gray-800 bg-gray-900 p-6 hover:border-red-600/50 transition">
  {content}
</Card>

// Button Variants
<Button>Primary</Button>
<Button variant="outline">Secondary</Button>
<Button variant="ghost">Tertiary</Button>

// Badge Variants
<Badge>Default</Badge>
<Badge variant="success">Verified</Badge>
<Badge variant="warning">Pending</Badge>
```

---

## 🔧 Development Guidelines

### TypeScript Rules

1. **Always use interfaces** for props and domain models
2. **Never use `any`** - use `unknown` if type is truly unknown
3. **Use discriminated unions** for state management
4. **Explicit return types** for complex functions

```typescript
// ✅ Good
interface VehicleCardProps {
  vehicle: VehicleSummary;
  onSelect?: (id: string) => void;
}

// ❌ Bad
function VehicleCard(props: any) { ... }
```

### Component Structure

```typescript
"use client"; // Only if needed

import { type ReactNode } from "react";
import { Button } from "@/components/ui/button";

// 1. Props interface
interface ComponentProps {
  // ...
}

// 2. Component
export function Component({ ...props }: ComponentProps) {
  // 3. Hooks
  // 4. Handlers
  // 5. Render
  return <div>...</div>;
}
```

### File Naming

- **Components**: `PascalCase.tsx` (e.g., `VehicleCard.tsx`)
- **Hooks**: `use-kebab-case.ts` (e.g., `use-filters.ts`)
- **Utils**: `kebab-case.ts` (e.g., `format-currency.ts`)
- **Types**: `types.ts` (all types in one file)
- **Constants**: `constants.ts`

### State Management

```typescript
// URL State (Filters, Search, Pagination)
import { useQueryState } from "nuqs";
const [make, setMake] = useQueryState("make");

// Local State (UI, Forms)
const [isOpen, setIsOpen] = useState(false);

// Server State (Data Fetching)
// Use Server Components or React Query in future
```

---

## 📊 Data Models

### Core Entities

```typescript
// Vehicle
Vehicle {
  id, year, make, model, trim, mileage, condition,
  transmission, color, jpPrice, estimatedLandedCost,
  images[], seller, eligibleCountries[], featured,
  createdAt, updatedAt
}

// Auction
Auction {
  id, vehicle, currentBid, reservePrice, timeRemaining,
  bidCount, status, eligibleCountries[], endsAt,
  inspectionReportAvailable
}

// Shipping Pool
ShippingPool {
  id, name, departurePort, arrivalPort,
  departureDate, arrivalDate, capacity, filled,
  status, costPerVehicle, savingsVsSingle
}

// Order
Order {
  id, vehicle, buyerId, sellerId, agentId,
  status, milestones[], shippingPool,
  costBreakdown, createdAt, updatedAt
}

// Agent
AgentProfile {
  id, name, rating, dealCount, responseTime,
  languages[], specialties[], status,
  queueLength, avatar, bio
}

// Community
CommunityStory {
  id, author, vehicle, quote, image,
  views, likes, comments, importedCost
}
```

---

## 🚀 Getting Started Commands

### Development

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Type check
npm run type-check

# Lint
npm run lint

# Build
npm run build
```

### Creating New Features

```bash
# Generate a new page
# Create: app/(buyer)/feature-name/page.tsx

# Generate a new component
# Create: components/shared/feature-name.tsx

# Generate a new hook
# Create: hooks/use-feature-name.ts
```

---

## 📝 Next Steps for Development

### Immediate (Week 1-2)

1. **Complete Browse Page**
   - Vehicle grid with filters
   - Search functionality
   - Sort & view options
   - URL state management

2. **Vehicle Detail Page**
   - Image gallery
   - Full specifications
   - Seller profile
   - Cost calculator
   - CTA buttons

3. **Expand Mock Data**
   - More vehicles (20+)
   - More sellers (10+)
   - Auctions (5+)
   - Shipping pools (3+)

### Short-term (Week 3-4)

1. **Auctions Feature**
   - Live auction feed
   - Auction detail page
   - Bidding interface
   - Timer component

2. **Community Hub**
   - Stories tab
   - Q&A tab
   - Basic discussions

### Medium-term (Month 2)

1. **Seller Dashboard**
   - Inventory management
   - Order tracking
   - Analytics

2. **Buyer Dashboard**
   - Order tracking
   - Wishlist
   - Saved searches

---

## 🎯 Success Metrics

### Technical
- ✅ TypeScript strict mode passes
- ✅ All components typed
- ✅ Mobile responsive (375px, 768px, 1024px+)
- ✅ Lighthouse score 90+
- ✅ LCP < 2.5s, CLS < 0.1

### User Experience
- ✅ Intuitive navigation
- ✅ Fast page loads
- ✅ Accessible (WCAG 2.1 AA)
- ✅ Smooth animations

---

## 📚 Resources

- [Next.js Docs](https://nextjs.org/docs)
- [Shadcn UI](https://ui.shadcn.com)
- [Radix UI](https://www.radix-ui.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

---

## 🤝 Development Workflow

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/browse-page
   ```

2. **Develop Feature**
   - Create components
   - Add mock data
   - Write types
   - Test responsive

3. **Commit & Push**
   ```bash
   git add .
   git commit -m "feat: add browse page with filters"
   git push origin feature/browse-page
   ```

4. **Create PR**
   - Review code
   - Test on mobile/desktop
   - Merge to main

---

This framework provides everything you need to build out the complete JDM marketplace. Start with Phase 2 (Browse & Search) and work through each phase systematically.

