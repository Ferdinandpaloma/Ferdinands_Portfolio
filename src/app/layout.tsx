import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import CarCursor from "@/components/CarCursor";

export const metadata: Metadata = {
  title: "FastLane Portfolio | F1-Inspired Developer Showcase",
  description:
    "High-performance code at racing speed. Checkered flag quality with pit-stop efficiency.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="bg-slate-900 text-slate-100 antialiased">
        <Navbar />
        <CarCursor />
        <main className="pt-[88px]">{children}</main>
      </body>
    </html>
  );
}