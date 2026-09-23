import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import type { ButtonHTMLAttributes, ReactNode } from "react";

import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";

const iconCircleVariants = cva(
  "inline-flex shrink-0 items-center justify-center rounded-full font-semibold transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:size-[45%]",
  {
    variants: {
      variant: {
        "glass-light": "border border-foreground/10 bg-card/60 text-foreground shadow-soft backdrop-blur-md hover:-translate-y-0.5 hover:border-foreground/20 hover:bg-card/85",
        "glass-dark": "border border-ink-foreground/25 bg-ink-foreground/10 text-ink-foreground backdrop-blur-md hover:bg-ink-foreground/18",
        solid: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline: "border border-border bg-background text-foreground hover:border-foreground/25 hover:bg-muted",
      },
      size: { sm: "size-9", md: "size-11", lg: "size-[3.125rem]" },
    },
    defaultVariants: { variant: "glass-light", size: "md" },
  },
);

type IconCircleButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof iconCircleVariants> & {
    label: string;
    asChild?: boolean;
    children: ReactNode;
  };

export function IconCircleButton({ label, asChild = false, variant, size, className, children, ...props }: IconCircleButtonProps) {
  const Comp = asChild ? Slot : "button";
  return (
    <TooltipProvider delayDuration={250}>
      <Tooltip>
        <TooltipTrigger asChild>
          <Comp aria-label={label} className={cn(iconCircleVariants({ variant, size }), className)} {...props}>{children}</Comp>
        </TooltipTrigger>
        <TooltipContent>{label}</TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}