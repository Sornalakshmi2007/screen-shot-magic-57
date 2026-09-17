import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { Menu, X, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ToothIcon } from "./ToothIcon";

const links = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/treatments", label: "Treatments" },
  { to: "/faqs", label: "FAQs" },
  { to: "/contact", label: "Contact" },
] as const;

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/70 bg-background/85 backdrop-blur-md">
      <nav
        aria-label="Main navigation"
        className="mx-auto flex h-18 max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
      >
        <Link to="/" className="flex items-center gap-2.5" onClick={() => setOpen(false)}>
          <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-gradient text-primary-foreground">
            <ToothIcon className="size-5" />
          </span>
          <span className="leading-tight">
            <span className="block font-display text-base font-semibold tracking-tight sm:text-lg">
              Sakthi Dental Clinic
            </span>
            <span className="block text-[11px] text-muted-foreground sm:text-xs">
              Hosur, Tamil Nadu
            </span>
          </span>
        </Link>

        <ul className="hidden items-center gap-1 lg:flex">
          {links.map((l) => (
            <li key={l.to}>
              <Link
                to={l.to}
                activeOptions={{ exact: l.to === "/" }}
                className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-lavender hover:text-lavender-foreground [&.active]:bg-lavender [&.active]:text-lavender-foreground"
              >
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-2 lg:flex">
          <Button asChild variant="ghost" size="sm" className="rounded-full">
            <a href="tel:+919862890897">
              <Phone className="size-4" aria-hidden="true" />
              +91 98628 90897
            </a>
          </Button>
          <Button asChild className="rounded-full bg-brand-gradient shadow-soft">
            <Link to="/contact">Fix an Appointment</Link>
          </Button>
        </div>

        <button
          type="button"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-11 items-center justify-center rounded-2xl border border-border text-foreground transition-colors hover:bg-lavender lg:hidden"
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </nav>

      {open ? (
        <div className="border-t border-border bg-background lg:hidden">
          <ul className="mx-auto flex max-w-7xl flex-col gap-1 px-4 py-4 sm:px-6">
            {links.map((l) => (
              <li key={l.to}>
                <Link
                  to={l.to}
                  activeOptions={{ exact: l.to === "/" }}
                  onClick={() => setOpen(false)}
                  className="block rounded-xl px-4 py-3 text-base font-medium text-foreground transition-colors hover:bg-lavender [&.active]:bg-lavender [&.active]:text-lavender-foreground"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Button asChild className="w-full rounded-full bg-brand-gradient">
                <Link to="/contact" onClick={() => setOpen(false)}>
                  Fix an Appointment
                </Link>
              </Button>
            </li>
          </ul>
        </div>
      ) : null}
    </header>
  );
}
