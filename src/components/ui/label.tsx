import type { ComponentProps } from "react";
import { cn } from "@/lib/utils";

export function Label({ className, ...props }: ComponentProps<"label">) {
  return (
    <label
      className={cn("block text-small font-medium text-heading", className)}
      {...props}
    />
  );
}
