# JDM Collective - Codebase Cleanup & Organization Guide

**Purpose:** Help Cursor AI understand your project structure, identify what to delete, what to keep, and how to reorganize files for maximum efficiency.

---

## 📁 Proposed New Folder Structure

```
/jdm-collective
├── /app
│   ├── /(marketing)
│   │   ├── /page.tsx                      # Landing/Home
│   │   ├── /about/page.tsx
│   │   ├── /how-it-works/page.tsx
│   │   ├── /pricing/page.tsx
│   │   └── /legal/page.tsx
│   │
│   ├── /(marketplace)
│   │   ├── /browse/page.tsx               # Main vehicle browse with filters
│   │   ├── /vehicles/[id]/page.tsx        # Vehicle detail (360°, gallery, financing)
│   │   └── /search/page.tsx
│   │
│   ├── /(auctions)
│   │   ├── /auctions/page.tsx             # Live auctions feed
│   │   └── /auctions/[id]/page.tsx        # Auction detail + bid interface
│   │
│   ├── /(shipping)
│   │   ├── /shipping-pools/page.tsx       # Quarterly pools hub
│   │   └── /shipping/page.tsx             # General shipping info
│   │
│   ├── /(community)
│   │   ├── /community/page.tsx            # Main hub with 6 tabs
│   │   ├── /community/stories/page.tsx
│   │   ├── /community/qa/page.tsx
│   │   ├── /community/maintenance/page.tsx
│   │   ├── /community/discussions/page.tsx
│   │   ├── /community/regional/page.tsx
│   │   └── /community/experts/page.tsx
│   │
│   ├── /(agents)
│   │   ├── /agents/page.tsx               # Agent directory
│   │   └── /agents/[id]/page.tsx          # Agent profile
│   │
│   ├── /(dashboards)
│   │   ├── /account/dashboard/page.tsx    # Buyer dashboard
│   │   ├── /seller/dashboard/page.tsx     # Seller dashboard
│   │   └── /orders/[id]/page.tsx          # Order tracking
│   │
│   └── /(tools)
│       ├── /calculator/page.tsx           # Import cost + financing tabs
│       ├── /compare/page.tsx              # Vehicle comparison tool
│       └── /vin-check/page.tsx
│
├── /components
│   ├── /ui                                # Shadcn primitives (keep as-is)
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── badge.tsx
│   │   ├── input.tsx
│   │   └── select.tsx
│   │
│   ├── /shared                            # Reusable cross-domain components
│   │   ├── /navigation
│   │   │   ├── navbar.tsx
│   │   │   ├── footer.tsx
│   │   │   └── mobile-menu.tsx
│   │   │
│   │   ├── /layout
│   │   │   ├── page-header.tsx
│   │   │   ├── section-wrapper.tsx
│   │   │   └── container.tsx
│   │   │
│   │   └── /media
│   │       ├── image-gallery.tsx
│   │       ├── vehicle-360-viewer.tsx
│   │       └── video-player.tsx
│   │
│   ├── /vehicle                           # Vehicle-specific components
│   │   ├── vehicle-card.tsx
│   │   ├── vehicle-card-skeleton.tsx
│   │   ├── vehicle-filters.tsx
│   │   ├── vehicle-sort.tsx
│   │   ├── vehicle-grid.tsx
│   │   ├── vehicle-specs-table.tsx
│   │   └── vehicle-financing-calculator.tsx
│   │
│   ├── /auction                           # Auction-specific
│   │   ├── auction-card.tsx
│   │   ├── auction-timer.tsx
│   │   ├── bid-interface.tsx
│   │   └── auction-filters.tsx
│   │
│   ├── /shipping                          # Shipping pool components
│   │   ├── pool-card.tsx
│   │   ├── pool-progress.tsx
│   │   └── pool-timeline.tsx
│   │
│   ├── /agent                             # Agent-specific
│   │   ├── agent-card.tsx
│   │   ├── agent-stats.tsx
│   │   └── agent-contact-form.tsx
│   │
│   ├── /community                         # Community-specific
│   │   ├── story-card.tsx
│   │   ├── qa-post.tsx
│   │   ├── discussion-thread.tsx
│   │   └── comment-section.tsx
│   │
│   └── /sections                          # Landing page sections (keep current)
│       ├── hero-section.tsx
│       ├── features-section.tsx
│       ├── how-it-works-section.tsx
│       ├── cost-calculator-section.tsx
│       └── faq-section.tsx
│
├── /lib
│   ├── /types                             # ✅ BREAK APART mock-data.ts types
│   │   ├── vehicle.types.ts
│   │   ├── auction.types.ts
│   │   ├── shipping.types.ts
│   │   ├── agent.types.ts
│   │   ├── community.types.ts
│   │   └── index.ts                       # Re-export all
│   │
│   ├── /data                              # ✅ BREAK APART mock-data.ts
│   │   ├── vehicles.data.ts               # Mock vehicles only
│   │   ├── auctions.data.ts               # Mock auctions only
│   │   ├── shipping-pools.data.ts
│   │   ├── agents.data.ts
│   │   ├── testimonials.data.ts
│   │   ├── community-stories.data.ts
│   │   └── index.ts                       # Re-export all
│   │
│   ├── /utils                             # Utility functions
│   │   ├── formatting.ts                  # formatCurrency, formatNumber, formatDate
│   │   ├── calculator.ts                  # calculateCost, calculateMonthlyPayment
│   │   ├── filters.ts                     # filterVehicles, sortVehicles
│   │   ├── validation.ts                  # Form validation helpers
│   │   └── index.ts
│   │
│   ├── /config                            # Configuration constants
│   │   ├── constants.ts                   # Makes, models, conditions
│   │   ├── financing-plans.ts             # Financing option configs
│   │   ├── routes.ts                      # Route constants
│   │   └── index.ts
│   │
│   └── /api                               # Future: API client functions
│       └── placeholder.ts
│
├── /hooks
│   ├── use-filters.ts
│   ├── use-auction-timer.ts
│   ├── use-cost-calculator.ts
│   ├── use-financing-calculator.ts        # NEW: for financing tab
│   ├── use-media-gallery.ts               # NEW: for 360° and galleries
│   └── use-search.ts
│
├── /public
│   ├── /cars                              # Vehicle placeholder images
│   │   ├── /r34
│   │   ├── /supra
│   │   ├── /rx7
│   │   └── /placeholder.jpg
│   │
│   ├── /agents                            # Agent avatars
│   ├── /icons                             # App icons/logos
│   └── /hero                              # Hero/banner images
│
├── /styles
│   └── globals.css                        # Tailwind + custom CSS
│
└── /docs                                  # Documentation (keep for reference)
    ├── FRAMEWORK.md
    ├── DEVELOPMENT_GUIDE.md
    └── README.md
```

