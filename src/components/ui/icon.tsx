import type { LucideIcon, LucideProps } from "lucide-react";
import { cn } from "@/lib/utils";

export type IconSize = "sm" | "md" | "lg" | "xl";

const iconSizes: Record<IconSize, number> = {
  sm: 16,
  md: 20,
  lg: 24,
  xl: 32,
};

export type IconProps = Omit<LucideProps, "size" | "strokeWidth"> & {
  icon: LucideIcon;
  size?: IconSize;
  /** Provide only when the icon carries meaning on its own. */
  label?: string;
};

/**
 * All product icons come from Lucide at a 1.5 stroke weight.
 * Decorative icons are hidden from assistive technology by default.
 */
export function Icon({
  icon: Glyph,
  size = "md",
  label,
  className,
  ...props
}: IconProps) {
  return (
    <Glyph
      size={iconSizes[size]}
      strokeWidth={1.5}
      aria-hidden={label ? undefined : true}
      aria-label={label}
      role={label ? "img" : undefined}
      className={cn("shrink-0", className)}
      {...props}
    />
  );
}
