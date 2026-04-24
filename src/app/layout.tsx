import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Yamesa: Discovery Beyond The Algorithm",
  description:
    "A curated music discovery platform for underrated and upcoming artists. Join the waitlist.",
  icons: {
    icon: "/logos/white-logo-bg-less.png",
    shortcut: "/logos/white-logo-bg-less.png",
    apple: "/logos/white-logo-bg-less.png",
  },
  openGraph: {
    title: "Yamesa: Discovery Beyond The Algorithm",
    description:
      "A curated music discovery platform for underrated and upcoming artists.",
    type: "website",
    images: ["/logos/white-logo-bg-less.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${playfair.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
