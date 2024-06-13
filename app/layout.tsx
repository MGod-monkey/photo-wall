import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Photo Wall",
  description: "MGodmonkey's photo wall",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
