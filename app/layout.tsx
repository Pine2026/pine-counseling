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
  metadataBase: new URL("https://www.pinecounseling.com"),
  title: "Pine College Counseling — Academic Curator",
  description:
    "Pine College Counseling guides high school students at every step of studying abroad. Expert-accompanied journey to the world's best universities.",
  keywords: [
    "university admissions",
    "international university consulting",
    "study abroad",
    "Ivy League",
    "Russell Group",
    "Coimbra Group",
    "university counseling",
  ],
  openGraph: {
    title: "Pine College Counseling — Academic Curator",
    description:
      "Expert guidance for high school students pursuing international university admissions.",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 1200,
        alt: "Pine College Counseling",
      },
    ],
  },
};

export const viewport: Viewport = {
  themeColor: "#2e4a3a",
  viewportFit: "cover",
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
