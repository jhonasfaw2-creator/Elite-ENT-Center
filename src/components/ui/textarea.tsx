import type { ComponentProps } from "react";
import { fieldControlClasses } from "@/components/ui/field-controls";
import { cn } from "@/lib/utils";

export function Textarea({
  className,
  ...props
}: ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(fieldControlClasses, "min-h-28 resize-y py-2.5", className)}
      {...props}
    />
  );
}
