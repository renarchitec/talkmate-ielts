"use client";

import Link from "next/link";
import { useTranslations } from "next-intl";
import { FOOTER_SECTIONS } from "./constants";

export function Footer() {
  const t = useTranslations("landing.footer");

  return (
    <footer className="border-border/40 border-t bg-white/50 px-6 py-16 text-muted-foreground backdrop-blur-xl sm:px-12">
      <div className="container mx-auto">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="col-span-1 space-y-4 md:col-span-2">
            <h3 className="font-black text-2xl text-primary">Talkmate IELTS</h3>
            <p className="max-w-xs text-sm leading-relaxed">{t("tagline")}</p>
          </div>
          {FOOTER_SECTIONS.map((section) => (
            <div key={section.titleKey}>
              <h4 className="mb-6 font-bold text-primary text-sm uppercase tracking-widest">
                {t(section.titleKey)}
              </h4>
              <ul className="space-y-4 font-medium text-sm">
                {section.links.map((link) => (
                  <li key={link.key}>
                    <Link
                      className="transition-colors hover:text-primary"
                      href={link.href}
                    >
                      {t(`links.${link.key}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 border-border/40 border-t pt-8 text-center font-medium text-xs">
          <p>{t("copyright", { year: new Date().getFullYear() })}</p>
          <p className="mt-2 opacity-60">{t("disclaimer_text")}</p>
        </div>
      </div>
    </footer>
  );
}
