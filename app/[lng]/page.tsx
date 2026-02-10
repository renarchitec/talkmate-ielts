import Image from "next/image";
import { useTranslations } from "next-intl";
import { Button } from "@/components/ui/button";
import { LanguageSwitcher } from "@/features/language-switcher/language-switcher";

export default function Home() {
  const t = useTranslations("translation");

  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background p-8 text-foreground">
      <div className="absolute top-4 right-4">
        {/* We can pass lng prop if needed, or LanguageSwitcher can get it from hook */}
        <LanguageSwitcher />
      </div>

      <div className="flex flex-col items-center gap-4 text-center">
        <Image
          alt="Next.js logo"
          className="dark:invert"
          height={37}
          priority
          src="/next.svg"
          width={180}
        />
        <h1 className="font-bold text-4xl tracking-tight">{t("title")}</h1>
        <p className="text-muted-foreground">{t("description")}</p>
      </div>

      <div className="flex gap-4">
        <Button>{t("buttons.default")}</Button>
        <Button variant="secondary">{t("buttons.secondary")}</Button>
        <Button variant="outline">{t("buttons.outline")}</Button>
        <Button variant="destructive">{t("buttons.destructive")}</Button>
      </div>
    </div>
  );
}
