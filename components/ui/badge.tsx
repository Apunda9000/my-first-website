import * as React from "react";

import { cn } from "@/lib/utils";

type BadgeVariant = "default" | "secondary";

type BadgeProps = React.HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

const badgeVariants: Record<BadgeVariant, string> = {
  default: "inline-flex rounded-full bg-muted px-3 py-1 text-xs font-semibold text-foreground shadow-sm",
  secondary: "inline-flex rounded-full bg-secondary/10 px-3 py-1 text-xs font-semibold text-secondary-foreground shadow-sm",
};

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return <span className={cn(badgeVariants[variant], className)} {...props} />;
}
