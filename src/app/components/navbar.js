import type { Metadata } from "next";
import "./globals.css";

import CarCursor from "../components/CarCursor";

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
      {/* 
        <body> is the real HTML body tag for your entire app.
        Everything you want on every page goes in here.
      */}
      <body className="bg-slate-900 text-slate-100 antialiased">
        {/* Fixed navbar (global) */}
        <Navbar />

        {/* Cursor-following car (global). Remove if you only want it on certain pages. */}
        <CarCursor />

        {/* 
          Main wrapper:
          pt-[88px] pushes the page down so it doesn't hide under the fixed navbar.
          Adjust if your navbar height changes.
        */}
        <main className="pt-[88px]">{children}</main>
      </body>
    </html>
  );
}