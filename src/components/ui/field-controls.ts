/**
 * Shared visual language for every text-like form control.
 * Keep border, focus ring, invalid, and disabled states in sync here.
 */
export const fieldControlClasses =
  "w-full rounded-control border border-input bg-background px-3 text-body text-foreground shadow-xs transition-colors placeholder:text-muted-foreground focus-visible:border-ring focus-visible:outline-none focus-visible:ring-[3px] focus-visible:ring-ring/25 aria-invalid:border-destructive aria-invalid:focus-visible:ring-destructive/20 disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground disabled:shadow-none";
