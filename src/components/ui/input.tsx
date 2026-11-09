import type { ComponentProps } from "react";
import { fieldControlClasses } from "@/components/ui/field-controls";
import { cn } from "@/lib/utils";

export function Input({
  className,
  type = "text",
  ...props
}: ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(fieldControlClasses, "h-11", className)}
      {...props}
    />
  );
}