---

## 🗑️ What to DELETE

### ❌ Delete These Immediately

```
# If you have any of these patterns, delete them:

❌ /components/sections/*-placeholder.tsx
   → Any placeholder components that aren't being used

❌ /lib/mock-data.ts (the GIANT file)
   → BREAK IT APART into /lib/data/* (see below)

❌ /lib/types.ts (if it's one massive file)
   → BREAK IT APART into /lib/types/* (see below)

❌ /lib/unused-utils.ts
   → Any utility files with functions that aren't imported anywhere

❌ /public/temp/*
   → Temporary images or assets

❌ Duplicate component files
   → e.g., VehicleCard.tsx AND vehicle-card.tsx (pick one naming convention)

❌ /app/test/*
   → Any test pages not in production

❌ Old documentation files
   → README-old.md, NOTES.md, SCRATCH.md (consolidate or delete)
```

### ❌ Redundant Code Patterns

```typescript
// DELETE patterns like this:

// ❌ Inline styles everywhere
<div style={{ padding: "20px", margin: "10px" }}>

// ✅ Replace with Tailwind classes
<div className="p-5 m-2.5">

// ❌ Repeated filter logic in every page
const filtered = vehicles.filter(v => v.year > 2000 && v.make === "Nissan")

// ✅ Use centralized filter utilities
import { filterVehicles } from "@/lib/utils/filters"
const filtered = filterVehicles(vehicles, filters)

// ❌ Hard-coded mock data in components
const mockVehicle = { year: 2020, make: "Toyota", model: "Supra" }

// ✅ Import from centralized data
import { mockVehicles } from "@/lib/data/vehicles.data"
```

---

## 🔄 What to REORGANIZE

### 1. Break Apart `lib/mock-data.ts`

