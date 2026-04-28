"use client";

import Link from "next/link";
import { useState } from "react";
import Logo from "./Logo";

const navItems = [
  { href: "/news", label: "الأخبار" },
  { href: "/forex", label: "الفوركس" },
  { href: "/stocks", label: "الأسهم" },
  { href: "/commodities", label: "السلع" },
  { href: "/analysis", label: "التحليلات" },
  { href: "/academy", label: "الأكاديمية" },
  { href: "/tools", label: "الأدوات" },
  { href: "/library", label: "المكتبة" },
  { href: "/community", label: "المجتمع" },
];

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-ink-950/80 backdrop-blur-xl">
      <div className="container-custom flex h-16 items-center justify-between gap-4">
        <Logo />

        {/* Desktop Nav */}
        <nav className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-neutral-400 transition-colors hover:bg-white/5 hover:text-neutral-50"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 lg:flex">
          <Link
            href="/vip"
            className="inline-flex items-center gap-1.5 rounded-lg border border-gold/30 bg-gold/10 px-4 py-2 text-sm font-semibold text-gold transition-all hover:border-gold/60 hover:bg-gold/15"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
              <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5zm2.7-2h8.6l.9-5.4-3.6 3.3L12 8.5l-1.6 3.4L6.8 8.6 7.7 14z" />
            </svg>
            ركن VIP
          </Link>
        </div>

        {/* Mobile burger */}
        <button
          type="button"
          aria-label="فتح القائمة"
          aria-expanded={open}
          className="grid h-10 w-10 place-items-center rounded-lg border border-white/10 bg-white/5 lg:hidden"
          onClick={() => setOpen(!open)}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            className="h-5 w-5 text-neutral-50"
          >
            {open ? (
              <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
            ) : (
              <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="border-t border-white/5 bg-ink-950 lg:hidden">
          <nav className="container-custom flex flex-col gap-1 py-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-neutral-300 transition-colors hover:bg-white/5 hover:text-neutral-50"
              >
                {item.label}
              </Link>
            ))}
            <Link
              href="/vip"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-1.5 rounded-lg border border-gold/30 bg-gold/10 px-4 py-3 text-sm font-semibold text-gold"
            >
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor">
                <path d="M5 16L3 5l5.5 5L12 4l3.5 6L21 5l-2 11H5z" />
              </svg>
              ركن VIP
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
