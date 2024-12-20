import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Josh's Portfolio Site",
  description: "Created By Josh Date",
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
