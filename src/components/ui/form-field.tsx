import type { ReactNode } from "react";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export type FormFieldProps = {
  /** Must match the id of the control passed as children. */
  id: string;
  label: string;
  children: ReactNode;
  hint?: string;
  error?: string;
  required?: boolean;
  className?: string;
};

/**
 * Standard field anatomy. Hints and errors render with predictable ids:
 * `${id}-hint` and `${id}-error`. Pass the active one to the control's
 * `aria-describedby` so assistive technology reads it.
 */
export function FormField({
  id,
  label,
  children,
  hint,
  error,
  required = false,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      <Label htmlFor={id}>
        {label}
        {required ? (
          <span className="ml-1 text-destructive" aria-hidden="true">
            *
          </span>
        ) : null}
      </Label>
      {children}
      {error ? (
        <p id={`${id}-error`} className="text-small text-destructive">
          {error}
        </p>
      ) : hint ? (
        <p id={`${id}-hint`} className="text-small text-muted-foreground">
          {hint}
        </p>
      ) : null}
    </div>
  );
}
