"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { BentoGrid, BentoGridItem } from "@/components/ui/bento-grid";
import { Button } from "@/components/ui/button";
import {
  ExternalLink,
  LayoutTemplate,
  Newspaper,
  UtensilsCrossed,
} from "lucide-react";

const projects = [
  {
    title: "Poster design for facebook",
    description: "A cheerful design for a C.B.O",
    image: "/1.png",
    link: "https://canva.link/q8zuvlsa0saw7p3",
    icon: <LayoutTemplate className="h-4 w-4 text-primary" />,
  },
  {
    title: "Magazine",
    description: "Bringing light about the C.B.O in detail",
    image: "/2.png",
    link: "https://canva.link/48gbrat41jk8r4b",
    icon: <Newspaper className="h-4 w-4 text-primary" />,
  },
  {
    title: "fast food menu",
    description: "a brief menu for Mama's restaurant",
    image: "/3.png",
    link: "https://canva.link/nmi3my52ci7wgvk",
    icon: <UtensilsCrossed className="h-4 w-4 text-primary" />,
  },
];

export default function ProjectsSection() {
  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="mx-auto w-full max-w-7xl px-6 pb-24"
    >
      <div className="mb-10 text-center">
        <h2 className="text-3xl font-bold tracking-tight">My Projects</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Selected creative and design work.
        </p>
      </div>

      <BentoGrid>
        {projects.map((project, index) => (
          <BentoGridItem
            key={project.title}
            className={index === 2 ? "md:col-span-2" : ""}
            header={
              <div className="relative h-48 w-full overflow-hidden rounded-lg">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover/bento:scale-[1.03]"
                />
              </div>
            }
            title={project.title}
            description={
              <div className="space-y-4">
                <p className="text-xs font-normal text-neutral-600 dark:text-neutral-300">
                  {project.description}
                </p>
                <Button variant="outline" asChild className="h-8 px-3 text-xs">
                  <a href={project.link} target="_blank" rel="noreferrer">
                    View Project
                    <ExternalLink className="ml-1.5 h-3.5 w-3.5" />
                  </a>
                </Button>
              </div>
            }
            icon={project.icon}
          />
        ))}
      </BentoGrid>
    </motion.section>
  );
}