**Current problem:** One giant file with vehicles, auctions, pools, agents, testimonials all mixed together.

**Solution:** Split into domain-specific files

#### Create `/lib/data/vehicles.data.ts`

```typescript
// lib/data/vehicles.data.ts
import type { Vehicle } from "@/lib/types/vehicle.types"

export const mockVehicles: Vehicle[] = [
  {
    id: "r34-gtr-001",
    year: 1999,
    make: "Nissan",
    model: "Skyline GT-R",
    // ... all vehicle fields
  },
  // ... more vehicles
]

// Export filtered subsets for convenience
export const featuredVehicles = mockVehicles.slice(0, 6)
export const availableVehicles = mockVehicles.filter(v => v.status === "available")
```

#### Create `/lib/data/auctions.data.ts`

```typescript
// lib/data/auctions.data.ts
import type { Auction } from "@/lib/types/auction.types"
import { mockVehicles } from "./vehicles.data"

export const mockAuctions: Auction[] = [
  {
    id: "auction-001",
    vehicle: mockVehicles[0],
    currentBidUsd: 85000,
    // ... all auction fields
  },
]

export const liveAuctions = mockAuctions.filter(a => !a.isEnded)
export const endingSoonAuctions = mockAuctions.filter(a => /* logic */)
```

#### Create `/lib/data/index.ts` (Re-export everything)

```typescript
// lib/data/index.ts
export * from "./vehicles.data"
export * from "./auctions.data"
export * from "./shipping-pools.data"
export * from "./agents.data"
export * from "./testimonials.data"
export * from "./community-stories.data"
```

**Usage:**

```typescript
// ✅ Clean imports
import { mockVehicles, featuredVehicles } from "@/lib/data"
import { liveAuctions } from "@/lib/data"

// ❌ OLD way (delete)
import { mockVehicles, mockAuctions, mockPools } from "@/lib/mock-data"
```

---

### 2. Break Apart `lib/types.ts`

**Current problem:** One giant file with all TypeScript interfaces.

**Solution:** Domain-driven type organization

#### Create `/lib/types/vehicle.types.ts`

```typescript
// lib/types/vehicle.types.ts

export interface VehicleMedia {
  heroImage: string
  gallery: string[]
  images360?: string[]
  interior?: string[]
  engineBay?: string[]
  docs?: string[]
}

export interface VehicleSpecs {
  engine: string
  powerHp?: number
  torqueNm?: number
  curbWeightKg?: number
  color?: string
  vin?: string
  chassisCode?: string
}

export interface VehicleSummary {
  id: string
  year: number
  make: string
  model: string
  trim?: string
  mileageKm: number
  transmission: "Manual" | "Automatic"
  drive: "RWD" | "FWD" | "AWD" | "4WD"
  location: string
  grade?: string
  priceUsd: number
  status?: "available" | "reserved" | "sold"
  media: VehicleMedia
  startingMonthlyPaymentUsd?: number
}

export interface Vehicle extends VehicleSummary {
  description?: string
  specs?: VehicleSpecs
  mods?: string[]
  inspectionNotes?: string[]
  financingOptions?: FinancingOption[]
}

export interface FinancingOption {
  id: string
  name: string
  apr: number
  termMonths: number
  minDownPaymentPercent: number
}
```

#### Create `/lib/types/auction.types.ts`

```typescript
// lib/types/auction.types.ts
import type { VehicleSummary } from "./vehicle.types"

export interface Auction {
  id: string
  vehicle: VehicleSummary
  currentBidUsd: number
  reserveMet: boolean
  bidsCount: number
  endsAt: string // ISO string
  location: string
  badges?: string[]
  isEnded?: boolean
}
```

#### Create `/lib/types/index.ts`

```typescript
// lib/types/index.ts
export * from "./vehicle.types"
export * from "./auction.types"
export * from "./shipping.types"
export * from "./agent.types"
export * from "./community.types"
```

---

### 3. Consolidate Constants

#### Create `/lib/config/constants.ts`

