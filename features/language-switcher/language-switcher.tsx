"use client";

import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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

  const getFlagUrl = (code: string) => {
    // Mapping Next.js locales to flagcdn codes
    const flagCodes: Record<string, string> = {
      en: "gb", // UK flag for English
      id: "id", // Indonesia flag
    };
    return `https://flagcdn.com/w40/${flagCodes[code]}.png`;
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="h-8 w-8 overflow-hidden rounded-full border border-border/50 bg-background/50 p-0 shadow-sm backdrop-blur-sm transition-transform hover:scale-105 hover:bg-white"
          size="icon"
          variant="ghost"
        >
          <Image
            alt={t(`languages.${locale}`)}
            className="h-full w-full object-cover"
            height={32}
            src={getFlagUrl(locale)}
            width={32}
          />
          <span className="sr-only">{t("title")}</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-40 rounded-xl bg-background/95 p-1 backdrop-blur-md"
      >
        {routing.locales.map((cur) => (
          <DropdownMenuItem
            className={`flex cursor-pointer items-center gap-3 rounded-lg px-3 py-2 font-medium transition-colors ${
              locale === cur
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-accent hover:text-foreground"
            }`}
            key={cur}
            onClick={() => handleLanguageChange(cur)}
          >
            <div className="relative h-5 w-7 overflow-hidden rounded-sm shadow-sm">
              <Image
                alt={t(`languages.${cur}`)}
                className="object-cover"
                fill
                src={getFlagUrl(cur)}
              />
            </div>
            {t(`languages.${cur}`)}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
