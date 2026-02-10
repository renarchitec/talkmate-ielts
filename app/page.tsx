import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-8 bg-background p-8 text-foreground">
      <div className="flex flex-col items-center gap-4 text-center">
        <Image
          alt="Next.js logo"
          className="dark:invert"
          height={37}
          priority
          src="/next.svg"
          width={180}
        />
        <h1 className="font-bold text-4xl tracking-tight">TalkMate IELTS</h1>
        <p className="text-muted-foreground">
          Shadcn UI is now installed and configured.
        </p>
      </div>

      <div className="flex gap-4">
        <Button>Default Button</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>
        <Button variant="destructive">Destructive</Button>
      </div>
    </div>
  );
}
