import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export type ButtonVariant =
  | "primary"
  | "secondary"
  | "soft"
  | "ghost"
  | "destructive";

export type ButtonSize = "sm" | "md" | "lg" | "icon";

const baseClasses =
  "inline-flex shrink-0 select-none items-center justify-center gap-2 whitespace-nowrap rounded-control font-sans font-medium transition-colors focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/35 focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 aria-disabled:pointer-events-none aria-disabled:opacity-50";

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-primary-foreground shadow-xs hover:bg-primary-hover active:bg-navy-950",
  secondary:
    "border border-border-strong bg-background text-heading shadow-xs hover:bg-navy-50 active:bg-navy-100",
  soft: "bg-secondary text-secondary-foreground hover:bg-secondary-hover active:bg-azure-200",
  ghost:
    "bg-transparent text-heading hover:bg-navy-50 active:bg-navy-100",
  destructive:
    "bg-destructive text-destructive-foreground shadow-xs hover:bg-destructive-hover",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-9 px-3 text-small",
  md: "h-11 px-4 text-small",
  lg: "h-12 px-6 text-body",
  icon: "size-11",
};

export function buttonVariants({
  variant = "primary",
  size = "md",
  className,
}: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) {
  return cn(baseClasses, variantClasses[variant], sizeClasses[size], className);
}

export type ButtonProps = ComponentProps<"button"> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
};

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  ...props
}: ButtonProps) {
  return (
    <button
      type={type}
      className={buttonVariants({ variant, size, className })}
      {...props}
    />
  );
}
