import Image from "next/image";
import { Button } from "@/components/ui/button";

export function FinalCTA() {
  return (
    <section className="relative overflow-hidden px-6 py-20 text-center sm:px-12 lg:py-32">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <Image
          alt="Study background"
          className="object-cover"
          fill
          src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80"
        />
        <div className="absolute inset-0 bg-primary/10 mix-blend-multiply" />
      </div>

      <div className="relative mx-auto max-w-4xl space-y-8 overflow-hidden rounded-3xl bg-gradient-to-br from-primary to-secondary p-12 text-white shadow-2xl">
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10" />

        <div className="relative z-10">
          <h2 className="font-extrabold text-4xl leading-tight sm:text-5xl">
            Know Your Real IELTS Band Before the Real Test.
          </h2>
          <div className="mt-8 flex justify-center">
            <Button
              className="h-16 rounded-full bg-chart-4 px-12 font-bold text-primary text-xl shadow-xl transition-all hover:-translate-y-1 hover:bg-chart-4/90 hover:shadow-2xl hover:shadow-chart-4/20"
              size="lg"
            >
              Start IELTS Mock Test
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
