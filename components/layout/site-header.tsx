"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { useUser } from "@/contexts/user-context";
import {
  Search,
  User,
  LogOut,
  ShoppingCart,
  Heart,
  Menu,
  X,
  ArrowRight,
  ChevronRight,
} from "lucide-react";

const navItems = [
  { href: "/", label: "HOME" },
  { href: "/about", label: "ABOUT" },
  { href: "/marketplace", label: "STORE" },
  { href: "/auctions", label: "AUCTIONS" },
  { href: "/community", label: "COMMUNITY" },
  { href: "/agents", label: "AGENTS" },
  { href: "/service", label: "SERVICE" },
  { href: "/contact", label: "CONTACT" },
];

export function SiteHeader() {
  const [isSticky, setIsSticky] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      router.push(`/marketplace?search=${encodeURIComponent(searchTerm.trim())}`);
      setSearchOpen(false);
      setMobileMenuOpen(false);
      setSearchTerm("");
    }
  };

  return (
    <>
      <nav
        className={cn(
          "fixed w-full z-50 transition-all duration-300 bg-white/95 backdrop-blur-md",
          isSticky ? "py-3 shadow-lg" : "py-5"
        )}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Hamburger Menu */}
            <Button
              variant="ghost"
              size="icon"
              className="text-gray-600 hover:text-gray-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </Button>

            {/* Logo - Centered */}
            <Link href="/" className="flex items-center">
              <div className="text-3xl font-black text-red-600 leading-tight">
                JDM Bridge
              </div>
            </Link>

            {/* Shopping Cart */}
            <Link href="/cart">
              <Button
                variant="ghost"
                size="icon"
                className="relative text-gray-600 hover:text-gray-900"
              >
                <ShoppingCart className="w-6 h-6" />
                {userCart.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-red-600 text-white text-xs rounded-full flex items-center justify-center">
                    {userCart.length}
                  </span>
                )}
              </Button>
            </Link>
          </div>
        </div>
      </nav>

      {/* Slide-out Mobile Menu */}
      <div
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-80 bg-white shadow-2xl transform transition-transform duration-300 ease-in-out",
          mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          {/* Header with Close Button */}
          <div className="flex items-center justify-between p-4 border-b border-gray-200">
            <h2 className="text-lg font-bold text-gray-900">Menu</h2>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setMobileMenuOpen(false)}
              className="text-gray-600"
            >
              <X className="w-6 h-6" />
            </Button>
          </div>

          {/* Search Bar */}
          <div className="p-4 border-b border-gray-200">
            <form onSubmit={handleSearch} className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-11 border-gray-300 focus:border-gray-400 text-black placeholder:text-gray-400 bg-white"
              />
            </form>
          </div>

          {/* Menu Items */}
          <div className="flex-1 overflow-y-auto">
            <nav className="py-2">
              {navItems.map((item, index) => {
                const isActive = pathname === item.href || pathname.startsWith(item.href + "/");
                return (
                  <div key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={cn(
                        "flex items-center justify-between px-4 py-4 text-gray-700 hover:bg-gray-50 transition-colors",
                        isActive && "bg-gray-50 font-semibold"
                      )}
                    >
                      <span className="text-sm uppercase tracking-wide">{item.label}</span>
                      {(item.href === "/marketplace" || item.href === "/community" || item.href === "/agents") && (
                        <ChevronRight className="w-4 h-4 text-gray-400" />
                      )}
                    </Link>
                    {index < navItems.length - 1 && (
                      <div className="border-t border-gray-200" />
                    )}
                  </div>
                );
              })}
            </nav>
          </div>

          {/* User Section at Bottom */}
          {user && (
            <div className="p-4 border-t border-gray-200">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center text-white font-semibold">
                  {user.name.charAt(0).toUpperCase()}
                </div>
                <div>
                  <p className="text-sm font-medium text-gray-900">{user.name}</p>
                  <p className="text-xs text-gray-500">{user.email}</p>
                </div>
              </div>
              <Button
                variant="outline"
                className="w-full justify-start"
                onClick={handleLogout}
              >
                <LogOut className="w-4 h-4 mr-2" />
                Sign Out
              </Button>
            </div>
          )}
        </div>
      </div>

      {/* Overlay */}
      {mobileMenuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileMenuOpen(false)}
        />
      )}

      {/* Search Modal (Desktop) */}
      {searchOpen && (
        <div className="fixed inset-0 z-50 flex items-start justify-center pt-32 px-4">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => {
              setSearchOpen(false);
              setSearchTerm("");
            }}
          />
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border-2 border-gray-200 p-6">
            <form onSubmit={handleSearch} className="space-y-4">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                <Input
                  type="text"
                  placeholder="Search vehicles by make, model, or year..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-12 h-14 border-2 border-gray-200 focus:border-blue-500 text-lg text-black placeholder:text-gray-400 bg-white"
                  autoFocus
                />
              </div>
              <div className="flex gap-3">
                <Button
                  type="submit"
                  className="flex-1 bg-blue-600 hover:bg-blue-700 h-12"
                  size="lg"
                >
                  Search
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  type="button"
                  variant="outline"
                  onClick={() => {
                    setSearchOpen(false);
                    setSearchTerm("");
                  }}
                  className="h-12"
                >
                  Cancel
                </Button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
