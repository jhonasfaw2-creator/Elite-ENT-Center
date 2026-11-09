import type { Metadata } from "next";
import {
  CalendarCheck,
  Ear,
  HeartPulse,
  MapPin,
  Phone,
  Plus,
  ShieldCheck,
  Stethoscope,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { FormField } from "@/components/ui/form-field";
import { Icon } from "@/components/ui/icon";
import { Input } from "@/components/ui/input";
import { Select } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Design System — Elite ENT Center",
  description:
    "Tokens, typography, and components for the Elite ENT Center design system.",
  robots: { index: false, follow: false },
};

const colorGroups = [
  {
    name: "Navy",
    role: "Brand, headings, primary actions",
    swatches: [
      { step: "50", hex: "#F4F7FA", className: "bg-navy-50", light: false },
      { step: "100", hex: "#E8EEF4", className: "bg-navy-100", light: false },
      { step: "200", hex: "#CFDCEA", className: "bg-navy-200", light: false },
      { step: "300", hex: "#A9C1D8", className: "bg-navy-300", light: false },
      { step: "400", hex: "#7C9DBC", className: "bg-navy-400", light: false },
      { step: "500", hex: "#557C9E", className: "bg-navy-500", light: true },
      { step: "600", hex: "#3C6284", className: "bg-navy-600", light: true },
      { step: "700", hex: "#2D4D69", className: "bg-navy-700", light: true },
      { step: "800", hex: "#1F3950", className: "bg-navy-800", light: true },
      { step: "900", hex: "#142A3D", className: "bg-navy-900", light: true },
      { step: "950", hex: "#0B1B29", className: "bg-navy-950", light: true },
    ],
  },
  {
    name: "Azure",
    role: "Links, focus, informational emphasis",
    swatches: [
      { step: "50", hex: "#F1F8FD", className: "bg-azure-50", light: false },
      { step: "100", hex: "#E1F0FB", className: "bg-azure-100", light: false },
      { step: "200", hex: "#C3E0F5", className: "bg-azure-200", light: false },
      { step: "300", hex: "#93C9EC", className: "bg-azure-300", light: false },
      { step: "400", hex: "#5CA9DC", className: "bg-azure-400", light: false },
      { step: "500", hex: "#3389C4", className: "bg-azure-500", light: false },
      { step: "600", hex: "#246FA6", className: "bg-azure-600", light: true },
      { step: "700", hex: "#1F5A88", className: "bg-azure-700", light: true },
      { step: "800", hex: "#1E4A6E", className: "bg-azure-800", light: true },
      { step: "900", hex: "#1D3E5B", className: "bg-azure-900", light: true },
    ],
  },
  {
    name: "Mist",
    role: "Neutral text, borders, quiet surfaces",
    swatches: [
      { step: "50", hex: "#F8FAFB", className: "bg-mist-50", light: false },
      { step: "100", hex: "#F1F4F7", className: "bg-mist-100", light: false },
      { step: "200", hex: "#E3E9EF", className: "bg-mist-200", light: false },
      { step: "300", hex: "#CBD5DF", className: "bg-mist-300", light: false },
      { step: "400", hex: "#94A6B8", className: "bg-mist-400", light: false },
      { step: "500", hex: "#6B7F93", className: "bg-mist-500", light: true },
      { step: "600", hex: "#4F6377", className: "bg-mist-600", light: true },
      { step: "700", hex: "#3B4C5D", className: "bg-mist-700", light: true },
      { step: "800", hex: "#273544", className: "bg-mist-800", light: true },
      { step: "900", hex: "#182331", className: "bg-mist-900", light: true },
    ],
  },
];

const semanticColors = [
  { name: "background", className: "bg-background", note: "Page surface" },
  { name: "foreground", className: "bg-foreground", note: "Body text" },
  { name: "heading", className: "bg-heading", note: "Display headings" },
  { name: "primary", className: "bg-primary", note: "Primary actions" },
  { name: "secondary", className: "bg-secondary", note: "Quiet actions" },
  { name: "muted", className: "bg-muted", note: "Subtle fills" },
  { name: "accent", className: "bg-accent", note: "Informational" },
  { name: "destructive", className: "bg-destructive", note: "Errors" },
  { name: "success-soft", className: "bg-success-soft", note: "Confirmed" },
  { name: "warning-soft", className: "bg-warning-soft", note: "Attention" },
  { name: "border", className: "bg-border", note: "Dividers" },
  { name: "ring", className: "bg-ring", note: "Focus ring" },
];

