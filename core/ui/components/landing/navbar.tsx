"use client";

import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/core/ui/components/ui/button";
import { LanguageSwitcher } from "@/features/language-switcher/language-switcher";

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-border/40 border-b bg-white/80 backdrop-blur-md">
      <div className="container mx-auto flex h-16 items-center justify-between px-6 sm:px-12">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link className="flex items-center gap-2" href="/">
            <Image
              alt="Talkmate IELTS"
              className="h-8 w-8"
              height={32}
              src="/assets/logo.png"
              width={32}
            />
            <span className="font-black text-primary text-xl">
              Talkmate IELTS
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              className="font-medium text-muted-foreground text-sm transition-colors hover:text-primary"
              href={link.href}
              key={link.label}
            >
              {link.label}
            </Link>
          ))}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />
            <Button
              className="h-10 rounded-full bg-primary px-6 font-bold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:bg-primary/90"
              size="sm"
            >
              Get Started
            </Button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-4 md:hidden">
          <LanguageSwitcher />
          <button
            aria-label="Toggle menu"
            className="rounded-full p-2 text-primary transition-colors hover:bg-primary/5"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            type="button"
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full border-border/40 border-b bg-white p-6 shadow-xl md:hidden">
          <div className="flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                className="font-medium text-lg text-muted-foreground transition-colors hover:text-primary"
                href={link.href}
                key={link.label}
                onClick={() => setIsMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <Button className="mt-2 h-12 w-full rounded-full bg-primary font-bold text-white shadow-lg active:scale-95">
              Get Started
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
