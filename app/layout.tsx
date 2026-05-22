import type { Metadata, Viewport } from "next";
import { Space_Grotesk, DM_Sans } from "next/font/google";
import { LanguageProvider } from "@/contexts/LanguageContext";
import ScrollToTop from "@/components/ScrollToTop";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pine Counseling — Academic Curator",
  description:
    "Pine Counseling guides Turkish high school students at every step of studying abroad. Expert-accompanied journey to the world's best universities.",
  keywords: [
    "university admissions",
    "international university consulting",
    "Turkey study abroad",
    "Ivy League",
    "Russell Group",
    "Coimbra Group",
    "university counseling",
  ],
  openGraph: {
    title: "Pine Counseling — Academic Curator",
    description:
      "Expert guidance for Turkish high school students pursuing international university admissions.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#2e4a3a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable}`}>
      <body className="font-body bg-bg-primary antialiased">
        <LanguageProvider>
          <ScrollToTop />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
