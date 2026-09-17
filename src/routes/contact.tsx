import { createFileRoute } from "@tanstack/react-router";
import { useState, type FormEvent } from "react";
import { MapPin, Mail, Phone, Clock, CheckCircle2 } from "lucide-react";
import { PageHeader } from "@/components/site/PageHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { clinic } from "@/data/clinic";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact & Appointments | Sakthi Dental Clinic, Hosur" },
      {
        name: "description",
        content:
          "Reach Sakthi Dental Clinic at SBM Layout, Anthivadi, Hosur. Call +91 9862890897, email info@sakthidentalclinic.in, open all days 9 AM to 7 PM.",
      },
      { property: "og:title", content: "Contact Sakthi Dental Clinic, Hosur" },
      {
        property: "og:description",
        content: "Address, phone, email and clinic timings for Sakthi Dental Clinic in Hosur.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Contact,
});

type Values = { name: string; email: string; phone: string; message: string };
type Errors = Partial<Record<keyof Values, string>>;

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = "Please enter your name.";
  if (!values.email.trim()) errors.email = "Please enter your email address.";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(values.email.trim()))
    errors.email = "Please enter a valid email address.";
  if (!values.phone.trim()) errors.phone = "Please enter your phone number.";
  else if (!/^[+\d][\d\s-]{7,15}$/.test(values.phone.trim()))
    errors.phone = "Please enter a valid phone number.";
  return errors;
}

function Contact() {
  const [values, setValues] = useState<Values>({ name: "", email: "", phone: "", message: "" });
  const [errors, setErrors] = useState<Errors>({});
  const [submitted, setSubmitted] = useState(false);

  const set = (key: keyof Values) => (e: { target: { value: string } }) => {
    setValues((v) => ({ ...v, [key]: e.target.value }));
    setErrors((prev) => ({ ...prev, [key]: undefined }));
  };

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    const next = validate(values);
    setErrors(next);
    if (Object.keys(next).length === 0) {
      setSubmitted(true);
      setValues({ name: "", email: "", phone: "", message: "" });
    }
  };

  const details = [
    { Icon: MapPin, label: "Address", value: clinic.address },
    { Icon: Mail, label: "Email", value: clinic.email, href: `mailto:${clinic.email}` },
    { Icon: Phone, label: "Phone", value: clinic.phones.join(" / ") },
    { Icon: Clock, label: "Timings", value: clinic.timings },
  ];

  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Fix an Appointment"
        subtitle="Send us your details and we will get back to you to confirm a convenient time."
      />

      <section className="mx-auto mt-16 grid max-w-7xl gap-8 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <div className="card-soft p-7 sm:p-9">
          <h2 className="text-2xl font-semibold">We would love to hear from you</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Fields marked with * are required.
          </p>

          {submitted ? (
            <div
              role="status"
              className="mt-6 flex items-start gap-3 rounded-2xl bg-lavender px-5 py-4 text-sm text-lavender-foreground"
            >
              <CheckCircle2 className="mt-0.5 size-5 shrink-0" aria-hidden="true" />
              <span>
                Thank you. Your details look good. Please also call us on {clinic.phones[0]} to
                confirm your appointment.
              </span>
            </div>
          ) : null}

          <form noValidate onSubmit={onSubmit} className="mt-7 space-y-5">
            <div className="space-y-2">
              <Label htmlFor="name">Name *</Label>
              <Input
                id="name"
                value={values.name}
                onChange={set("name")}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "name-error" : undefined}
                placeholder="Your full name"
                className="rounded-xl"
              />
              {errors.name ? (
                <p id="name-error" className="text-xs text-destructive">
                  {errors.name}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email">Email *</Label>
              <Input
                id="email"
                type="email"
                value={values.email}
                onChange={set("email")}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                placeholder="you@example.com"
                className="rounded-xl"
              />
              {errors.email ? (
                <p id="email-error" className="text-xs text-destructive">
                  {errors.email}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Phone Number *</Label>
              <Input
                id="phone"
                type="tel"
                value={values.phone}
                onChange={set("phone")}
                aria-invalid={!!errors.phone}
                aria-describedby={errors.phone ? "phone-error" : undefined}
                placeholder="+91 98765 43210"
                className="rounded-xl"
              />
              {errors.phone ? (
                <p id="phone-error" className="text-xs text-destructive">
                  {errors.phone}
                </p>
              ) : null}
            </div>

            <div className="space-y-2">
              <Label htmlFor="message">Your Message</Label>
              <Textarea
                id="message"
                rows={4}
                value={values.message}
                onChange={set("message")}
                placeholder="Tell us briefly what you need help with (optional)"
                className="rounded-xl"
              />
            </div>

            <Button type="submit" size="lg" className="w-full rounded-full bg-brand-gradient">
              Submit
            </Button>
          </form>
        </div>

        <div className="card-soft h-fit p-7 sm:p-9">
          <h2 className="text-2xl font-semibold">Reach us</h2>
          <ul className="mt-7 space-y-6">
            {details.map(({ Icon, label, value, href }) => (
              <li key={label} className="flex gap-4">
                <span className="flex size-12 shrink-0 items-center justify-center rounded-2xl bg-sky text-sky-foreground">
                  <Icon className="size-5" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {label}
                  </p>
                  {href ? (
                    <a href={href} className="mt-1 block text-sm text-foreground hover:text-primary">
                      {value}
                    </a>
                  ) : (
                    <p className="mt-1 text-sm text-foreground">{value}</p>
                  )}
                </div>
              </li>
            ))}
          </ul>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border">
            <iframe
              title="Map showing Sakthi Dental Clinic location in Hosur"
              src="https://www.google.com/maps?q=SBM%20Layout%2C%20Anthivadi%2C%20Hosur%2C%20Tamil%20Nadu%20635109&output=embed"
              loading="lazy"
              className="h-64 w-full border-0"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </>
  );
}