const typeSpecimens = [
  {
    token: "text-display",
    meta: "Source Serif 4 · 600 · fluid 44–68px",
    className: "font-display text-display text-heading",
    sample: "Specialist ear, nose, and throat care",
  },
  {
    token: "text-h1",
    meta: "Source Serif 4 · 600 · fluid 36–48px",
    className: "text-h1",
    sample: "Clear answers, considered care",
  },
  {
    token: "text-h2",
    meta: "Source Serif 4 · 600 · fluid 28–36px",
    className: "text-h2",
    sample: "A calm environment for every visit",
  },
  {
    token: "text-h3",
    meta: "Source Serif 4 · 600 · 24px",
    className: "text-h3",
    sample: "Meet your clinician",
  },
  {
    token: "text-h4",
    meta: "Source Serif 4 · 600 · 20px",
    className: "text-h4",
    sample: "Appointment details",
  },
  {
    token: "text-lead",
    meta: "Inter · 400 · 18px / 1.65",
    className: "text-lead",
    sample:
      "Diagnosis and treatment for adults and children, delivered with precision and care.",
  },
  {
    token: "text-body",
    meta: "Inter · 400 · 16px / 1.65",
    className: "text-body",
    sample:
      "Body copy stays at a comfortable measure of 65 to 75 characters. It carries clinical explanations, patient instructions, and most interface text.",
  },
  {
    token: "text-small",
    meta: "Inter · 400 · 14px / 1.55",
    className: "text-small",
    sample: "Supporting labels, helper text, and interface copy.",
  },
  {
    token: "text-caption",
    meta: "Inter · 400 · 12px / 1.5",
    className: "text-caption",
    sample: "Room 204 · Second floor · East wing",
  },
  {
    token: "text-eyebrow",
    meta: "Inter · 600 · 12px · tracked 0.08em",
    className: "text-eyebrow uppercase text-accent-foreground",
    sample: "Ear, nose & throat",
  },
];

const spacingSteps = [
  { token: "1", px: 4 },
  { token: "2", px: 8 },
  { token: "3", px: 12 },
  { token: "4", px: 16 },
  { token: "6", px: 24 },
  { token: "8", px: 32 },
  { token: "12", px: 48 },
  { token: "16", px: 64 },
];

const radiusSteps = [
  { token: "rounded-control", value: "8px", className: "rounded-control" },
  { token: "rounded-card", value: "12px", className: "rounded-card" },
  { token: "rounded-pill", value: "Full", className: "rounded-pill" },
];

const shadowSteps = [
  { token: "shadow-xs", use: "Inputs, flat cards", className: "shadow-xs" },
  { token: "shadow-sm", use: "Raised cards", className: "shadow-sm" },
  { token: "shadow-md", use: "Menus, hover states", className: "shadow-md" },
  { token: "shadow-lg", use: "Dialogs, overlays", className: "shadow-lg" },
];

const breakpoints = [
  { token: "sm", width: "640px", use: "Two-column forms, larger gutters" },
  { token: "md", width: "768px", use: "Side-by-side content, wider cards" },
  { token: "lg", width: "1024px", use: "Three-column grids, inline navigation" },
  { token: "xl", width: "1280px", use: "Full page width, generous whitespace" },
  { token: "2xl", width: "1536px", use: "Maximum container, no further growth" },
];

const icons = [
  { icon: Stethoscope, label: "Stethoscope" },
  { icon: Ear, label: "Ear" },
  { icon: HeartPulse, label: "Heart pulse" },
  { icon: ShieldCheck, label: "Shield check" },
  { icon: CalendarCheck, label: "Calendar check" },
  { icon: MapPin, label: "Map pin" },
  { icon: Phone, label: "Phone" },
  { icon: Stethoscope, label: "Stethoscope" },
];

function Section({
  id,
  index,
  title,
  description,
  children,
}: {
  id: string;
  index: string;
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-8 border-t border-border py-section"
    >
      <div className="max-w-narrow">
        <p className="text-eyebrow uppercase text-accent-foreground">{index}</p>
        <h2 id={`${id}-title`} className="mt-3 text-h2">
          {title}
        </h2>
        <p className="mt-3 text-lead text-muted-foreground">{description}</p>
      </div>
      <div className="mt-10">{children}</div>
    </section>
  );
}