```typescript
// lib/config/constants.ts

export const MAKES = [
  "Nissan", "Toyota", "Honda", "Mazda", "Mitsubishi", "Subaru"
] as const

export const MODELS_BY_MAKE = {
  Nissan: ["Skyline GT-R", "Silvia", "180SX", "Fairlady Z"],
  Toyota: ["Supra", "Chaser", "Soarer", "MR2"],
  // ...
} as const

export const TRANSMISSIONS = ["Manual", "Automatic"] as const
export const DRIVETRAIN = ["RWD", "FWD", "AWD", "4WD"] as const
export const CONDITIONS = ["Excellent", "Good", "Fair", "Project"] as const

export const DESTINATIONS = [
  { code: "usa", name: "United States", flag: "🇺🇸" },
  { code: "can", name: "Canada", flag: "🇨🇦" },
] as const

export const PRICE_RANGES = [
  { label: "Under $20K", min: 0, max: 20000 },
  { label: "$20K - $50K", min: 20000, max: 50000 },
  { label: "$50K - $100K", min: 50000, max: 100000 },
  { label: "$100K+", min: 100000, max: Infinity },
] as const
```

---

### 4. Component Naming Convention

**Pick ONE and stick with it:**

```typescript
// ✅ RECOMMENDED: kebab-case for files, PascalCase for exports
// File: vehicle-card.tsx
export function VehicleCard() {}

// ❌ AVOID: mixing conventions
// vehicle-card.tsx → exports VehicleCard ✅
// VehicleCard.tsx → exports VehicleCard ❌ (inconsistent with other files)
```

**Rename all components to follow:**

```
vehicle-card.tsx
auction-card.tsx
agent-card.tsx
pool-card.tsx
```

---

## ✅ What to KEEP (Don't Touch)

```
✅ /components/ui/*                    # Shadcn primitives
✅ /components/sections/*              # Landing page sections (working)
✅ /hooks/use-filters.ts               # Solid hook
✅ /hooks/use-auction-timer.ts         # Solid hook
✅ /hooks/use-cost-calculator.ts       # Solid hook
✅ /lib/utils/formatting.ts            # Essential utilities
✅ /lib/utils/calculator.ts            # Cost calc logic
✅ /lib/utils/filters.ts               # Filter logic
✅ tailwind.config.ts                  # Theme config
✅ /app/(marketing)/page.tsx           # Landing page (working)
✅ /docs/FRAMEWORK.md                  # Good reference doc
```

---

## 🎨 NEW Files to CREATE

### 1. `/lib/utils/financing.ts`

```typescript
// lib/utils/financing.ts

interface FinanceInput {
  vehiclePrice: number
  downPayment: number
  apr: number
  termMonths: number
}

export function calculateMonthlyPayment({
  vehiclePrice,
  downPayment,
  apr,
  termMonths,
}: FinanceInput) {
  const principal = vehiclePrice - downPayment
  const monthlyRate = apr / 100 / 12

  if (monthlyRate === 0) {
    return {
      payment: principal / termMonths,
      totalPaid: principal,
      totalInterest: 0,
    }
  }

  const payment =
    (principal * monthlyRate) /
    (1 - Math.pow(1 + monthlyRate, -termMonths))

  const totalPaid = payment * termMonths
  const totalInterest = totalPaid - principal

  return {
    payment: Math.round(payment * 100) / 100,
    totalPaid: Math.round(totalPaid * 100) / 100,
    totalInterest: Math.round(totalInterest * 100) / 100,
  }
}
```

### 2. `/hooks/use-financing-calculator.ts`

```typescript
// hooks/use-financing-calculator.ts
"use client"

import { useState } from "react"
import { calculateMonthlyPayment } from "@/lib/utils/financing"

export function useFinancingCalculator(defaultPrice = 0) {
  const [vehiclePrice, setVehiclePrice] = useState(defaultPrice)
  const [downPercent, setDownPercent] = useState(10)
  const [apr, setApr] = useState(6.9)
  const [termMonths, setTermMonths] = useState(60)

  const downPayment = vehiclePrice * (downPercent / 100)

  const result = calculateMonthlyPayment({
    vehiclePrice,
    downPayment,
    apr,
    termMonths,
  })

  return {
    vehiclePrice,
    setVehiclePrice,
    downPercent,
    setDownPercent,
    apr,
    setApr,
    termMonths,
    setTermMonths,
    downPayment,
    ...result,
  }
}
```

### 3. `/components/vehicle/vehicle-360-viewer.tsx`

