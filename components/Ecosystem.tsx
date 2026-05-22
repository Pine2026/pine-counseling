"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

const BG_PATTERN = "/images/bg-pattern.png";

const iconComponents = [
  /* Right Fit */
  <svg key="0" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.25 10.25L10.25 1.25C11.0456 1.25 11.8087 1.56607 12.3713 2.12868C12.9339 2.69129 13.25 3.45435 13.25 4.25V8.25H18.91C19.1999 8.24672 19.4871 8.3065 19.7516 8.42522C20.0161 8.54393 20.2516 8.71873 20.4419 8.93751C20.6321 9.15629 20.7725 9.41382 20.8533 9.69225C20.9342 9.97068 20.9535 10.2634 20.91 10.55L19.53 19.55C19.4577 20.0269 19.2154 20.4616 18.8479 20.774C18.4804 21.0864 18.0123 21.2555 17.53 21.25H6.25M6.25 10.25V21.25M6.25 10.25H3.25C2.71957 10.25 2.21086 10.4607 1.83579 10.8358C1.46071 11.2109 1.25 11.7196 1.25 12.25V19.25C1.25 19.7804 1.46071 20.2891 1.83579 20.6642C2.21086 21.0393 2.71957 21.25 3.25 21.25H6.25" stroke="#2E4A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  /* Global Reach */
  <svg key="1" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 11.25C21.25 16.7728 16.7728 21.25 11.25 21.25M21.25 11.25C21.25 5.72715 16.7728 1.25 11.25 1.25M21.25 11.25H1.25M11.25 21.25C5.72715 21.25 1.25 16.7728 1.25 11.25M11.25 21.25C13.7513 18.5116 15.1728 14.958 15.25 11.25C15.1728 7.54203 13.7513 3.98835 11.25 1.25M11.25 21.25C8.74872 18.5116 7.32725 14.958 7.25 11.25C7.32725 7.54203 8.74872 3.98835 11.25 1.25M1.25 11.25C1.25 5.72715 5.72715 1.25 11.25 1.25" stroke="#2E4A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  /* Direct Communication */
  <svg key="2" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 1.25L10.25 12.25M10.25 12.25L1.25 8.25L21.25 1.25L14.25 21.25L10.25 12.25Z" stroke="#2E4A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  /* Centralized Tracking */
  <svg key="3" width="23" height="20" viewBox="0 0 23 20" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.4879 5.83C16.0457 6.38724 16.4883 7.04897 16.7902 7.77736C17.0922 8.50575 17.2476 9.28651 17.2476 10.075C17.2476 10.8635 17.0922 11.6443 16.7902 12.3726C16.4883 13.101 16.0457 13.7628 15.4879 14.32M7.00786 14.31C6.45001 13.7528 6.00745 13.091 5.70551 12.3626C5.40356 11.6343 5.24814 10.8535 5.24814 10.065C5.24814 9.27651 5.40356 8.49575 5.70551 7.76736C6.00745 7.03897 6.45001 6.37724 7.00786 5.82M18.3179 3C20.1926 4.87528 21.2457 7.41836 21.2457 10.07C21.2457 12.7216 20.1926 15.2647 18.3179 17.14M4.17786 17.14C2.30315 15.2647 1.25 12.7216 1.25 10.07C1.25 7.41836 2.30315 4.87528 4.17786 3M13.2479 10.07C13.2479 11.1746 12.3524 12.07 11.2479 12.07C10.1433 12.07 9.24786 11.1746 9.24786 10.07C9.24786 8.96543 10.1433 8.07 11.2479 8.07C12.3524 8.07 13.2479 8.96543 13.2479 10.07Z" stroke="#2E4A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  /* Continuous Support */
  <svg key="4" width="20" height="23" viewBox="0 0 20 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M10 21.25C10 21.25 18 17.25 18 11.25V4.25L10 1.25L2 4.25V11.25C2 17.25 10 21.25 10 21.25Z" stroke="#2E4A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  /* Multilingual Support */
  <svg key="5" width="23" height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M21.25 14.5833C21.25 15.1727 21.0159 15.7379 20.5991 16.1547C20.1824 16.5714 19.6171 16.8056 19.0278 16.8056H5.69444L1.25 21.25V3.47222C1.25 2.88285 1.48413 2.31762 1.90087 1.90087C2.31762 1.48413 2.88285 1.25 3.47222 1.25H19.0278C19.6171 1.25 20.1824 1.48413 20.5991 1.90087C21.0159 2.31762 21.25 2.88285 21.25 3.47222V14.5833Z" stroke="#2E4A3A" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
];

