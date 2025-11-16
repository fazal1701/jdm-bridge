import Link from "next/link";

export function SiteFooter() {
  return (
    <footer className="bg-gray-950 border-t border-gray-800 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-red-600 to-red-900 rounded-lg flex items-center justify-center">
                <span className="text-white font-black">◆</span>
              </div>
              <span className="text-white font-bold text-xl">JDM Collective</span>
            </div>
            <p className="text-gray-400 text-sm">
              The operating system for JDM imports.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/browse" className="hover:text-white transition">
                  Browse
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/sellers" className="hover:text-white transition">
                  For Sellers
                </Link>
              </li>
              <li>
                <Link href="/community" className="hover:text-white transition">
                  Community
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li>
                <Link href="/about" className="hover:text-white transition">
                  About
                </Link>
              </li>
              <li>
                <Link href="/blog" className="hover:text-white transition">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white transition">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-white font-bold mb-4">Follow Us</h4>
            <div className="flex gap-4">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Instagram
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                TikTok
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition"
              >
                Twitter
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center text-gray-500 text-sm">
          <p>© 2024 JDM Collective. All rights reserved.</p>
          <p className="mt-4">
            🔒 Secured by Stripe | 🏦 Escrow by Altoo | ⭐ Rated 4.8/5.0
          </p>
        </div>
      </div>
    </footer>
  );
}

