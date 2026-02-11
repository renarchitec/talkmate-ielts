"use client";

import { CheckCircle } from "lucide-react";
import { useTranslations } from "next-intl";
import { FEATURES } from "./constants";

export function Features() {
  const t = useTranslations("landing.features");

  return (
    <section className="px-6 py-16 sm:px-12 lg:py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <h2 className="font-extrabold text-4xl text-primary">{t("title")}</h2>
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((feature) => (
            <div
              className="group rounded-3xl bg-white p-8 shadow-lg ring-1 ring-black/5 transition-all hover:-translate-y-2 hover:shadow-xl"
              key={feature.key}
            >
              <div className="mb-6 inline-flex rounded-2xl bg-secondary/10 p-3 transition-colors group-hover:bg-secondary/20">
                <CheckCircle className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="mb-3 font-bold text-primary text-xl">
                {t(`items.${feature.key}.title`)}
              </h3>
              <p className="text-muted-foreground">
                {t(`items.${feature.key}.description`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
