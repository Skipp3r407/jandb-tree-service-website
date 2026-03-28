import Link from "next/link";
import { Button } from "@/components/ui/Button";

export default function NotFound() {
  return (
    <div className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center">
      <p className="text-sm font-bold uppercase tracking-widest text-brand-forest-light">
        404
      </p>
      <h1 className="font-display mt-3 text-3xl font-bold text-brand-charcoal">
        Page not found
      </h1>
      <p className="mt-4 text-brand-muted">
        That link may be outdated. Head home or call us for immediate tree
        service.
      </p>
      <div className="mt-8 flex flex-wrap justify-center gap-3">
        <Button href="/" variant="primary">
          Back to home
        </Button>
        <Button href="/contact" variant="outline">
          Contact
        </Button>
      </div>
      <p className="mt-10 text-sm">
        <Link href="/services" className="font-bold text-brand-forest hover:underline">
          Browse services
        </Link>
      </p>
    </div>
  );
}
