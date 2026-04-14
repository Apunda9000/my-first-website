"use client";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { IconBrandGithub, IconBrandLinkedin, IconBrandX } from "@tabler/icons-react";
import { CheckSquare, Mail, MapPin, Menu, Moon, Sun } from "lucide-react";
import Link from "next/link";
import { useTheme } from "next-themes";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/skills", label: "Skills" },
  { href: "/projects", label: "Projects" },
  { href: "/contact", label: "Contact" },
];

const SOCIAL_LINKS = [
  { href: "https://github.com/", label: "GitHub", icon: IconBrandGithub },
  { href: "https://www.linkedin.com/", label: "LinkedIn", icon: IconBrandLinkedin },
  { href: "https://twitter.com/", label: "Twitter", icon: IconBrandX },
] as const;

const CONTACT = {
  email: "benak1811@gmail.com",
  location: "Mombasa, KE (Remote)",
  status: "open",
} as const;

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  return (
    <nav className="sticky top-0 z-50 border-b border-border/40 bg-background/80 backdrop-blur-md">
      <div className="container mx-auto flex items-center justify-between gap-4 px-4 py-3">
        <div className="flex min-w-0 items-center gap-3">
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent shrink-0"
          >
            Belinda
          </Link>

          <div className="hidden md:flex items-center gap-2">
            {SOCIAL_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <Button
                  key={item.label}
                  asChild
                  variant="outline"
                  className="h-10 rounded-xl bg-background/60"
                >
                  <Link
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2"
                  >
                    <Icon className="h-4 w-4" />
                    {item.label}
                  </Link>
                </Button>
              );
            })}
          </div>
        </div>

        <div className="hidden md:flex min-w-0 items-center gap-4">
          <div className="flex min-w-0 items-center gap-4 rounded-2xl border border-border/40 bg-background/50 px-4 py-2 text-sm text-muted-foreground">
            <div className="flex min-w-0 items-center gap-2">
              <Mail className="h-4 w-4 shrink-0 text-foreground/70" />
              <span className="truncate">{CONTACT.email}</span>
            </div>
            <div className="h-4 w-px bg-border/60" />
            <div className="flex min-w-0 items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-foreground/70" />
              <span className="truncate">{CONTACT.location}</span>
            </div>
            <div className="h-4 w-px bg-border/60" />
            <div className="flex items-center gap-2 text-foreground">
              <CheckSquare className="h-4 w-4 text-emerald-500" />
              <span className="text-muted-foreground">{CONTACT.status}</span>
            </div>
          </div>

          <Button
            variant="ghost"
            size="icon"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="shrink-0"
          >
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>

        {/* Mobile Navigation */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-4">
                <div className="space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Social
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {SOCIAL_LINKS.map((item) => {
                      const Icon = item.icon;
                      return (
                        <Button
                          key={item.label}
                          asChild
                          variant="outline"
                          className="justify-start rounded-xl"
                        >
                          <Link
                            href={item.href}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2"
                          >
                            <Icon className="h-4 w-4" />
                            {item.label}
                          </Link>
                        </Button>
                      );
                    })}
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">
                    Info
                  </div>
                  <div className="rounded-2xl border border-border/40 bg-background/40 px-4 py-3 text-sm text-muted-foreground space-y-2">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-foreground/70" />
                      <span className="truncate">{CONTACT.email}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-foreground/70" />
                      <span className="truncate">{CONTACT.location}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckSquare className="h-4 w-4 text-emerald-500" />
                      <span className="text-muted-foreground">{CONTACT.status}</span>
                    </div>
                  </div>
                </div>

                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="text-lg font-medium text-foreground hover:text-primary transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                ))}
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                  className="self-start"
                >
                  <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                  <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                  <span className="sr-only">Toggle theme</span>
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}