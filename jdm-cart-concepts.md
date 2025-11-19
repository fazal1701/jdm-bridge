# JDM Bridge Cart Concepts

## Overview
This document details five production-ready shopping cart concepts designed for a JDM import car/lifestyle shop. Each idea adapts the existing luxury-style checkout flow with UI/UX transformations to match the motorsport-coded, Japanese car culture aesthetic of JDM Bridge.

---

## 1. "Garage Cart" — Virtual Tuning Bay

- **Theme:** Cart becomes your virtual garage bay; users "store builds" before checkout.
- **UI Patterns:**
  - Cart renamed to "Garage"
  - Each item is a garage bay (Bay 1, Bay 2) with mechanical grid lines and subtle carbon fiber overlay
  - Quantity displayed as "Units Installed"
  - Size as "Spec: M / L / XL"
  - Total as "Garage Bill"
- **Mock Data:**
  ```js
  {
    id: "skyline-r34-shirt",
    title: "Nissan Skyline R34 Blueprint Tee",
    price: 42,
    quantity: 1,
    selectedSize: "L",
    image: "/mock/jdm/r34-blueprint.png"
  }
  ```

---

## 2. "Import Queue Cart" — Port/Auction Pipeline

- **Theme:** Cart simulates an import queue; items have port/customs status and ETAs.
- **UI Patterns:**
  - Status chip per item: "Ready for Shipping", "At Yokohama Port", "Awaiting Customs Clearance"
  - ETA/progress bar displayed inline
  - Quantity as "Units in Shipment"
  - Tooltip: "These items will ship together."
- **Mock Data:**
  ```js
  {
    id: "jdm-hoodie",
    title: "JDM Bridge Signature Hoodie",
    price: 65,
    quantity: 2,
    status: "Ready for Shipping",
    image: "/mock/jdm/bridge-hoodie.png"
  }
  ```

---

## 3. "Spec Sheet Cart" — Automotive Data Table

- **Theme:** Items formatted like car spec sheets; detailed and technical.
- **UI Patterns:**
  - Three-row item spec table (Model / Trim / Output, plus quantity and color)
  - Monospace font for technical readout
- **Mock Data:**
  ```js
  {
    id: "ae86-tee",
    title: "Toyota AE86 Drift Tee",
    price: 35,
    quantity: 1,
    specs: { trim: "M", color: "Black" },
    image: "/mock/jdm/ae86.png"
  }
  ```

---

## 4. "Dyno Readout Cart" — Performance Metrics

- **Theme:** Cart items styled as dyno pull cards with power metrics and neon accents.
- **UI Patterns:**
  - Tiny dyno graph SVG background
  - Neon accent colors: #70E0D1 (teal), #E7A9C9 (pink)
  - Bold motorsport font
  - Displays peak HP and torque
- **Mock Data:**
  ```js
  {
    id: "supra-tee",
    title: "Toyota Supra MK4 Legend Tee",
    price: 45,
    quantity: 1,
    selectedSize: "L",
    dyno: {
      peak_hp: 320,
      peak_torque: 315
    },
    image: "/mock/jdm/supra.png"
  }
  ```

---

## 5. "Parts Cart" — OEM Parts Catalog Look

- **Theme:** Styled like professional NISMO/HKS order system; clean, organized, technical.
- **UI Patterns:**
  - Part numbers as badges, auto-generated or manual
  - Grey box layout, professional font
- **Mock Data:**
  ```js
  {
    id: "nismo-keychain",
    title: "NISMO Style Keychain",
    partNumber: "NIS-KEY-001",
    price: 18,
    quantity: 1,
    image: "/mock/jdm/nismo-keychain.png"
  }
  ```

---

## Brand Colors for JDM Bridge

- Deep Navy: #0A1A5F
- Muted Pink: #E7A9C9
- Teal Highlight: #70E0D1
- Dark Background: #0A0A0A
- Accent usage: Pink and teal at 5–10% opacity for strokes, dots, progress bars, overlays

## Implementation Notes
- All concepts plug into your existing cart store and checkout flow.
- No backend changes required — purely UI/UX adaptions.
- Use your current React/Next.js architecture.

---

**Let me know which cart concept you'd like to implement first!**