"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header
      className="
        fixed top-0 left-0 right-0 z-[1000]
        bg-slate-900/95 backdrop-blur
        border-b border-white/5
        shadow-[0_4px_30px_rgba(0,0,0,0.10)]
      "
    >
      <nav className="mx-auto flex max-w-[1200px] items-center justify-between px-8 py-6">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center text-[1.8rem] font-bold tracking-[-0.5px] text-white"
          onClick={() => setOpen(false)}
        >
          FAST<span className="ml-1 text-primary">LANE</span>
        </Link>

        {/* Mobile button */}
        <button
          type="button"
          className="md:hidden text-white"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {/* Simple icon (no feather dependency) */}
          <span className="text-3xl leading-none">{open ? "×" : "≡"}</span>
        </button>

        {/* Links (Desktop + Mobile) */}
        <div
          className={[
            // Base layout
            "flex gap-10",
            // Mobile overlay behavior
            "md:static md:flex-row md:items-center",
            "max-md:fixed max-md:left-0 max-md:right-0 max-md:top-[70px]",
            "max-md:flex-col max-md:items-center max-md:gap-6 max-md:py-8",
            "max-md:bg-slate-800/95 max-md:backdrop-blur",
            // Show/hide on mobile
            open ? "max-md:block" : "max-md:hidden",
          ].join(" ")}
        >
          <Link
            href="/"
            className="text-[1.05rem] font-medium text-white/80 hover:text-white transition"
            onClick={() => setOpen(false)}
          >
            Home
          </Link>

          {/* In Next, use a real route like /projects (not projects.html) */}
          <Link
            href="/projects"
            className="text-[1.05rem] font-medium text-white/80 hover:text-white transition"
            onClick={() => setOpen(false)}
          >
            Projects
          </Link>

          <a
            href="#skills"
            className="text-[1.05rem] font-medium text-white/80 hover:text-white transition"
            onClick={() => setOpen(false)}
          >
            Skills
          </a>

          <a
            href="#contact"
            className="text-[1.05rem] font-medium text-white/80 hover:text-white transition"
            onClick={() => setOpen(false)}
          >
            Contact
          </a>
        </div>
      </nav>
    </header>
  );
}