"use client";

import Link from "next/link";

export function MarketingNav() {
  return (
    <header className="border-b border-line bg-paper">
      <div className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-4 md:px-8">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="display text-[26px] text-ink leading-none">Quire</span>
          <span className="label !text-[9.5px] hidden sm:inline">v0.9</span>
        </Link>
        <nav className="hidden items-center gap-7 text-[13.5px] text-ink-2 md:flex">
          <Link href="/app" className="hover:text-ink transition-colors">Contracts</Link>
          <Link href="/playbook" className="hover:text-ink transition-colors">Playbook</Link>
          <Link href="/security" className="hover:text-ink transition-colors">Security</Link>
        </nav>
        <Link
          href="/app/new"
          className="inline-flex items-center gap-1.5 bg-ink text-paper px-4 py-2 text-[12.5px] rounded-[3px] hover:bg-ink-2 transition-colors"
        >
          <span>Upload a contract</span>
        </Link>
      </div>
    </header>
  );
}
