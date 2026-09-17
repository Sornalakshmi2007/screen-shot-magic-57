import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { privacySections } from "@/data/clinic";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy | Sakthi Dental Clinic, Hosur" },
      {
        name: "description",
        content:
          "How Sakthi Dental Clinic, Hosur collects, uses and protects the personal information you share through this website.",
      },
      { property: "og:title", content: "Privacy Policy | Sakthi Dental Clinic" },
      {
        property: "og:description",
        content: "Our privacy practices for information shared through the Sakthi Dental Clinic website.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: PrivacyPolicy,
});

function PrivacyPolicy() {
  return (
    <>
      <PageHeader
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Your privacy matters to us as much as your smile does."
      />

      <section className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="card-soft space-y-10 p-8 sm:p-10">
          {privacySections.map((s) => (
            <article key={s.heading}>
              <h2 className="text-xl font-semibold">{s.heading}</h2>
              {s.body.map((p) => (
                <p key={p.slice(0, 40)} className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
