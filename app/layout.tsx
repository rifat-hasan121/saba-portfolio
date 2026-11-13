import type { Metadata, Viewport } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";
import { student } from "@/data/portfolioData";
import { ThemeProvider } from "@/components/ThemeProvider";

const fredoka = Fredoka({ subsets: ["latin"], variable: "--font-fredoka", display: "swap" });
const nunito = Nunito({ subsets: ["latin"], variable: "--font-nunito", display: "swap" });

export const metadata: Metadata = {
  title: `${student.name} | My Little Corner of the Internet`,
  description: `${student.name}'s portfolio: art, stories, school projects and goals of a Grade 6 explorer.`,
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#FFFDF9" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <body><ThemeProvider>{children}</ThemeProvider></body>
    </html>
  );
}
