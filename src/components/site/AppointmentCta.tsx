import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { clinic } from "@/data/clinic";

export function AppointmentCta({
  title = "Ready to care for your smile?",
  text = "Book a consultation with our team and get a treatment plan tailored to you.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="overflow-hidden rounded-4xl bg-brand-gradient px-6 py-14 text-center text-primary-foreground shadow-float sm:px-12">
        <h2 className="text-2xl font-semibold sm:text-3xl">{title}</h2>
        <p className="mx-auto mt-3 max-w-xl text-sm opacity-90 sm:text-base">{text}</p>
        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Button asChild size="lg" variant="secondary" className="w-full rounded-full sm:w-auto">
            <Link to="/contact">Fix an Appointment</Link>
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="w-full rounded-full border-primary-foreground/40 bg-transparent text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground sm:w-auto"
          >
            <a href={`tel:${clinic.phones[0]?.replace(/\s/g, "")}`}>Call {clinic.phones[0]}</a>
          </Button>
        </div>
      </div>
    </section>
  );
}
