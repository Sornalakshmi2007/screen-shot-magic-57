import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { AppointmentCta } from "@/components/site/AppointmentCta";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "@/data/clinic";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title: "Dental FAQs | Sakthi Dental Clinic, Hosur" },
      {
        name: "description",
        content:
          "Answers to common dental questions about tooth pain, scaling, root canals, braces, implants, sensitivity and oral hygiene from Sakthi Dental Clinic, Hosur.",
      },
      { property: "og:title", content: "Dental FAQs | Sakthi Dental Clinic" },
      {
        property: "og:description",
        content:
          "14 frequently asked dental questions answered by the dentists at Sakthi Dental Clinic, Hosur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Faqs,
});

function Faqs() {
  return (
    <>
      <PageHeader
        eyebrow="FAQs"
        title="Frequently Asked Questions"
        subtitle="Clear answers to the questions our patients ask most often."
      />

      <section className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:px-8">
        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((item, i) => (
            <AccordionItem
              key={item.q}
              value={`faq-${i}`}
              className="card-soft border-b-0 px-6 last:border-b-0"
            >
              <AccordionTrigger className="text-left text-base font-semibold hover:no-underline">
                {item.q}
              </AccordionTrigger>
              <AccordionContent className="text-sm leading-relaxed text-muted-foreground">
                {item.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <div className="mt-24">
        <AppointmentCta
          title="Still have a question?"
          text="Talk to our dentists directly and get advice specific to your situation."
        />
      </div>
    </>
  );
}
