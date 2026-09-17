import { createFileRoute } from "@tanstack/react-router";
import { Target, Eye } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { AppointmentCta } from "@/components/site/AppointmentCta";
import { aboutParagraphs, mission, vision, team } from "@/data/clinic";
import clinicInterior from "@/assets/clinic-interior.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Anupriya | Sakthi Dental Clinic, Hosur" },
      {
        name: "description",
        content:
          "Meet Dr. Anupriya, founder of Sakthi Dental Clinic in Hosur, and the specialist team behind 20+ years of trusted dental care.",
      },
      { property: "og:title", content: "About Dr. Anupriya | Sakthi Dental Clinic" },
      {
        property: "og:description",
        content:
          "Our story, mission, vision and the specialist dental team at Sakthi Dental Clinic, Hosur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHeader
        eyebrow="About Us"
        title="Get to Know Dr. Anupriya"
        subtitle="Your Trusted Partner in Dental Care"
      />

      <section className="mx-auto mt-16 grid max-w-7xl items-start gap-12 px-4 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:px-8">
        <div className="space-y-5">
          {aboutParagraphs.map((p) => (
            <p key={p.slice(0, 40)} className="text-base leading-relaxed text-muted-foreground">
              {p}
            </p>
          ))}
        </div>
        <div className="overflow-hidden rounded-4xl shadow-float lg:sticky lg:top-28">
          <img
            src={clinicInterior}
            alt="Reception and waiting area at Sakthi Dental Clinic"
            width={1280}
            height={960}
            loading="lazy"
            className="h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto mt-24 grid max-w-7xl gap-6 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <article className="card-soft p-8">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-lavender text-lavender-foreground">
            <Target className="size-6" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-2xl font-semibold">Our Mission</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{mission}</p>
        </article>
        <article className="card-soft p-8">
          <span className="flex size-12 items-center justify-center rounded-2xl bg-blush text-blush-foreground">
            <Eye className="size-6" aria-hidden="true" />
          </span>
          <h2 className="mt-5 text-2xl font-semibold">Our Vision</h2>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{vision}</p>
        </article>
      </section>

      <section className="mx-auto mt-24 max-w-7xl px-4 sm:px-6 lg:px-8">
        <h2 className="text-center text-2xl font-semibold sm:text-4xl">Our Team</h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-muted-foreground">
          A team of specialists covering every area of modern dentistry.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {team.map((member) => (
            <article key={member.name} className="card-soft card-soft-hover p-7 text-center">
              <span
                aria-hidden="true"
                className="mx-auto flex size-16 items-center justify-center rounded-full bg-brand-gradient font-display text-xl font-semibold text-primary-foreground"
              >
                {member.name
                  .replace("Dr. ", "")
                  .split(" ")
                  .slice(0, 2)
                  .map((w) => w[0])
                  .join("")}
              </span>
              <h3 className="mt-4 text-base font-semibold">{member.name}</h3>
              <p className="mt-1 text-sm text-primary">{member.role}</p>
            </article>
          ))}
        </div>
      </section>

      <div className="mt-24">
        <AppointmentCta title="Meet our team in person" />
      </div>
    </>
  );
}
