"use client";

import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Youtube,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

const footerLinks = {
  company: [
    { label: "About Us", href: "/about" },
    { label: "How It Works", href: "/how-it-works" },
    { label: "Services", href: "/service" },
    { label: "Contact", href: "/contact" },
  ],
  marketplace: [
    { label: "Browse Inventory", href: "/marketplace" },
    { label: "Live Auctions", href: "/auctions" },
    { label: "Agents", href: "/agents" },
    { label: "Community", href: "/community" },
  ],
  support: [
    { label: "Help Center", href: "/help" },
    { label: "Shipping Info", href: "/shipping" },
    { label: "Calculator", href: "/calculator" },
    { label: "FAQs", href: "/faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  { icon: Facebook, href: "#", label: "Facebook" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
];

export function SiteFooter() {
  return (
    <footer className="bg-gradient-to-br from-blue-600 to-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-4">
              <h2 className="text-2xl font-black text-white">JDM COLLECTIVE</h2>
            </Link>
            <p className="text-blue-100 mb-6 max-w-md">
              Your trusted partner for importing JDM vehicles from Japan. 
              Authentic imports, verified sellers, and transparent pricing.
            </p>
            <div className="space-y-3 mb-6">
              <div className="flex items-center gap-3 text-blue-100">
                <Mail className="w-4 h-4 text-white" />
                <span className="text-sm">support@jdmcollective.com</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <Phone className="w-4 h-4 text-white" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center gap-3 text-blue-100">
                <MapPin className="w-4 h-4 text-white" />
                <span className="text-sm">Tokyo, Japan</span>
              </div>
            </div>
            <div className="flex gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-10 h-10 rounded-full bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors text-white"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Marketplace Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Marketplace</h3>
            <ul className="space-y-3">
              {footerLinks.marketplace.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Links */}
          <div>
            <h3 className="text-white font-bold mb-4 text-sm uppercase tracking-wider">Support</h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-blue-100 hover:text-white text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-blue-100 text-sm">
              © {new Date().getFullYear()} JDM Collective. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-6">
              {footerLinks.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-blue-100 hover:text-white text-sm transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}


