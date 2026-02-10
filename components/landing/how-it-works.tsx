import Image from "next/image";

interface Step {
  title: string;
  description: string;
}

interface HowItWorksProps {
  steps: Step[];
}

export function HowItWorks({ steps }: HowItWorksProps) {
  // Illustrations for each step (using placeholders or relevant icons/images)
  const stepImages = [
    "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80&w=400", // Register/Select test
    "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=400", // Take simulation
    "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=400", // Auto scoring
    "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=400", // Human review
    "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=400", // Results
  ];

  return (
    <section className="bg-white/50 px-6 py-16 sm:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-extrabold text-4xl text-primary">How It Works</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-2xl"
              key={step.title}
            >
              {/* Image Header */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  alt={step.title}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  fill
                  src={stepImages[index % stepImages.length]}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-chart-4 font-black text-white shadow-lg">
                  {index + 1}
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-3 font-bold text-primary text-xl">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
