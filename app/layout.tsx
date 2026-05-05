import type { Metadata } from "next";
import { Inconsolata, Montserrat, Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";

const inconsolata = Inconsolata({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-inconsolata",
});

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "900"],
  variable: "--font-montserrat",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["500"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Victory Chapel Christian Center - Panacan",
  description: "Where everybody is somebody and Jesus Christ is Lord",
  icons: {
    icon: "/logo.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${inconsolata.variable} ${montserrat.variable} ${inter.variable} font-[var(--font-inconsolata)] antialiased overflow-x-hidden`}
      >
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
