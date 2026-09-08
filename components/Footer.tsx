import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-rose-100 bg-[#fafaf8]">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="font-heading text-stone-900 text-lg">Culek Art</p>
        <nav className="flex gap-6 text-xs tracking-widest uppercase text-stone-400">
          <Link href="/about" className="hover:text-rose-400 transition-colors">
            About
          </Link>
          <Link
            href="/portfolio"
            className="hover:text-rose-400 transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="/commissions"
            className="hover:text-rose-400 transition-colors"
          >
            Commissions
          </Link>
        </nav>
        <p className="text-xs text-stone-400">
          © {new Date().getFullYear()} Sharon Culek. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
