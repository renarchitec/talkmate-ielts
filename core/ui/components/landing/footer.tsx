import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-border/40 border-t bg-white/50 px-6 py-16 text-muted-foreground backdrop-blur-xl sm:px-12">
      <div className="container mx-auto">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="col-span-1 space-y-4 md:col-span-2">
            <h3 className="font-black text-2xl text-primary">Talkmate IELTS</h3>
            <p className="max-w-xs text-sm leading-relaxed">
              Real IELTS Practice. Real Human Scoring. Prepare with confidence.
            </p>
          </div>
          <div>
            <h4 className="mb-6 font-bold text-primary text-sm uppercase tracking-widest">
              Platform
            </h4>
            <ul className="space-y-4 font-medium text-sm">
              <li>
                <Link className="transition-colors hover:text-primary" href="#">
                  About
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-primary" href="#">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="mb-6 font-bold text-primary text-sm uppercase tracking-widest">
              Legal
            </h4>
            <ul className="space-y-4 font-medium text-sm">
              <li>
                <Link className="transition-colors hover:text-primary" href="#">
                  Terms & Privacy
                </Link>
              </li>
              <li>
                <Link className="transition-colors hover:text-primary" href="#">
                  Disclaimer
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-16 border-border/40 border-t pt-8 text-center font-medium text-xs">
          <p>
            © {new Date().getFullYear()} Talkmate IELTS. All rights reserved.
          </p>
          <p className="mt-2 opacity-60">
            This platform is not affiliated with IELTS™
          </p>
        </div>
      </div>
    </footer>
  );
}
