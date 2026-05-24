"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

const DEFAULT_PATTERN = "/images/cta-pattern.png";

interface CTABannerProps {
  bgPattern?: string;
}

export default function CTABanner({ bgPattern = DEFAULT_PATTERN }: CTABannerProps) {
  const { lang } = useLanguage();
  const t = translations[lang].ctaBanner;

  return (
    <section
      className="relative overflow-hidden px-6 md:px-[200px]"
      style={{ paddingTop: 52, paddingBottom: 52 }}
    >
      <div className="absolute inset-0 bg-brand" />
      <div
        className="absolute inset-0 opacity-[0.15] pointer-events-none"
        style={{
          backgroundImage: `url('${bgPattern}')`,
          backgroundSize: "1024px 1024px",
          backgroundPosition: "top left",
        }}
      />

      <div className="relative z-10 flex flex-col items-center justify-center" style={{ gap: 24 }}>
        <motion.div
          initial={{ opacity: 0, y: 36, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center"
          style={{ gap: 16 }}
        >
          <p
            className="font-body font-bold text-text-on-dark uppercase tracking-[2.5px] whitespace-nowrap"
            style={{ fontSize: 12 }}
          >
            {t.eyebrow}
          </p>
          <p className="font-heading font-bold text-text-on-dark text-center text-[32px] leading-[38px] md:text-[46px] md:leading-[54px] w-full md:w-[700px]">
            {t.heading}
          </p>
          <p className="font-body text-text-on-dark text-center text-sm md:text-[20px] leading-normal md:leading-[26px] w-full md:w-auto">
            {t.body}
          </p>
          <Link
            href="/contact"
            className="inline-block bg-bg-primary text-brand font-body font-bold rounded-xs shadow-[4px_8px_5px_rgba(0,0,0,0.25)] hover:bg-bg-secondary transition-colors duration-150"
            style={{ fontSize: 16, padding: "8px 16px" }}
          >
            {t.button}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
