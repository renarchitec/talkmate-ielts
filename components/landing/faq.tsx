import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
}

export function FAQ({ items }: FAQProps) {
  return (
    <section className="px-6 py-16 sm:px-12 lg:py-24">
      <div className="mx-auto max-w-3xl">
        <div className="mb-16 text-center">
          <h2 className="font-extrabold text-4xl text-primary">FAQ</h2>
        </div>
        <Accordion className="space-y-4" collapsible type="single">
          {items.map((item, index) => (
            <AccordionItem
              className="rounded-2xl border border-border/50 bg-white px-6 shadow-sm transition-all hover:shadow-md"
              key={item.question}
              value={`item-${index}`}
            >
              <AccordionTrigger className="py-6 text-left font-bold text-lg text-primary hover:text-primary/80 hover:no-underline">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="pb-6 text-base text-muted-foreground leading-relaxed">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