export default function Ecosystem() {
  const { lang } = useLanguage();
  const t = translations[lang].ecosystem;

  const cards = t.cards.map((card, i) => ({ ...card, icon: iconComponents[i] }));

  return (
    <section
      className="relative overflow-hidden px-6 md:px-40"
      style={{ paddingTop: 60, paddingBottom: 60 }}
    >
      <div className="absolute inset-0 bg-bg-primary pointer-events-none" />
      <div
        className="absolute inset-0 opacity-[0.14] pointer-events-none"
        style={{
          backgroundImage: `url('${BG_PATTERN}')`,
          backgroundSize: "1024px 1024px",
          backgroundPosition: "top left",
        }}
      />

      <div className="relative z-10" style={{ maxWidth: 1120, marginLeft: "auto", marginRight: "auto" }}>
        <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-[24px] md:mb-[40px] gap-[10px] md:gap-0">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-[10px] md:gap-[12px]"
          >
            <p className="font-body font-bold text-brand uppercase tracking-[2.5px] text-[12px] md:text-[14px]">
              {t.eyebrow}
            </p>
            <div className="font-heading font-bold text-text-primary text-[34px] leading-[40px] md:text-[46px] md:leading-[54px]">
              <p>{t.heading1}</p>
              <p>{t.heading2}</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 32 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="hidden md:flex items-end justify-end self-stretch"
            style={{ paddingTop: 52, width: 499 }}
          >
            <p className="font-body font-bold text-text-primary/80" style={{ fontSize: 20, lineHeight: "26px" }}>
              {t.description}
            </p>
          </motion.div>
        </div>

        <p className="md:hidden font-body font-medium text-text-primary/80 leading-normal mb-6" style={{ fontSize: 16 }}>
          {t.description}
        </p>

        {/* Mobile cards — 2-col, icon + title only */}
        <div className="flex flex-wrap gap-[8px] md:hidden">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 32, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-bg-secondary border-[1.5px] border-border-strong rounded-md drop-shadow-[4px_8px_5px_rgba(0,0,0,0.25)] flex flex-col gap-[8px]"
              style={{ width: "calc(50% - 4px)", padding: 12 }}
            >
              <span style={{ alignSelf: "flex-start", display: "inline-flex", flexShrink: 0 }}>
                {card.icon}
              </span>
              <p className="font-heading font-bold text-text-primary" style={{ fontSize: 14, lineHeight: "20px" }}>
                {card.title}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Desktop cards — 3-col grid */}
        <div className="hidden md:flex flex-col gap-[32px]">
          {[cards.slice(0, 3), cards.slice(3, 6)].map((row, rowIdx) => (
            <div key={rowIdx} className="flex gap-[32px]">
              {row.map((card, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 32, scale: 0.95 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: "-40px" }}
                  transition={{ duration: 0.55, delay: (rowIdx * 3 + i) * 0.1, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-bg-secondary border-[1.5px] border-border-strong rounded-md drop-shadow-[4px_8px_5px_rgba(0,0,0,0.25)] flex flex-col gap-[8px]"
                  style={{ flex: 1, padding: "24px 32px" }}
                >
                  <span style={{ alignSelf: "flex-start", display: "inline-flex", flexShrink: 0 }}>
                    {card.icon}
                  </span>
                  <p className="font-heading font-bold text-text-primary" style={{ fontSize: 18, lineHeight: "24px" }}>
                    {card.title}
                  </p>
                  <p className="font-body text-text-primary" style={{ fontSize: 16, lineHeight: "26px" }}>
                    {card.body}
                  </p>
                </motion.div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
