"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function SiteHeader() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isSticky
          ? "bg-black/80 backdrop-blur py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-900 rounded-lg flex items-center justify-center">
              <span className="text-white font-black text-lg">◆</span>
            </div>
            <span className="text-white font-bold text-xl hidden sm:block">
              JDM Collective
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex gap-8 items-center">
            <Link
              href="#browse"
              className="text-gray-300 hover:text-white transition"
            >
              Browse
            </Link>
            <Link
              href="#how-it-works"
              className="text-gray-300 hover:text-white transition"
            >
              How It Works
            </Link>
            <Link
              href="#sellers"
              className="text-gray-300 hover:text-white transition"
            >
              For Sellers
            </Link>
          </div>

          {/* CTA Buttons */}
          <div className="flex gap-3 items-center">
            <Button
              variant="ghost"
              className="hidden sm:block text-white hover:text-gray-200"
              asChild
            >
              <Link href="/sign-in">Sign In</Link>
            </Button>
            <Button variant="default" className="bg-red-600 hover:bg-red-700" asChild>
              <Link href="/get-started">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}

