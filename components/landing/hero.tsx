import Image from "next/image";
import { Button } from "@/components/ui/button";

interface HeroProps {
  headline: string;
  subheadline: string;
  primaryCtaLabel: string;
  secondaryCtaLabel?: string;
}

export function Hero({
  headline,
  subheadline,
  primaryCtaLabel,
  secondaryCtaLabel,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden px-6 py-20 lg:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2">
        <div className="space-y-8 text-center lg:text-left">
          <div className="relative z-10">
            <h1 className="bg-gradient-to-r from-primary to-secondary bg-clip-text font-extrabold text-5xl text-transparent leading-tight sm:text-7xl">
              {headline}
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-muted-foreground text-xl sm:text-2xl lg:mx-0">
              {subheadline}
            </p>
          </div>

          <div className="flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
            <Button
              className="h-14 rounded-full bg-destructive px-10 font-bold text-lg text-white shadow-xl transition-all hover:-translate-y-1 hover:bg-destructive/90 hover:shadow-2xl hover:shadow-destructive/20"
              size="lg"
            >
              {primaryCtaLabel}
            </Button>
            {secondaryCtaLabel && (
              <Button
                className="h-14 rounded-full border-2 border-primary/20 bg-white/50 px-10 font-semibold text-lg text-primary backdrop-blur-sm transition-all hover:border-primary/40 hover:bg-primary/5"
                size="lg"
                variant="outline"
              >
                {secondaryCtaLabel}
              </Button>
            )}
          </div>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none">
          <div className="absolute -inset-4 rounded-full bg-gradient-to-tr from-chart-4/30 to-primary/30 blur-3xl" />
          <div className="relative aspect-[4/5] w-full rotate-2 overflow-hidden rounded-[2.5rem] shadow-2xl ring-1 ring-black/5 transition-transform duration-500 hover:rotate-0">
            <Image
              alt="Student preparing for IELTS"
              className="object-cover"
              fill
              priority
              src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80"
            />
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-20">
        <Image
          alt="Background pattern"
          className="object-cover"
          fill
          priority
          src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&q=80"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-white" />
      </div>
    </section>
  );
}
