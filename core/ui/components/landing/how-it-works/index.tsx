"use client";

import Image from "next/image";
import { useTranslations } from "next-intl";
import { STEPS } from "./constants";

export function HowItWorks() {
  const t = useTranslations("landing.how_it_works");

  return (
    <section className="bg-white/50 px-6 py-16 sm:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-extrabold text-4xl text-primary">{t("title")}</h2>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {STEPS.map((step, index) => (
            <div
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-white shadow-xl ring-1 ring-black/5 transition-all hover:-translate-y-1 hover:shadow-2xl"
              key={step.key}
            >
              {/* Image Header */}
              <div className="relative h-48 w-full overflow-hidden bg-gray-100">
                <Image
                  alt={t(`steps.${step.key}.title`)}
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  fill
                  src={step.image}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-chart-4 font-black text-white shadow-lg">
                  {index + 1}
                </div>
              </div>

              <div className="p-6">
                <h3 className="mb-3 font-bold text-primary text-xl">
                  {t(`steps.${step.key}.title`)}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t(`steps.${step.key}.description`)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
