"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useUser } from "@/contexts/user-context";
import {
  Car,
  Gavel,
  Users,
  Ship,
  FileText,
  MessageSquare,
  Calculator,
  Search,
  User,
  LogOut,
  ShoppingCart,
  Heart,
  Menu,
  X,
} from "lucide-react";

const navItems = [
  { href: "/marketplace", label: "Marketplace", icon: Car },
  { href: "/auctions", label: "Live Auctions", icon: Gavel },
  { href: "/agents", label: "Agents", icon: Users },
  { href: "/shipping", label: "Shipping", icon: Ship },
  { href: "/how-it-works", label: "How It Works", icon: FileText },
  { href: "/community", label: "Community", icon: MessageSquare },
  { href: "/calculator", label: "Calculator", icon: Calculator },
];

export function SiteHeader() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const { user, logout, cart: userCart } = useUser();

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    router.push("/");
    setUserMenuOpen(false);
  };

  return (
    <nav
      className={cn(
        "fixed w-full z-50 transition-all duration-300",
        isSticky
          ? "bg-white/95 backdrop-blur-md py-2 shadow-lg"
          : "bg-white/80 backdrop-blur-sm py-4"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-green-500 to-green-600 rounded-lg flex items-center justify-center shadow-lg">
              <Car className="w-6 h-6 text-white" />
            </div>
            <div className="hidden sm:block">
              <div className="text-gray-900 font-black text-lg leading-tight">
                JDM
              </div>
              <div className="text-gray-900 font-bold text-sm leading-tight -mt-1">
                Bridge
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex gap-1 items-center">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "flex items-center gap-2 px-4 py-2 rounded-lg transition-colors",
                    isActive
                      ? "bg-green-50 text-green-600 font-semibold"
                      : "text-gray-600 hover:text-gray-900 hover:bg-gray-50"
                  )}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </Link>
              );
            })}
          </div>

          {/* Right Side Actions */}
          <div className="flex gap-3 items-center">
            {/* Search Icon */}
            <Button
              variant="ghost"
              size="icon"
              className="hidden sm:flex text-gray-600 hover:text-gray-900"
            >
              <Search className="w-5 h-5" />
            </Button>

            {/* User Menu or Sign In */}
            {user ? (
              <div className="relative">
                <div className="flex items-center gap-3">
                  {/* Cart */}
                  <Link href="/cart">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="relative text-gray-600 hover:text-gray-900"
                    >
                      <ShoppingCart className="w-5 h-5" />
                      {userCart.length > 0 && (
                        <span className="absolute -top-1 -right-1 w-5 h-5 bg-green-600 text-white text-xs rounded-full flex items-center justify-center">
                          {userCart.length}
                        </span>
                      )}
                    </Button>
                  </Link>

                  {/* Favorites */}
                  <Link href="/favorites">
                    <Button
                      variant="ghost"
                      size="icon"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      <Heart className="w-5 h-5" />
                    </Button>
                  </Link>

                  {/* User Avatar */}
                  <button
                    onClick={() => setUserMenuOpen(!userMenuOpen)}
                    className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold text-sm">
                      {user.name.charAt(0).toUpperCase()}
                    </div>
                    <span className="hidden md:block text-sm font-medium text-gray-700">
                      {user.name}
                    </span>
                  </button>
                </div>

                {/* User Dropdown */}
                {userMenuOpen && (
                  <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50">
                    <Link
                      href="/dashboard"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-gray-700"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <User className="w-4 h-4" />
                      Dashboard
                    </Link>
                    <Link
                      href="/profile"
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-gray-700"
                      onClick={() => setUserMenuOpen(false)}
                    >
                      <User className="w-4 h-4" />
                      Profile
                    </Link>
                    <div className="border-t border-gray-200 my-2" />
                    <button
                      onClick={handleLogout}
                      className="flex items-center gap-2 px-4 py-2 hover:bg-gray-50 text-gray-700 w-full text-left"
                    >
                      <LogOut className="w-4 h-4" />
                      Sign Out
                    </button>
                  </div>
                )}
              </div>
            ) : (
              <Button
                variant="ghost"
                className="text-gray-700 hover:text-gray-900"
                asChild
              >
                <Link href="/sign-in">Sign In</Link>
              </Button>
            )}

            {/* Mobile Menu Button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden text-gray-600"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <div className="flex flex-col gap-2 pt-4">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-lg transition-colors",
                      isActive
                        ? "bg-green-50 text-green-600 font-semibold"
                        : "text-gray-600 hover:bg-gray-50"
                    )}
                  >
                    <Icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                );
              })}
            </div>
          </div>
        )}
      </div>

      {/* Click outside to close menus */}
      {(userMenuOpen || mobileMenuOpen) && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => {
            setUserMenuOpen(false);
            setMobileMenuOpen(false);
          }}
        />
      )}
    </nav>
  );
}
