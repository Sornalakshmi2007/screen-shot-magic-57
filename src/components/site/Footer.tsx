import { Link } from "@tanstack/react-router";
import { Instagram, Facebook, Youtube, MapPin, Mail, Phone } from "lucide-react";
import { clinic, coreTreatments } from "@/data/clinic";
import { ToothIcon } from "./ToothIcon";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-secondary/60">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 sm:px-6 md:grid-cols-2 lg:grid-cols-4 lg:px-8">
        <div>
          <div className="flex items-center gap-2.5">
            <span className="flex size-10 items-center justify-center rounded-2xl bg-brand-gradient text-primary-foreground">
              <ToothIcon className="size-5" />
            </span>
            <span className="font-display text-lg font-semibold">{clinic.name}</span>
          </div>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li className="flex gap-2.5">
              <MapPin className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>{clinic.address}</span>
            </li>
            <li className="flex gap-2.5">
              <Mail className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <a className="hover:text-primary" href={`mailto:${clinic.email}`}>
                {clinic.email}
              </a>
            </li>
            <li className="flex gap-2.5">
              <Phone className="mt-0.5 size-4 shrink-0 text-primary" aria-hidden="true" />
              <span>
                {clinic.phones.map((p, i) => (
                  <span key={p}>
                    <a className="hover:text-primary" href={`tel:${p.replace(/\s/g, "")}`}>
                      {p}
                    </a>
                    {i === 0 ? " / " : ""}
                  </span>
                ))}
              </span>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Quick Links
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            <li>
              <Link to="/" className="hover:text-primary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-primary">
                About
              </Link>
            </li>
            <li>
              <Link to="/treatments" className="hover:text-primary">
                Treatments
              </Link>
            </li>
            <li>
              <Link to="/privacy-policy" className="hover:text-primary">
                Privacy Policy
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Key Treatments
          </h3>
          <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
            {coreTreatments.map((t) => (
              <li key={t.title}>
                <Link to="/treatments" className="hover:text-primary">
                  {t.title}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-sm font-semibold uppercase tracking-wider text-foreground">
            Clinic Timings
          </h3>
          <p className="mt-5 text-sm text-muted-foreground">{clinic.timings}</p>
          <div className="mt-6 flex gap-3">
            {[
              { label: "Instagram", Icon: Instagram },
              { label: "Facebook", Icon: Facebook },
              { label: "YouTube", Icon: Youtube },
            ].map(({ label, Icon }) => (
              <a
                key={label}
                href="#"
                aria-label={label}
                className="flex size-10 items-center justify-center rounded-full border border-border bg-card text-muted-foreground transition-colors hover:bg-lavender hover:text-lavender-foreground"
              >
                <Icon className="size-4" aria-hidden="true" />
              </a>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <p className="mx-auto max-w-7xl px-4 py-6 text-center text-xs text-muted-foreground sm:px-6 lg:px-8">
          © {new Date().getFullYear()} {clinic.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
