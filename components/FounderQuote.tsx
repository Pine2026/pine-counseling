"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

const BG_PATTERN = "/images/bg-pattern.png";

export default function FounderQuote() {
  const { lang } = useLanguage();
  const t = translations[lang].founderQuote;

  return (
    <section
      className="relative overflow-hidden px-6 md:px-40"
      style={{ paddingTop: 80, paddingBottom: 80 }}
    >
      <div className="absolute inset-0 bg-bg-primary" />
      <div
        className="absolute inset-0 opacity-[0.14] pointer-events-none"
        style={{
          backgroundImage: `url('${BG_PATTERN}')`,
          backgroundSize: "1024px 1024px",
          backgroundPosition: "top left",
        }}
      />

      <div className="relative z-10" style={{ maxWidth: 1120, marginLeft: "auto", marginRight: "auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 48, scale: 0.96 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="bg-bg-secondary border-[1.5px] border-border-strong rounded-md shadow-[4px_8px_5px_rgba(0,0,0,0.25)] flex flex-col items-center w-full"
          style={{ gap: 24, padding: "32px 24px" }}
        >
          <p
            className="font-heading font-bold text-text-primary text-center w-full text-[15px] md:text-[20px]"
            style={{ lineHeight: "1.7" }}
          >
            {t.quote}
          </p>
          <p
            className="font-body font-bold text-text-primary tracking-[2.5px] whitespace-nowrap text-[13px] md:text-[16px]"
          >
            {t.author}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
