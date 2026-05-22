"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

const HERO_IMAGE        = "/images/hero-desktop-v4.jpg";
const HERO_IMAGE_MOBILE = "/images/hero-mobile-v4.jpg";

export default function Hero() {
  const { lang } = useLanguage();
  const t = translations[lang].hero;

  return (
    <section className="relative overflow-hidden h-[505px] lg:h-[720px]">
      {/* Background — mobile */}
      <div className="absolute inset-0 lg:hidden">
        {/* Image starts below the fixed nav (72px) so the very top of the image is the first visible content */}
        <div className="absolute inset-x-0 bottom-0 top-[72px]">
          <Image src={HERO_IMAGE_MOBILE} alt="" fill sizes="100vw" quality={100} className="object-cover object-top" priority fetchPriority="high" />
        </div>
        <div className="absolute inset-0" style={{ background: "rgba(73,137,47,0.2)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(244deg, rgba(109,176,138,0) 10.286%, rgb(46,74,58) 100.53%)" }} />
      </div>
      {/* Background — desktop */}
      <div className="absolute inset-0 hidden lg:block">
        <div className="absolute inset-x-0 bottom-0 top-[72px]">
          <Image src={HERO_IMAGE} alt="" fill sizes="100vw" quality={100} className="object-cover object-top" priority fetchPriority="high" />
        </div>
        <div className="absolute inset-0" style={{ background: "rgba(73,137,47,0.2)" }} />
        <div className="absolute inset-0" style={{ background: "linear-gradient(244deg, rgba(109,176,138,0) 10.286%, rgb(46,74,58) 100.53%)" }} />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-end lg:items-center px-6 lg:px-40 pb-10 lg:pb-0 pt-[80px]">
        <div style={{ maxWidth: 1120, width: "100%", marginLeft: "auto", marginRight: "auto" }}>
          <div className="flex flex-col gap-[16px] lg:gap-[24px] items-start">
            <motion.h1
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading font-bold text-text-on-dark text-[34px] leading-[40px] lg:text-[56px] lg:leading-[64px] w-full lg:w-[476px]"
            >
              {t.title.split("\n").map((line, i) => (
                <span key={i}>
                  {line}
                  {i === 0 && <br />}
                </span>
              ))}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
              className="font-body text-text-on-dark text-[14px] leading-[22px] lg:text-[20px] lg:leading-[26px] w-full lg:w-[460px]"
            >
              {t.description}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.4, ease: "easeOut" }}
              className="flex items-center gap-[12px] lg:gap-[14px]"
            >
              <Link
                href="/contact"
                className="inline-block bg-bg-primary text-brand font-body font-bold rounded-xs drop-shadow-[4px_8px_5px_rgba(0,0,0,0.25)] hover:bg-bg-secondary transition-colors duration-150 text-[14px] lg:text-[20px]"
                style={{ padding: "8px 14px" }}
              >
                {t.cta1}
              </Link>
              <Link
                href="/services"
                className="inline-block border-[1.5px] border-bg-primary text-text-on-dark font-body font-bold rounded-xs shadow-[4px_8px_10px_0px_rgba(0,0,0,0.25)] hover:bg-white/10 transition-colors duration-150 text-[14px] lg:text-[20px]"
                style={{ padding: "8px 14px" }}
              >
                {t.cta2}
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.55, delay: 0.55, ease: "easeOut" }}
              className="flex items-center gap-[20px]"
            >
              <div className="flex flex-col gap-[2px]">
                <p className="font-heading font-bold text-text-on-dark text-[22px] lg:text-[32px]">30+</p>
                <p className="font-heading text-text-on-dark text-[11px] lg:text-[14px]">{t.stat1Label}</p>
              </div>
              <div className="bg-bg-primary w-px" style={{ height: 36 }} />
              <div className="flex flex-col gap-[2px]">
                <p className="font-heading font-bold text-text-on-dark text-[22px] lg:text-[32px]">9-12+</p>
                <p className="font-heading text-text-on-dark text-[11px] lg:text-[14px]">{t.stat2Label}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
