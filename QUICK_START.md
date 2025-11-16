# JDM Collective - Quick Start Guide
## Everything You Need to Know

---

## 📦 What's Been Built

### ✅ Complete Foundation

1. **Landing Page** - Fully functional with 8 sections
   - Hero with search
   - Trust stats
   - Features grid
   - How It Works timeline
   - Cost calculator
   - Featured inventory
   - FAQ accordion
   - Newsletter CTA

2. **Design System** - Production-ready
   - Shadcn UI components (Button, Card, Badge, Input, Select)
   - Tailwind CSS with custom theme
   - Dark mode optimized
   - Mobile-first responsive

3. **Type System** - Complete TypeScript types
   - Vehicle, Auction, ShippingPool, Agent, Order types
   - All interfaces defined in `lib/types.ts`

4. **Mock Data** - Ready to use
   - Vehicles (`lib/mock-data.ts`)
   - Auctions (`lib/mock-data-auctions.ts`)
   - Shipping Pools (`lib/mock-data-pools.ts`)
   - Agents, Testimonials, Community Stories

5. **Utilities & Hooks** - Reusable logic
   - `formatCurrency`, `formatNumber`, `formatDate` (formatting.ts)
   - `calculateCost`, `calculatePoolFill` (calculator.ts)
   - `filterVehicles`, `sortVehicles` (filters.ts)
   - `useFilters` - URL state management
   - `useAuctionTimer` - Real-time countdown
   - `useCostCalculator` - Cost breakdown

6. **Constants** - App-wide constants
   - Makes, Models, Conditions, Price Ranges
   - Destinations, Transmission options

---

## 🚀 How to Use This Framework

### 1. Start Development Server

```bash
npm install
npm run dev
```

Visit `http://localhost:3000` to see the landing page.

### 2. Build Your First Feature: Browse Page

**Create the page**:
```bash
mkdir -p app/\(buyer\)/browse
touch app/\(buyer\)/browse/page.tsx
```

**Use the template from `DEVELOPMENT_GUIDE.md`**:
- Copy the Browse Page example
- Import `useFilters` hook
- Import `filterVehicles` function
- Use `mockVehicles` data
- Create `VehicleCard` component

### 3. Add More Vehicles to Mock Data

Edit `lib/mock-data.ts`:
```typescript
export const mockVehicles: VehicleSummary[] = [
  // Add more vehicles here
  {
    id: "4",
    year: 1998,
    make: "Honda",
    model: "Civic Type-R",
    // ... rest of properties
  },
];
```

### 4. Create New Components

**Pattern**:
```typescript
// components/shared/your-component.tsx
"use client"; // Only if needed

import { Button } from "@/components/ui/button";
import type { VehicleSummary } from "@/lib/types";

interface YourComponentProps {
  vehicle: VehicleSummary;
}

export function YourComponent({ vehicle }: YourComponentProps) {
  return <div>...</div>;
}
```

---

## 📚 Key Files to Reference

### Documentation
- **`FRAMEWORK.md`** - Complete architecture overview
- **`DEVELOPMENT_GUIDE.md`** - Step-by-step development guide
- **`README.md`** - Project overview

### Code Files
- **`lib/types.ts`** - All TypeScript types
- **`lib/constants.ts`** - App constants
- **`lib/formatting.ts`** - Formatting utilities
- **`lib/calculator.ts`** - Cost calculation
- **`lib/filters.ts`** - Vehicle filtering
- **`hooks/use-filters.ts`** - Filter state management
- **`hooks/use-auction-timer.ts`** - Auction countdown

### Mock Data
- **`lib/mock-data.ts`** - Vehicles, sellers, testimonials
- **`lib/mock-data-auctions.ts`** - Auctions
- **`lib/mock-data-pools.ts`** - Shipping pools

---

## 🎯 Next Steps (Priority Order)

### Week 1: Browse & Search
1. ✅ Landing page (DONE)
2. ⏳ Browse page with filters
3. ⏳ Vehicle detail page
4. ⏳ Search functionality

### Week 2: Auctions
1. ⏳ Auctions feed page
2. ⏳ Auction detail page
3. ⏳ Bidding interface
4. ⏳ Timer components

### Week 3: Community
1. ⏳ Community hub (6 tabs)
2. ⏳ Stories section
3. ⏳ Q&A section
4. ⏳ Discussions

### Week 4: Dashboards
1. ⏳ Buyer dashboard
2. ⏳ Seller dashboard
3. ⏳ Order tracking
4. ⏳ Analytics

---

## 💡 Common Patterns

### Using Filters

```typescript
import { useFilters } from "@/hooks/use-filters";
import { filterVehicles } from "@/lib/filters";
import { mockVehicles } from "@/lib/mock-data";

export default function BrowsePage() {
  const { filters } = useFilters();
  const filtered = filterVehicles(mockVehicles, filters);
  
  return <VehicleGrid vehicles={filtered} />;
}
```

### Formatting Values

```typescript
import { formatCurrency, formatNumber, formatDate } from "@/lib/formatting";

const price = formatCurrency(25000); // "$25,000"
const mileage = formatNumber(50000); // "50,000"
const date = formatDate("2024-01-15"); // "January 15, 2024"
```

### Calculating Costs

```typescript
import { calculateCost } from "@/lib/calculator";

const breakdown = calculateCost({
  vehiclePrice: 20000,
  destination: "usa",
  usePool: true,
  poolCost: 1100,
});

console.log(breakdown.total); // Total landed cost
```

### Auction Timer

```typescript
import { useAuctionTimer } from "@/hooks/use-auction-timer";

function AuctionCard({ auction }) {
  const { formatted, isEnded } = useAuctionTimer(auction.endsAt);
  
  return <div>Time left: {formatted}</div>;
}
```

---

## 🛠️ Development Workflow

1. **Create Feature Branch**
   ```bash
   git checkout -b feature/browse-page
   ```

2. **Develop Feature**
   - Create components
   - Add mock data if needed
   - Test responsive design
   - Check TypeScript errors

3. **Test Locally**
   ```bash
   npm run dev
   # Test at 375px, 768px, 1024px
   ```

4. **Commit & Push**
   ```bash
   git add .
   git commit -m "feat: add browse page"
   git push origin feature/browse-page
   ```

---

## 📖 Resources

- **Next.js Docs**: https://nextjs.org/docs
- **Shadcn UI**: https://ui.shadcn.com
- **Tailwind CSS**: https://tailwindcss.com
- **Framer Motion**: https://www.framer.com/motion
- **nuqs**: https://nuqs.47ng.com

---

## ❓ FAQ

**Q: How do I add a new page?**
A: Create `app/(segment)/page-name/page.tsx` following Next.js App Router conventions.

**Q: How do I add new mock data?**
A: Edit the appropriate `lib/mock-data*.ts` file and export the new data.

**Q: How do I create a new component?**
A: Create `components/shared/component-name.tsx` with TypeScript interface for props.

**Q: How do I manage URL state?**
A: Use `useFilters` hook or `useQueryState` from nuqs directly.

**Q: How do I format currency/numbers?**
A: Import from `@/lib/formatting` - `formatCurrency`, `formatNumber`, etc.

---

## 🎉 You're Ready!

You now have everything you need to build out the complete JDM marketplace. Start with the Browse page and work through each feature systematically.

**Happy coding! 🚀**

