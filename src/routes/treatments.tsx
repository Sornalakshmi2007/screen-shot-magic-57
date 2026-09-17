import { createFileRoute } from "@tanstack/react-router";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { AppointmentCta } from "@/components/site/AppointmentCta";
import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import { treatments } from "@/data/clinic";

export const Route = createFileRoute("/treatments")({
  head: () => ({
    meta: [
      { title: "Dental Treatments in Hosur | Sakthi Dental Clinic" },
      {
        name: "description",
        content:
          "Explore all 15 treatments at Sakthi Dental Clinic, Hosur: cleaning, fillings, implants, root canal, braces, clear aligners, veneers and more.",
      },
      { property: "og:title", content: "Dental Treatments | Sakthi Dental Clinic, Hosur" },
      {
        property: "og:description",
        content:
          "Preventive, restorative, surgical, cosmetic and orthodontic dental treatments under one roof in Hosur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Treatments,
});

function Treatments() {
  return (
    <>
      <PageHeader
        eyebrow="Treatments"
        title="Complete Dental Care, Under One Roof"
        subtitle="From routine check-ups to advanced surgical and cosmetic procedures, every treatment is planned around your comfort."
      >
        <Button asChild size="lg" className="rounded-full bg-brand-gradient shadow-soft">
          <Link to="/contact">Fix an Appointment</Link>
        </Button>
      </PageHeader>

      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {treatments.map((t) => (
            <article key={t.title} className="card-soft card-soft-hover flex h-full flex-col p-7">
              <span className="w-fit rounded-full bg-lavender px-3 py-1 text-[11px] font-semibold uppercase tracking-wider text-lavender-foreground">
                {t.category}
              </span>
              <h2 className="mt-4 text-lg font-semibold">{t.title}</h2>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
              <p className="mt-5 flex items-center gap-2 border-t border-border pt-4 text-xs text-primary">
                <Check className="size-3.5" aria-hidden="true" /> Consultation available daily
              </p>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-24">
        <AppointmentCta
          title="Not sure which treatment you need?"
          text="Visit us for a consultation and our dentists will guide you through the right options."
        />
      </div>
    </>
  );
}
