import { CheckCircle } from "lucide-react";

export function Features() {
  const features = [
    {
      title: "Full IELTS Mock Test",
      description:
        "Experience the complete test format under timed conditions.",
    },
    {
      title: "Practice per skill",
      description:
        "Focus on specific areas like Reading, Listening, Writing, or Speaking.",
    },
    {
      title: "Human-reviewed Writing & Speaking",
      description:
        "Get accurate scores and detailed feedback from real examiners.",
    },
    {
      title: "Detailed band score & feedback",
      description:
        "Understand your strengths and weaknesses with comprehensive reports.",
    },
    {
      title: "Progress tracking",
      description: "Monitor your improvement over time with intuitive charts.",
    },
  ];

  return (
    <section className="px-6 py-16 sm:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-extrabold text-4xl text-primary">Key Features</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <div
              className="group rounded-3xl bg-white p-8 shadow-lg ring-1 ring-black/5 transition-all hover:-translate-y-2 hover:shadow-xl"
              key={feature.title}
            >
              <div className="mb-6 inline-flex rounded-2xl bg-secondary/10 p-3 transition-colors group-hover:bg-secondary/20">
                <CheckCircle className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="mb-3 font-bold text-primary text-xl">
                {feature.title}
              </h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