export default function DesignSystemPage() {
  return (
    <main className="page-container pb-section-lg">
      <header className="py-section">
        <p className="text-eyebrow uppercase text-muted-foreground">
          Elite ENT Center
        </p>
        <h1 className="mt-4 text-display">Design system</h1>
        <p className="mt-5 max-w-prose text-lead text-muted-foreground">
          A restrained foundation for medical communication: navy for authority,
          white for clarity, and a single clinical blue for interaction. Every
          page should feel calm, legible, and precise.
        </p>
        <p className="mt-8 text-small text-muted-foreground">
          Version 1.0 · November 2026 · Light theme
        </p>
      </header>

      <Section
        id="color"
        index="01 — Color"
        title="A quiet palette with one clear accent"
        description="White carries the page. Navy anchors headings and primary actions. Azure is reserved for links, focus, and informational emphasis. Status colors appear only when they communicate status."
      >
        <div className="space-y-10">
          {colorGroups.map((group) => (
            <div key={group.name}>
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-h4">{group.name}</h3>
                <p className="text-small text-muted-foreground">{group.role}</p>
              </div>
              <ul className="mt-4 grid grid-cols-4 gap-2 sm:grid-cols-6 lg:grid-cols-11">
                {group.swatches.map((swatch) => (
                  <li
                    key={swatch.step}
                    className="overflow-hidden rounded-md border border-border"
                  >
                    <div
                      className={cn(
                        "flex h-16 items-end p-2",
                        swatch.className,
                        swatch.light ? "text-white/85" : "text-navy-900/70",
                      )}
                    >
                      <span className="text-caption">{swatch.step}</span>
                    </div>
                    <div className="bg-background px-2 py-1.5">
                      <span className="text-caption text-muted-foreground">
                        {swatch.hex}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h3 className="text-h4">Semantic roles</h3>
            <p className="mt-1 text-small text-muted-foreground">
              Components reference these names, never raw palette values.
            </p>
            <ul className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
              {semanticColors.map((color) => (
                <li
                  key={color.name}
                  className="rounded-card border border-border p-3"
                >
                  <div
                    className={cn(
                      "h-10 rounded-md border border-black/5",
                      color.className,
                    )}
                  />
                  <p className="mt-3 text-small font-medium text-heading">
                    {color.name}
                  </p>
                  <p className="text-caption text-muted-foreground">
                    {color.note}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        id="typography"
        index="02 — Typography"
        title="Serif authority, sans-serif clarity"
        description="Source Serif 4 is used only for display headings, where it adds a measured, established tone. Inter carries body copy, labels, buttons, and data. Numbers in clinical records use tabular figures."
      >
        <div className="divide-y divide-border border-y border-border">
          {typeSpecimens.map((specimen) => (
            <div
              key={specimen.token}
              className="grid gap-3 py-6 md:grid-cols-[13rem_1fr] md:gap-8"
            >
              <div>
                <code className="text-caption font-medium text-heading">
                  {specimen.token}
                </code>
                <p className="mt-1 text-caption text-muted-foreground">
                  {specimen.meta}
                </p>
              </div>
              <p className={specimen.className}>{specimen.sample}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="spacing"
        index="03 — Spacing & layout"
        title="A 4px rhythm from control to page"
        description="Component interiors use the 4px scale. Page rhythm uses two fluid section tokens, and the page shell uses fluid gutters. Nothing is positioned by eye."
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-h4">Spacing scale</h3>
            <div className="mt-5 space-y-3">
              {spacingSteps.map((step) => (
                <div key={step.token} className="flex items-center gap-4">
                  <code className="w-16 shrink-0 text-caption text-muted-foreground">
                    {step.token}
                  </code>
                  <div
                    className="h-2 rounded-pill bg-azure-500/70"
                    style={{ width: step.px }}
                  />
                  <span className="text-caption text-muted-foreground">
                    {step.px}px
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-h4">Layout tokens</h3>
            <dl className="mt-5 divide-y divide-border border-y border-border">
              {[
                ["px-gutter", "20px → 40px fluid"],
                ["py-section", "64px → 96px fluid"],
                ["py-section-lg", "80px → 128px fluid"],
                ["max-w-page", "1200px page shell"],
                ["max-w-narrow", "672px reading column"],
                ["max-w-prose", "65 characters"],
              ].map(([token, value]) => (
                <div
                  key={token}
                  className="flex items-baseline justify-between gap-4 py-3"
                >
                  <dt className="text-small font-medium text-heading">
                    {token}
                  </dt>
                  <dd className="text-caption text-muted-foreground">{value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section
        id="borders"
        index="04 — Borders, radii & shadows"
        title="Visible structure, minimal ornament"
        description="One-pixel hairlines define most structure. Radii are restrained and consistent: controls at 8px, cards at 12px, pills only for small indicators. Elevation is subtle and navy-tinted."
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-h4">Radii</h3>
            <div className="mt-5 grid grid-cols-3 gap-4">
              {radiusSteps.map((radius) => (
                <div key={radius.token} className="text-center">
                  <div
                    className={cn(
                      "mx-auto size-20 border border-navy-200 bg-navy-50",
                      radius.className,
                    )}
                  />
                  <code className="mt-3 block text-caption text-heading">
                    {radius.token}
                  </code>
                  <p className="text-caption text-muted-foreground">
                    {radius.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-h4">Shadows</h3>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {shadowSteps.map((shadow) => (
                <div
                  key={shadow.token}
                  className={cn(
                    "rounded-card border border-border bg-card p-4",
                    shadow.className,
                  )}
                >
                  <code className="text-caption font-medium text-heading">
                    {shadow.token}
                  </code>
                  <p className="mt-1 text-caption text-muted-foreground">
                    {shadow.use}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="buttons"
        index="05 — Buttons"
        title="One primary action at a time"
        description="Buttons are 36, 44, or 48 pixels tall; the default 44px meets the minimum touch target. Primary is navy, secondary is outlined, soft is a quiet blue fill, and destructive is reserved for irreversible actions."
      >
        <div className="space-y-8">
          <div>
            <h3 className="text-h4">Variants</h3>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Button>Book appointment</Button>
              <Button variant="secondary">View directions</Button>
              <Button variant="soft">
                <Icon icon={CalendarCheck} />
                Add to calendar
              </Button>
              <Button variant="ghost">Cancel</Button>
              <Button variant="destructive">Delete record</Button>
            </div>
          </div>

          <div>
            <h3 className="text-h4">Sizes</h3>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Button size="sm">Small · 36px</Button>
              <Button size="md">Default · 44px</Button>
              <Button size="lg">Large · 48px</Button>
              <Button size="icon" aria-label="Add appointment">
                <Icon icon={Plus} />
              </Button>
            </div>
          </div>

          <div>
            <h3 className="text-h4">Disabled</h3>
            <div className="mt-4 flex flex-wrap items-center gap-3">
              <Button disabled>Book appointment</Button>
              <Button variant="secondary" disabled>
                View directions
              </Button>
            </div>
          </div>
        </div>
      </Section>

      <Section
        id="forms"
        index="06 — Form controls"
        title="Labels that stay visible, errors that explain"
        description="Every control is 44px tall with a 3:1 border against white. Labels sit above the control, hints and errors below. Focus is a soft azure ring; invalid fields switch to the destructive color and expose aria-invalid."
      >
        <div className="grid gap-6 rounded-card border border-border bg-card p-6 md:grid-cols-2">
          <FormField
            id="ds-name"
            label="Full name"
            hint="As it appears on your medical record."
          >
            <Input
              id="ds-name"
              placeholder="Selam Tesfaye"
              aria-describedby="ds-name-hint"
            />
          </FormField>

          <FormField id="ds-email" label="Email" error="Enter a valid email address.">
            <Input
              id="ds-email"
              type="email"
              defaultValue="selam@"
              aria-invalid="true"
              aria-describedby="ds-email-error"
            />
          </FormField>

          <FormField
            id="ds-reason"
            label="Reason for visit"
            hint="Include when symptoms started and whether they affect one or both sides."
            className="md:col-span-2"
          >
            <Textarea
              id="ds-reason"
              placeholder="Describe your symptoms"
              aria-describedby="ds-reason-hint"
            />
          </FormField>

          <FormField id="ds-location" label="Preferred location">
            <Select id="ds-location" defaultValue="bole">
              <option value="bole">Bole, Addis Ababa</option>
              <option value="kazanchis">Kazanchis, Addis Ababa</option>
            </Select>
          </FormField>

          <div className="flex items-end">
            <label
              htmlFor="ds-consent"
              className="flex items-start gap-3 text-small text-foreground"
            >
              <Checkbox id="ds-consent" className="mt-0.5" />
              <span>I agree to be contacted about this appointment.</span>
            </label>
          </div>

          <div className="flex flex-wrap items-center gap-3 md:col-span-2">
            <Button type="submit">Request appointment</Button>
            <Button variant="ghost">Clear form</Button>
          </div>
        </div>
      </Section>

      <Section
        id="cards"
        index="07 — Cards"
        title="Grouped information with one purpose"
        description="Cards use a white surface, a hairline border, 12px radius, and a 24px interior. They hold one topic and should not nest. Elevation stays at shadow-xs unless the card is genuinely raised above the page."
      >
        <div className="grid gap-6 lg:grid-cols-2">
          <Card>
            <CardHeader>
              <CardTitle>Consultation follow-up</CardTitle>
              <CardDescription>
                Wednesday, 18 November · 10:30 AM
              </CardDescription>
            </CardHeader>
            <CardContent>
              <dl className="space-y-3 text-small">
                <div className="flex justify-between gap-4 border-b border-border pb-3">
                  <dt className="text-muted-foreground">Clinician</dt>
                  <dd className="font-medium text-heading">Dr. Hana Bekele</dd>
                </div>
                <div className="flex justify-between gap-4 border-b border-border pb-3">
                  <dt className="text-muted-foreground">Department</dt>
                  <dd className="font-medium text-heading">
                    Otolaryngology
                  </dd>
                </div>
                <div className="flex justify-between gap-4">
                  <dt className="text-muted-foreground">Location</dt>
                  <dd className="font-medium text-heading">
                    Bole · Room 204
                  </dd>
                </div>
              </dl>
            </CardContent>
            <CardFooter>
              <Button>Confirm</Button>
              <Button variant="secondary">Reschedule</Button>
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Clinic hours</CardTitle>
              <CardDescription>
                Routine and urgent ear, nose, and throat care.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3 text-small">
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">Monday to Friday</span>
                <span className="font-medium tabular-nums text-heading">
                  8:00 AM – 6:00 PM
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">Saturday</span>
                <span className="font-medium tabular-nums text-heading">
                  9:00 AM – 1:00 PM
                </span>
              </div>
              <div className="flex items-center justify-between gap-4">
                <span className="text-muted-foreground">Sunday</span>
                <span className="font-medium text-heading">Closed</span>
              </div>
              <p className="flex items-start gap-2 rounded-control bg-accent p-3 text-caption text-accent-foreground">
                <Icon icon={MapPin} size="sm" className="mt-0.5" />
                Bole Road, Addis Ababa. Free parking is available on site.
              </p>
            </CardContent>
          </Card>
        </div>
      </Section>

      <Section
        id="icons"
        index="08 — Icons"
        title="A single outline family"
        description="Icons come from Lucide at a 1.5 stroke weight. Use 16px inline with small text, 20px with controls, and 24px for navigation or section markers. Icons support comprehension; they never replace a label."
      >
        <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
          {icons.map((item, index) => (
            <div
              key={`${item.label}-${index}`}
              className="flex flex-col items-center gap-3 rounded-card border border-border p-5 text-navy-700"
            >
              <Icon icon={item.icon} size="lg" />
              <span className="text-caption text-muted-foreground">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </Section>

      <Section
        id="responsive"
        index="09 — Responsive rules"
        title="Calm at every width"
        description="Layouts reorganize, they do not shrink. Display type is fluid so headings never need separate mobile sizes. Controls keep a 44px target, and body copy never falls below 16px."
      >
        <div className="grid gap-10 lg:grid-cols-2">
          <div>
            <h3 className="text-h4">Breakpoints</h3>
            <dl className="mt-4 divide-y divide-border border-y border-border">
              {breakpoints.map((breakpoint) => (
                <div
                  key={breakpoint.token}
                  className="grid grid-cols-[3rem_5rem_1fr] items-baseline gap-3 py-3"
                >
                  <dt>
                    <code className="text-caption text-heading">
                      {breakpoint.token}
                    </code>
                  </dt>
                  <dd className="text-caption tabular-nums text-muted-foreground">
                    {breakpoint.width}
                  </dd>
                  <dd className="text-small text-foreground">
                    {breakpoint.use}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
          <div>
            <h3 className="text-h4">Rules</h3>
            <ul className="mt-4 space-y-3 text-small text-foreground">
              {[
                "Use the page-container utility for every page shell; it supplies the max width and fluid gutters.",
                "Start single-column. Introduce grids at sm and md, not below.",
                "Keep one primary action visible on small screens; move secondary actions below or into a menu.",
                "Do not hide essential clinical information behind hover or horizontal scroll.",
                "Maintain 44px touch targets and 8px minimum spacing between adjacent controls.",
                "Cap body copy at 65 to 75 characters and never justify text.",
                "Prefer two columns for forms and cards at md, three only at lg and above.",
              ].map((rule) => (
                <li key={rule} className="flex gap-3">
                  <span
                    aria-hidden="true"
                    className="mt-2 size-1.5 shrink-0 rounded-pill bg-azure-500"
                  />
                  <span>{rule}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <footer className="border-t border-border pt-8">
        <p className="text-caption text-muted-foreground">
          Internal reference. Not linked from public navigation. Tokens live in
          src/app/globals.css; usage rules live in docs/design-system.md.
        </p>
      </footer>
    </main>
  );
}
