import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/utils/utils";

interface Plan {
  name: string;
  price: string;
  features: string[];
  highlighted?: boolean;
}

interface PricingProps {
  plans: Plan[];
}

export function Pricing({ plans }: PricingProps) {
  return (
    <section className="bg-primary/5 px-6 py-16 sm:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-extrabold text-4xl text-primary">
            Pricing Preview
          </h2>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {plans.map((plan) => (
            <div
              className={cn(
                "flex flex-col rounded-3xl p-8 transition-all hover:-translate-y-2",
                plan.highlighted
                  ? "scale-105 bg-white shadow-2xl ring-4 ring-chart-4/20"
                  : "bg-white/50 shadow-lg ring-1 ring-black/5"
              )}
              key={plan.name}
            >
              <div className="mb-8">
                <h3 className="font-bold text-primary text-xl">{plan.name}</h3>
                <div className="mt-4 flex items-baseline text-primary">
                  <span className="font-black text-5xl tracking-tight">
                    {plan.price}
                  </span>
                </div>
              </div>
              <ul className="mb-8 flex-1 space-y-4">
                {plan.features.map((feature) => (
                  <li className="flex items-start" key={feature}>
                    <div className="mr-3 rounded-full bg-chart-4/20 p-1">
                      <Check className="h-4 w-4 flex-shrink-0 text-chart-4-foreground" />
                    </div>
                    <span className="font-medium text-muted-foreground">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                className={cn(
                  "h-12 w-full rounded-xl font-bold text-base shadow-lg transition-transform active:scale-95",
                  plan.highlighted
                    ? "bg-destructive text-white shadow-destructive/20 hover:bg-destructive/90"
                    : "bg-primary text-white shadow-primary/20 hover:bg-primary/90"
                )}
              >
                Choose Plan
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