```typescript
// components/vehicle/vehicle-360-viewer.tsx
"use client"

import Image from "next/image"
import { useState } from "react"

interface Vehicle360ViewerProps {
  frames: string[]
}

export function Vehicle360Viewer({ frames }: Vehicle360ViewerProps) {
  const [index, setIndex] = useState(0)

  if (!frames || frames.length === 0) {
    return (
      <div className="flex h-72 items-center justify-center rounded-xl border bg-slate-50">
        <span className="text-sm text-slate-500">360° view coming soon</span>
      </div>
    )
  }

  const handleDrag = (deltaX: number) => {
    if (Math.abs(deltaX) < 10) return
    const direction = deltaX > 0 ? 1 : -1
    setIndex((prev) => (prev + direction + frames.length) % frames.length)
  }

  return (
    <div
      className="relative h-72 w-full cursor-grab overflow-hidden rounded-xl border bg-slate-900 active:cursor-grabbing"
      onMouseMove={(e) => {
        if (e.buttons === 1) handleDrag(e.movementX)
      }}
    >
      <Image
        src={frames[index]}
        alt="360 degree view"
        fill
        className="object-contain"
      />
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 rounded-full bg-black/60 px-3 py-1 text-xs text-white">
        Drag to rotate • {index + 1}/{frames.length}
      </div>
    </div>
  )
}
```

---

## 🎯 Action Checklist for Cleanup

### Week 1: File Structure

- [ ] Create `/lib/types/*` folder structure
- [ ] Break apart `lib/types.ts` into domain files
- [ ] Create `/lib/data/*` folder structure
- [ ] Break apart `lib/mock-data.ts` into domain files
- [ ] Create `/lib/config/constants.ts`
- [ ] Delete old `lib/mock-data.ts` and `lib/types.ts`

### Week 2: Components

- [ ] Rename all components to kebab-case
- [ ] Move components into domain folders (`/vehicle`, `/auction`, `/agent`)
- [ ] Delete unused placeholder components
- [ ] Create `vehicle-360-viewer.tsx`
- [ ] Create `vehicle-financing-calculator.tsx`

### Week 3: Utilities & Hooks

- [ ] Create `/lib/utils/financing.ts`
- [ ] Create `/hooks/use-financing-calculator.ts`
- [ ] Create `/hooks/use-media-gallery.ts`
- [ ] Consolidate all formatting utilities
- [ ] Delete unused utility functions

### Week 4: Pages

- [ ] Reorganize `/app` routes by feature
- [ ] Create route groups: `(marketplace)`, `(auctions)`, `(community)`, etc.
- [ ] Delete test/placeholder pages
- [ ] Ensure all pages import from new file structure

---

## 📝 Cursor AI Instructions

**Add this comment block to your main files so Cursor understands the structure:**

```typescript
/**
 * JDM Collective - Codebase Structure
 *
 * Types: /lib/types/* (domain-specific)
 * Data: /lib/data/* (mock data by domain)
 * Utils: /lib/utils/* (shared utilities)
 * Config: /lib/config/* (constants, routes)
 * Components: /components/{ui,shared,vehicle,auction,agent,shipping,community}
 * Hooks: /hooks/* (custom React hooks)
 *
 * Import Pattern:
 * - Types: import type { Vehicle } from "@/lib/types"
 * - Data: import { mockVehicles } from "@/lib/data"
 * - Utils: import { formatCurrency } from "@/lib/utils"
 * - Components: import { VehicleCard } from "@/components/vehicle/vehicle-card"
 */
```

---

## 🚀 Benefits After Cleanup

✅ **Cursor AI can find types instantly** → Better autocomplete  
✅ **Mock data organized by domain** → Easy to extend  
✅ **Clear component hierarchy** → No more "where is VehicleCard?"  
✅ **Consistent naming** → Less confusion  
✅ **Smaller files** → Easier to navigate  
✅ **Domain-driven structure** → Scales with features  

---

## 💡 Pro Tips

1. **Use Barrel Exports** (`index.ts` files) to simplify imports
2. **Keep mock data realistic** but small (5-10 items per type)
3. **Document component props** with JSDoc comments
4. **Use TypeScript strict mode** to catch errors early
5. **Run Prettier/ESLint** to maintain code style

---

**Next Step:** Start with breaking apart `lib/types.ts` and `lib/mock-data.ts` first - this will have the biggest impact on code clarity and Cursor's understanding.