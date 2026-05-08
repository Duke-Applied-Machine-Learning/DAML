import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { BodyBackground } from "@/components/layout/BodyBackground";
import { LayoutContent } from "@/components/layout/LayoutContent";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Duke Applied Machine Learning",
  description:
    "Discover Duke Applied Machine Learning’s mission, training pathways, and student-led partnerships.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} font-sans`}>
        <BodyBackground />
        <LayoutContent>{children}</LayoutContent>
      </body>
    </html>
  );
}
