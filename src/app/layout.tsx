import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Elite ENT Center",
  description: "Ear, nose, and throat care in Addis Ababa, Ethiopia.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
