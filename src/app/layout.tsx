import type { Metadata } from "next";
import { EB_Garamond, Jost } from "next/font/google";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import MouseGradient from "@/components/MouseGradient";

const garamond = EB_Garamond({
  subsets: ["latin-ext"],
  variable: "--font-garamond",
  display: "swap",
});
const jost = Jost({
  subsets: ["latin-ext"],
  variable: "--font-jost",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Piotr Karczewski • Portfolio",
  description:
    "Full-stack web developer with 3+ years of experience creating and maintaining data-driven single-page client apps, micro-frontend widgets and interactive web experiences.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-pt-24 overflow-x-hidden scroll-smooth">
      <body
        className={`${garamond.variable} ${jost.variable} ${GeistSans.variable} mx-auto grid grid-cols-12 grid-rows-[min-content_auto] gap-x-5 p-[4.2vw] pb-16 pt-0`}
      >
        <div className="grain absolute inset-0 overflow-hidden"></div>
        {children}
        <MouseGradient />
      </body>
    </html>
  );
}
