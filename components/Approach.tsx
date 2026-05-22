"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

const DEFAULT_BG = "/images/bg-pattern.png";

interface ApproachProps {
  variant?: "home" | "about";
  bgPattern?: string;
  titleSize?: "lg" | "md";
}

export default function Approach({
  variant = "home",
  bgPattern = DEFAULT_BG,
  titleSize = "lg",
}: ApproachProps) {
  const { lang } = useLanguage();
  const t = variant === "about"
    ? translations[lang].aboutPage.approach
    : translations[lang].approach;

  return (
    <section
      className="relative overflow-hidden px-6 lg:px-40"
      style={{ paddingTop: 60, paddingBottom: 60 }}
    >
      <div className="absolute inset-0 bg-bg-primary" />
      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage: `url('${bgPattern}')`,
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
          <p
            className={`font-heading font-bold text-text-primary ${
              titleSize === "md"
                ? "text-[28px] leading-[34px] lg:text-[42px] lg:leading-[50px]"
                : "text-[34px] leading-[40px] lg:text-[46px] lg:leading-[54px]"
            }`}
          >
            {t.heading}
          </p>
        </motion.div>

        <div className="flex flex-col gap-[16px] lg:gap-[24px]">
          {t.steps.map((step, i) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 32, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="bg-bg-secondary border-[1.5px] border-border-strong rounded-md drop-shadow-[4px_8px_5px_rgba(0,0,0,0.25)] flex flex-col lg:flex-row lg:items-center overflow-hidden p-5 gap-2 lg:px-32 lg:py-6 lg:gap-6"
            >
              {/* Mobile: number + title in one row */}
              <div className="flex items-center gap-[14px] lg:contents">
                <span
                  className="font-heading font-light text-brand flex-shrink-0 text-[28px] lg:text-[48px] lg:w-[60px]"
                  style={{ lineHeight: "normal" }}
                >
                  {step.number}
                </span>
                <span className="font-heading font-bold text-text-primary lg:flex-shrink-0 text-[18px] lg:text-[28px] lg:leading-[30px] lg:w-[280px]">
                  {step.title}
                </span>
              </div>

              <p className="font-body text-text-primary flex-1 text-[14px] lg:text-[16px] leading-normal lg:leading-[26px]">
                {step.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
