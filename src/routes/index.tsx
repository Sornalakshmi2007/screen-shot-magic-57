import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ShieldCheck,
  Stethoscope,
  HeartHandshake,
  Sparkles,
  MapPin,
  CircleParking,
  Clock,
  Car,
  Accessibility,
  Quote,
  ArrowRight,
  Star,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AppointmentCta } from "@/components/site/AppointmentCta";
import { whyChoose, coreTreatments, testimonials, facilities, clinic } from "@/data/clinic";
import heroImage from "@/assets/hero-clinic.jpg";

const icons: Record<string, LucideIcon> = {
  ShieldCheck,
  Stethoscope,
  HeartHandshake,
  Sparkles,
  MapPin,
  CircleParking,
  Clock,
  Car,
  Accessibility,
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Sakthi Dental Clinic | Family Dentist in Hosur, Tamil Nadu" },
      {
        name: "description",
        content:
          "Specialized dental care for women, children and families in Hosur. Braces, implants, root canals, cleaning and cosmetic dentistry led by Dr. Anupriya.",
      },
      { property: "og:title", content: "Sakthi Dental Clinic | Family Dentist in Hosur" },
      {
        property: "og:description",
        content:
          "Compassionate, expert-led dental services in Hosur, Tamil Nadu. Fix an appointment with Dr. Anupriya and team.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      {/* Hero */}
      <section className="bg-hero-soft">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-4 py-14 sm:px-6 sm:py-20 lg:grid-cols-2 lg:px-8 lg:py-24">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <Sparkles className="size-3.5" aria-hidden="true" /> 20+ years in Hosur
            </span>
            <h1 className="mt-6 text-3xl font-semibold leading-[1.1] sm:text-5xl lg:text-[3.4rem]">
              Specialized Dental Care for{" "}
              <span className="text-brand-gradient">Women, Children &amp; Families</span>
            </h1>
            <p className="mt-5 max-w-xl text-base text-muted-foreground sm:text-lg">
              Experience compassionate, expert-led dental services tailored to your needs, all in a
              modern and welcoming environment.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="rounded-full bg-brand-gradient shadow-soft">
                <Link to="/contact">Fix an Appointment</Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="rounded-full">
                <a href={`tel:${clinic.phones[0]?.replace(/\s/g, "")}`}>
                  Emergency Dental Support
                </a>
              </Button>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {[
                { k: "20+", v: "Years of care" },
                { k: "15", v: "Treatments" },
                { k: "9 AM–7 PM", v: "All days" },
              ].map((s) => (
                <div key={s.v}>
                  <dt className="font-display text-xl font-semibold text-primary sm:text-2xl">
                    {s.k}
                  </dt>
                  <dd className="text-xs text-muted-foreground sm:text-sm">{s.v}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="relative">
            <div className="overflow-hidden rounded-4xl shadow-float">
              <img
                src={heroImage}
                alt="Dentist at Sakthi Dental Clinic treating a smiling patient"
                width={1536}
                height={1152}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-4 hidden items-center gap-3 rounded-3xl border border-border bg-card px-5 py-4 shadow-soft sm:flex">
              <div className="flex size-11 items-center justify-center rounded-2xl bg-blush text-blush-foreground">
                <HeartHandshake className="size-5" aria-hidden="true" />
              </div>
              <div>
                <p className="text-sm font-semibold">Gentle, family-first care</p>
                <p className="text-xs text-muted-foreground">Led by Dr. Anupriya</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Assurance banner */}
      <section className="mx-auto mt-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-4xl border border-border bg-lavender px-6 py-10 text-center shadow-soft sm:px-12">
          <p className="font-display text-2xl font-semibold text-lavender-foreground sm:text-3xl">
            You are always in safe hands.
          </p>
          <p className="mt-2 text-base text-muted-foreground sm:text-lg">
            We are ready to help, anytime.
          </p>
        </div>
      </section>

      {/* Why choose */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold sm:text-4xl">
          Why Choose Sakthi Dental Clinic?
        </h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {whyChoose.map((item) => {
            const Icon = icons[item.icon] ?? Sparkles;
            return (
              <article key={item.title} className="card-soft card-soft-hover p-7">
                <span className="flex size-12 items-center justify-center rounded-2xl bg-sky text-sky-foreground">
                  <Icon className="size-6" aria-hidden="true" />
                </span>
                <h3 className="mt-5 text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </article>
            );
          })}
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-2xl font-semibold sm:text-4xl">Explore Our Services</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Preventive, restorative and cosmetic dentistry delivered with care and modern equipment.
          </p>
        </div>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {coreTreatments.map((t, i) => (
            <article key={t.title} className="card-soft card-soft-hover p-7">
              <span className="font-display text-sm font-semibold text-primary/70">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-lg font-semibold">{t.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{t.text}</p>
            </article>
          ))}
        </div>
        <div className="mt-10 text-center">
          <Button asChild size="lg" variant="outline" className="rounded-full">
            <Link to="/treatments">
              View Full List of Treatments
              <ArrowRight className="size-4" aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>

      {/* Testimonials */}
      <section className="mt-24 bg-secondary/60 py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2 className="text-center text-2xl font-semibold sm:text-4xl">What Our Patients Say</h2>
          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="card-soft card-soft-hover flex h-full flex-col p-7">
                <Quote className="size-7 text-primary/40" aria-hidden="true" />
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-sm font-semibold">{t.name}</span>
                  <span className="flex gap-0.5" aria-label="5 out of 5 stars">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className="size-3.5 fill-current text-accent-foreground"
                        aria-hidden="true"
                      />
                    ))}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities */}
      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold sm:text-4xl">Clinic Facilities</h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {facilities.map((f) => {
            const Icon = icons[f.icon] ?? MapPin;
            return (
              <div
                key={f.title}
                className="card-soft card-soft-hover flex items-center gap-4 p-6"
              >
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-lavender text-lavender-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <p className="text-sm font-medium sm:text-base">{f.title}</p>
              </div>
            );
          })}
        </div>
      </section>

      <div className="mt-24">
        <AppointmentCta />
      </div>
    </>
  );
}
