# JDM Collective - Development Guide
## Step-by-Step Guide to Building the Marketplace

---

## 🎯 What You Have Now

✅ **Landing Page** - Complete with all sections
✅ **Design System** - Shadcn UI + Tailwind CSS
✅ **Type System** - Full TypeScript types
✅ **Mock Data** - Vehicles, auctions, pools, agents
✅ **Utilities** - Formatting, calculator, filters
✅ **Hooks** - Filters, auction timer, cost calculator

---

## 🚀 Next Development Steps

### Step 1: Build the Browse Page (Priority 1)

**Location**: `app/(buyer)/browse/page.tsx`

**What to Build**:
1. Vehicle grid with cards
2. Filter sidebar (make, model, year, price, condition)
3. Search bar
4. Sort dropdown
5. View toggle (grid/list)
6. URL state management with nuqs

**Components to Create**:
- `components/shared/vehicle-card.tsx` - Individual vehicle card
- `components/shared/vehicle-grid.tsx` - Grid layout
- `components/shared/filter-sidebar.tsx` - Filter panel
- `components/shared/search-bar.tsx` - Search input

**Mock Data**: Use `mockVehicles` from `lib/mock-data.ts`

**Example Structure**:
```typescript
// app/(buyer)/browse/page.tsx
import { Suspense } from "react";
import { VehicleGrid } from "@/components/shared/vehicle-grid";
import { FilterSidebar } from "@/components/shared/filter-sidebar";
import { useFilters } from "@/hooks/use-filters";
import { filterVehicles } from "@/lib/filters";
import { mockVehicles } from "@/lib/mock-data";

export default function BrowsePage() {
  const { filters } = useFilters();
  const filtered = filterVehicles(mockVehicles, filters);
  
  return (
    <div className="container py-8">
      <div className="grid lg:grid-cols-4 gap-8">
        <FilterSidebar />
        <VehicleGrid vehicles={filtered} />
      </div>
    </div>
  );
}
```

---

### Step 2: Build Vehicle Detail Page

**Location**: `app/(buyer)/vehicles/[id]/page.tsx`

**What to Build**:
1. Image gallery (Next.js Image)
2. Full specifications table
3. Seller profile card
4. Cost calculator (reuse from landing)
5. CTA buttons (Contact Seller, Save to Wishlist, Join Pool)
6. Related vehicles section

**Components to Create**:
- `components/shared/vehicle-image-gallery.tsx`
- `components/shared/vehicle-specs-table.tsx`
- `components/shared/seller-profile-card.tsx`

---

### Step 3: Build Auctions Feature

**Location**: `app/(buyer)/auctions/page.tsx`

**What to Build**:
1. Live auctions feed
2. Auction cards with countdown timers
3. Filter by status (live, ending soon, upcoming)
4. Bid placement interface

**Components to Create**:
- `components/shared/auction-card.tsx` - Uses `useAuctionTimer` hook
- `components/shared/auction-list.tsx`
- `components/shared/bid-form.tsx`

**Key Features**:
- Real-time countdown (updates every second)
- Current bid display
- Progress bar showing time remaining
- Eligibility badges

---

### Step 4: Build Community Hub

**Location**: `app/(buyer)/community/page.tsx`

**What to Build**:
6 tabs using Shadcn Tabs:
1. **Stories** - Success stories with images
2. **Q&A** - Questions and answers
3. **Maintenance** - Maintenance guides
4. **Discussions** - Forum threads
5. **Regional** - Regional groups
6. **Experts** - Expert profiles

**Components to Create**:
- `components/shared/community-story-card.tsx`
- `components/shared/question-card.tsx`
- `components/shared/maintenance-guide-card.tsx`
- `components/shared/discussion-thread-card.tsx`

---

### Step 5: Build Seller Dashboard

**Location**: `app/(seller)/dashboard/page.tsx`

**What to Build**:
1. Analytics overview (sales, revenue, views)
2. Inventory management table
3. Order management
4. Quick actions

**Components to Create**:
- `components/seller/analytics-cards.tsx`
- `components/seller/inventory-table.tsx`
- `components/seller/order-list.tsx`

---

## 📝 Component Templates

### Vehicle Card Template

```typescript
// components/shared/vehicle-card.tsx
"use client";

import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart } from "lucide-react";
import { formatCurrency, formatNumber } from "@/lib/formatting";
import type { VehicleSummary } from "@/lib/types";

interface VehicleCardProps {
  vehicle: VehicleSummary;
  isWishlisted?: boolean;
  onWishlist?: (id: string) => void;
  onSelect?: (id: string) => void;
}

export function VehicleCard({
  vehicle,
  isWishlisted = false,
  onWishlist,
  onSelect,
}: VehicleCardProps) {
  return (
    <Card className="overflow-hidden hover:shadow-lg transition">
      <div className="relative h-48">
        <Image
          src={vehicle.primaryImage}
          alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
          fill
          className="object-cover"
        />
        <Badge className="absolute top-2 right-2">
          {vehicle.condition}
        </Badge>
        <Button
          variant="ghost"
          size="icon"
          className="absolute top-2 left-2"
          onClick={() => onWishlist?.(vehicle.id)}
        >
          <Heart className={isWishlisted ? "fill-red-600" : ""} />
        </Button>
      </div>
      <CardContent className="p-4">
        <h3 className="font-bold text-lg mb-2">
          {vehicle.year} {vehicle.make} {vehicle.model}
        </h3>
        <p className="text-sm text-gray-600 mb-4">
          {formatNumber(vehicle.mileage)} km
        </p>
        <div className="flex justify-between items-center">
          <span className="text-2xl font-black">
            {formatCurrency(vehicle.estimatedLandedCost)}
          </span>
          <Button onClick={() => onSelect?.(vehicle.id)}>
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
```

