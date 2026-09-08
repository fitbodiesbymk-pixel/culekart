"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/commissions", label: "Commissions" },
];

export default function Nav() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-[#fafaf8]/90 backdrop-blur-sm border-b border-rose-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link
          href="/"
          className="font-heading text-xl tracking-wide text-stone-900"
        >
          Culek Art
        </Link>

        <nav className="hidden md:flex gap-8">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm tracking-widest uppercase transition-colors ${
                pathname === href
                  ? "text-rose-500 border-b border-rose-400"
                  : "text-stone-500 hover:text-rose-400"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <button
          className="md:hidden text-stone-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden border-t border-rose-100 bg-[#fafaf8]">
          {links.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`block px-6 py-3 text-sm tracking-widest uppercase ${
                pathname === href ? "text-rose-500" : "text-stone-500"
              }`}
            >
              {label}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
