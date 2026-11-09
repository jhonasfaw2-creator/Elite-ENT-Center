import { ChevronDown } from "lucide-react";
import type { ComponentProps } from "react";
import { fieldControlClasses } from "@/components/ui/field-controls";
import { cn } from "@/lib/utils";

export function Select({
  className,
  children,
  ...props
}: ComponentProps<"select">) {
  return (
    <div className="relative">
      <select
        className={cn(
          fieldControlClasses,
          "h-11 cursor-pointer appearance-none pr-10",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown
        aria-hidden="true"
        strokeWidth={1.5}
        className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted-foreground"
      />
    </div>
  );
}
