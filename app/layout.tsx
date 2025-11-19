import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SiteHeader } from "@/components/layout/site-header";
import { UserProvider } from "@/contexts/user-context";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "JDM Collective - Your Dream JDM Delivered",
  description:
    "Authentic imports. Verified sellers. Live prices. Import anything, anywhere, with confidence.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className={inter.className}>
        <UserProvider>
          <SiteHeader />
          <main className="min-h-screen">{children}</main>
        </UserProvider>
      </body>
    </html>
  );
}

