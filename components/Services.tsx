"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

const BG_PATTERN = "/images/bg-pattern.png";
const BOX1_IMAGE = "/images/services-box1.png";

function ArrowIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
      <path
        d="M5 12H19M13 6L19 12L13 18"
        stroke="#eae6dd"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Services() {
  const { lang } = useLanguage();
  const t = translations[lang].services;

  return (
    <section
      className="relative overflow-hidden px-6 lg:px-40"
      style={{ paddingTop: 60, paddingBottom: 60 }}
    >
      <div className="absolute inset-0 bg-bg-primary" />
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `url('${BG_PATTERN}')`,
          backgroundSize: "1024px 1024px",
          backgroundPosition: "top left",
        }}
      />

      <div className="relative z-10" style={{ maxWidth: 1120, marginLeft: "auto", marginRight: "auto" }}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col gap-[10px] lg:gap-[16px] mb-[24px] lg:mb-[40px]"
        >
          <p className="font-body font-bold text-brand uppercase" style={{ fontSize: 12, letterSpacing: "2.5px" }}>
            {t.eyebrow}
          </p>
          <h2 className="font-heading font-bold text-text-primary text-[34px] leading-[40px] lg:text-[46px] lg:leading-[54px]" style={{ maxWidth: 576 }}>
            {t.heading1}
            <br />
            {t.heading2}
          </h2>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-[16px] lg:gap-[24px]">
          {/* Box 1 */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="relative overflow-hidden rounded-md border-[1.5px] border-border-strong flex flex-col justify-end shadow-[4px_8px_10px_3px_rgba(0,0,0,0.25)] w-full aspect-square lg:w-[548px] lg:h-[548px] lg:aspect-auto flex-shrink-0 p-16 lg:p-40"
          >
            <div
              className="absolute inset-0 rounded-md"
              style={{
                backgroundImage: `url('${BOX1_IMAGE}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            />
            <div className="absolute inset-0 rounded-md bg-gradient-to-b from-[rgba(109,176,138,0)] to-[#2e4a3a] from-[44.7%]" />

            <div className="relative z-10 flex flex-col gap-[12px] lg:gap-[16px]">
              <p className="font-heading font-bold text-text-on-dark text-[18px] lg:text-[28px]" style={{ lineHeight: "1.3" }}>
                {t.card1.title}
              </p>
              <p className="font-body text-text-on-dark text-[14px] lg:text-[16px]" style={{ lineHeight: "normal" }}>
                {t.card1.body.split("\n").map((line, i, arr) => (
                  <span key={i}>
                    {line}
                    {i < arr.length - 1 && <br />}
                  </span>
                ))}
              </p>
              <div
                className="flex items-center justify-center border-[1.5px] border-bg-primary rounded-full flex-shrink-0"
                style={{ width: 40, height: 40 }}
              >
                <ArrowIcon />
              </div>
            </div>
          </motion.div>

          {/* Right — two stacked cards */}
          <div className="flex-1 flex flex-col gap-[16px] lg:gap-[24px]">
            {/* Box 2 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="bg-bg-secondary border-[1.5px] border-border-strong rounded-md shadow-[4px_8px_5px_rgba(0,0,0,0.25)] flex flex-col justify-between lg:h-[262px] p-20 lg:p-40"
              style={{ gap: 12 }}
            >
              <div className="flex flex-col gap-[12px] lg:gap-[16px]">
                <p className="font-heading font-bold text-text-primary text-[18px] lg:text-[28px]" style={{ lineHeight: "1.2" }}>
                  {t.card2.title}
                </p>
                <p className="font-body text-text-primary text-[14px] lg:text-[16px]" style={{ lineHeight: "normal" }}>
                  {t.card2.body}
                </p>
              </div>
              <Link href="/services" className="font-heading font-bold text-text-primary underline text-[14px] lg:text-[18px]">
                {t.card2.link}
              </Link>
            </motion.div>

            {/* Box 3 */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: 0.24, ease: [0.22, 1, 0.36, 1] }}
              className="bg-bg-secondary border-[1.5px] border-border-strong rounded-md shadow-[4px_8px_5px_rgba(0,0,0,0.25)] flex flex-col justify-between lg:h-[262px] p-20 lg:p-40"
              style={{ gap: 12 }}
            >
              <div className="flex flex-col gap-[12px] lg:gap-[16px]">
                <p className="font-heading font-bold text-text-primary text-[18px] lg:text-[28px]" style={{ lineHeight: "1.2" }}>
                  {t.card3.title}
                </p>
                <p className="font-body text-text-primary text-[14px] lg:text-[16px]" style={{ lineHeight: "normal" }}>
                  {t.card3.body}
                </p>
              </div>
              <Link href="/services" className="font-heading font-bold text-text-primary underline text-[14px] lg:text-[18px]">
                {t.card3.link}
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
