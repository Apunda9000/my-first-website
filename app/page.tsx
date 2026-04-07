"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { GitBranch, Link as LinkIcon, MessageCircle } from "lucide-react";
import { Spotlight } from "@/components/ui/spotlight";
import { ContainerTextFlip } from "@/components/ui/container-text-flip";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-background text-foreground">
      <div className="pointer-events-none absolute inset-0 [background-size:40px_40px] [background-image:linear-gradient(rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)]" />
      <Spotlight className="top-0 left-1/2 -translate-x-1/2 opacity-70" fill="white" />

      <motion.section
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative mx-auto flex min-h-screen max-w-7xl flex-col justify-center px-6 py-16 lg:flex-row lg:items-center lg:gap-16"
      >
        <div className="flex-1">
          <Badge className="mb-6 inline-flex items-center gap-2 rounded-full bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-500 ring-1 ring-emerald-500/20">
            <span className="inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500 animate-pulse" />
            Available for work
          </Badge>

          <h1 className="text-5xl font-extrabold tracking-tight text-foreground sm:text-6xl lg:text-7xl">
            Hi, I&apos;m <span className="bg-gradient-to-r from-sky-500 via-cyan-400 to-violet-500 bg-clip-text text-transparent">Belinda</span>
          </h1>

          <div className="mt-8 flex flex-col gap-4 text-lg font-medium leading-8 text-muted-foreground sm:flex-row sm:items-center">
            <span>I build</span>
            <ContainerTextFlip
              words={["Networking", "Web Development", "Linux", "Design", "CCTV", "Next.js"]}
              className="inline-block rounded-full bg-white/90 px-4 py-3 text-base text-slate-900 shadow-sm dark:bg-slate-900/80 dark:text-slate-100 md:text-xl"
              textClassName="!text-current"
              animationDuration={600}
            />
          </div>

          <p className="mt-8 max-w-xl text-base leading-8 text-muted-foreground">
            I&apos;m a creative technologist building polished web experiences, strong network solutions, and modern portfolio sites. I love solving problems with clean design, scalable code, and thoughtful interaction.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link href="/projects" className="inline-flex w-full sm:w-auto">
              <Button variant="default" className="w-full sm:w-auto">
                View My Work
              </Button>
            </Link>
            <Link href="/contact" className="inline-flex w-full sm:w-auto">
              <Button variant="outline" className="w-full sm:w-auto">
                Contact Me
              </Button>
            </Link>
          </div>

          <div className="mt-8 flex items-center gap-4 text-foreground">
            <Link href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/80 text-current transition hover:bg-primary/10">
              <GitBranch className="h-5 w-5" />
            </Link>
            <Link href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/80 text-current transition hover:bg-primary/10">
              <LinkIcon className="h-5 w-5" />
            </Link>
            <Link href="#" className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border/60 bg-background/80 text-current transition hover:bg-primary/10">
              <MessageCircle className="h-5 w-5" />
            </Link>
          </div>
        </div>

        <div className="relative mt-16 flex-1 items-center justify-center lg:mt-0 lg:flex">
          <div className="relative mx-auto flex h-[360px] w-[360px] items-center justify-center rounded-full bg-gradient-to-br from-sky-500/10 via-transparent to-violet-500/10 p-6 shadow-[0_30px_80px_rgba(56,189,248,0.18)]">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-sky-500/20 via-transparent to-violet-500/20 blur-3xl" />
            <Image
              src="/profile.jpg"
              alt="Belinda profile photo"
              width={320}
              height={320}
              className="relative rounded-full ring-2 ring-primary/20"
            />
          </div>
        </div>
      </motion.section>
    </div>
  );
}