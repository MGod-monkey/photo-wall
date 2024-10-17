import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "最伟大的作品",
  description: "来自杨大画师最伟大的作品展览！！！",
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
