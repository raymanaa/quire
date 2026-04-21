"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppNav() {
  const pathname = usePathname() ?? "";
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-[6px]">
      <div className="mx-auto flex max-w-[1360px] items-center justify-between px-6 py-3 md:px-8">
        <div className="flex items-baseline gap-8">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="display text-[22px] text-ink leading-none">Quire</span>
            <span className="label !text-[9.5px]">REVIEW</span>
          </Link>
          <nav className="hidden items-baseline gap-6 text-[13.5px] md:flex">
            <Tab href="/app" active={pathname === "/app" || pathname === "/app/"}>Contracts</Tab>
            <Tab href="/playbook" active={pathname.startsWith("/playbook")}>Playbook</Tab>
            <Tab href="/security" active={pathname.startsWith("/security")}>Security</Tab>
          </nav>
        </div>
        <Link
          href="/app/new"
          className="inline-flex items-center gap-1.5 bg-ink text-paper px-3.5 py-2 text-[12.5px] rounded-[3px] hover:bg-ink-2 transition-colors"
        >
          <span>Upload a contract</span>
        </Link>
      </div>
    </header>
  );
}

function Tab({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={[
        "relative pb-[3px] transition-colors",
        active ? "text-ink" : "text-ink-3 hover:text-ink",
      ].join(" ")}
    >
      {children}
      {active && (
        <span
          aria-hidden
          className="absolute -bottom-[9px] left-0 right-0 h-[2px]"
          style={{ background: "var(--redline)" }}
        />
      )}
    </Link>
  );
}
