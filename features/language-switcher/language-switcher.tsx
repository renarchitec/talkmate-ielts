"use client";

import { Globe } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "@/i18n/navigation";
import { routing } from "@/i18n/routing";

export function LanguageSwitcher() {
  const t = useTranslations("language_switcher");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const handleLanguageChange = (nextLocale: string) => {
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <div className="flex flex-col gap-4 rounded-lg border p-4 shadow-sm">
      <div className="flex items-center gap-2">
        <Globe className="h-4 w-4" />
        <h2 className="font-semibold">{t("title")}</h2>
      </div>
      <p className="text-muted-foreground text-sm">{t("description")}</p>
      <div className="flex flex-wrap gap-2">
        {routing.locales.map((cur) => (
          <Button
            key={cur}
            onClick={() => handleLanguageChange(cur)}
            size="sm"
            variant={locale === cur ? "default" : "outline"}
          >
            {t(`languages.${cur}`)}
          </Button>
        ))}
      </div>
      <div className="mt-2 text-muted-foreground text-xs">
        {t("current_language")}:{" "}
        <span className="font-medium font-mono">{locale}</span>
      </div>
    </div>
  );
}