### Auction Card Template

```typescript
// components/shared/auction-card.tsx
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useAuctionTimer } from "@/hooks/use-auction-timer";
import { formatCurrency } from "@/lib/formatting";
import type { Auction } from "@/lib/types";

interface AuctionCardProps {
  auction: Auction;
  onBid?: (auctionId: string) => void;
}

export function AuctionCard({ auction, onBid }: AuctionCardProps) {
  const { formatted, isEnded } = useAuctionTimer(auction.endsAt);
  const progress = (auction.timeRemaining / 3600) * 100; // Example calculation

  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-4">
          <div>
            <h3 className="font-bold text-xl mb-2">
              {auction.vehicle.year} {auction.vehicle.make} {auction.vehicle.model}
            </h3>
            <Badge variant={isEnded ? "destructive" : "default"}>
              {isEnded ? "Ended" : formatted}
            </Badge>
          </div>
        </div>
        
        <div className="mb-4">
          <p className="text-sm text-gray-600 mb-1">Current Bid</p>
          <p className="text-3xl font-black">
            ¥{(auction.currentBid / 1000000).toFixed(1)}M
          </p>
          <p className="text-sm text-gray-500">
            {formatCurrency(auction.currentBid / 100)}
          </p>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div
            className="bg-red-600 h-2 rounded-full"
            style={{ width: `${progress}%` }}
          />
        </div>

        <Button
          className="w-full"
          onClick={() => onBid?.(auction.id)}
          disabled={isEnded}
        >
          {isEnded ? "Auction Ended" : "Place Bid"}
        </Button>
      </CardContent>
    </Card>
  );
}
```

---

## 🎨 Styling Guidelines

### Dark Theme Pattern

```typescript
// Backgrounds
"bg-black"           // Main background
"bg-gray-900"        // Card background
"bg-gray-800"        // Hover state
"bg-white/5"         // Subtle overlay

// Text
"text-white"         // Primary text
"text-gray-300"      // Secondary text
"text-gray-400"      // Tertiary text
"text-gray-500"      // Muted text

// Borders
"border-gray-800"    // Default border
"border-gray-700"    // Hover border
"border-red-600/50"  // Accent border
```

### Responsive Breakpoints

```typescript
// Mobile First
"grid-cols-1"                    // Mobile: 1 column
"md:grid-cols-2"                 // Tablet: 2 columns
"lg:grid-cols-3"                 // Desktop: 3 columns

// Spacing
"px-4 sm:px-6 lg:px-8"          // Responsive padding
"py-8 md:py-12 lg:py-16"        // Responsive vertical padding
```

---

## 🧪 Testing Checklist

Before pushing code:

- [ ] TypeScript compiles without errors
- [ ] Mobile responsive (375px, 768px, 1024px)
- [ ] All links work
- [ ] Images load correctly
- [ ] Filters update URL
- [ ] Animations are smooth
- [ ] No console errors
- [ ] Accessibility (keyboard navigation works)

---

## 📚 Quick Reference

### Import Patterns

```typescript
// Components
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

// Hooks
import { useFilters } from "@/hooks/use-filters";
import { useAuctionTimer } from "@/hooks/use-auction-timer";

// Utils
import { formatCurrency } from "@/lib/formatting";
import { filterVehicles } from "@/lib/filters";
import { calculateCost } from "@/lib/calculator";

// Types
import type { VehicleSummary } from "@/lib/types";

// Mock Data
import { mockVehicles } from "@/lib/mock-data";
import { mockAuctions } from "@/lib/mock-data-auctions";
```

### Common Patterns

```typescript
// URL State
const { filters, setMake } = useFilters();

// Filtering
const filtered = filterVehicles(mockVehicles, filters);

// Formatting
const price = formatCurrency(25000);
const time = formatTimeRemaining(3600);

// Calculations
const breakdown = calculateCost({ vehiclePrice: 20000, ... });
```

---

## 🚀 Ready to Build?

1. **Start with Browse Page** - Most important feature
2. **Add Vehicle Detail** - Essential for conversions
3. **Build Auctions** - Unique differentiator
4. **Expand Community** - Network effects
5. **Seller Tools** - Revenue driver

Follow the templates and patterns above, and you'll have a production-ready marketplace in no time!

