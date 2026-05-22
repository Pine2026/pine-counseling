"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import Approach from "@/components/Approach";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

const ABOUT_HERO         = "/images/about-hero-desktop-v4.jpg";
const ABOUT_HERO_MOBILE  = "/images/about-hero-mobile-v4.jpg";
const BG_PATTERN         = "/images/bg-pattern.png";
const TEAM_IMAGE         = "/images/team-desktop-v4.jpg";
const TEAM_IMAGE_MOBILE  = "/images/team-mobile-v4.jpg";
const CTA_PATTERN = "/images/cta-pattern.png";

export default function AboutPage() {
  const [bioExpanded, setBioExpanded] = useState(false);
  const { lang } = useLanguage();
  const t = translations[lang].aboutPage;

  return (
    <main>
      <Nav />

      <PageHero
        eyebrow={t.hero.eyebrow}
        title={t.hero.title}
        description={t.hero.description}
        imageSrc={ABOUT_HERO}
        mobileImageSrc={ABOUT_HERO_MOBILE}
        imageAlt="About Pine Counseling team"
        gradientDeg={227}
      />

      {/* ── Mission ── */}
      <section
        className="relative overflow-hidden px-6 md:px-40"
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

        <div
          className="relative z-10 flex flex-col gap-[32px] md:gap-[40px]"
          style={{ maxWidth: 1120, marginLeft: "auto", marginRight: "auto" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-[12px] md:gap-[16px]"
          >
            <p
              className="font-body font-bold text-brand uppercase text-[12px] md:text-[16px]"
              style={{ letterSpacing: "2.5px" }}
            >
              {t.mission.eyebrow}
            </p>
            <p className="font-heading font-bold text-text-primary text-[28px] leading-[34px] md:text-[42px] md:leading-[50px]">
              {t.mission.heading}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="bg-bg-secondary border-[1.5px] border-border-strong rounded-md drop-shadow-[4px_8px_5px_rgba(0,0,0,0.25)] flex flex-col items-center gap-[24px] md:gap-[40px] text-center w-full"
            style={{ padding: "32px 24px" }}
          >
            <p
              className="font-heading font-bold text-text-primary w-full text-[16px] md:text-[20px]"
              style={{ lineHeight: "1.7" }}
            >
              {t.mission.quote}
            </p>
            <p
              className="font-body text-text-primary w-full text-[14px] md:text-[16px]"
              style={{ lineHeight: "26px" }}
            >
              {t.mission.body}
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Approach ── */}
      <Approach variant="about" bgPattern={BG_PATTERN} titleSize="md" />

      {/* ── Team ── */}
      <section
        className="relative overflow-hidden px-6 md:px-40"
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

        <div
          className="relative z-10 flex flex-col gap-[32px] md:gap-[40px]"
          style={{ maxWidth: 1120, marginLeft: "auto", marginRight: "auto" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-[12px] md:gap-[16px]"
          >
            <p
              className="font-body font-bold text-brand uppercase text-[12px] md:text-[16px]"
              style={{ letterSpacing: "2.5px" }}
            >
              {t.team.eyebrow}
            </p>
            <p className="font-heading font-bold text-text-primary text-[28px] leading-[34px] md:text-[42px] md:leading-[50px]">
              {t.team.heading}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 36, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="drop-shadow-[4px_8px_5px_rgba(0,0,0,0.25)] flex flex-col md:flex-row items-stretch w-full"
          >
            {/* Photo */}
            <div className="bg-bg-secondary border-[1.5px] border-border-strong rounded-t-md md:rounded-tl-md md:rounded-tr-none md:rounded-bl-md md:rounded-br-none overflow-hidden flex-shrink-0 relative h-[220px] md:h-auto md:w-[306px]">
              <picture>
                <source media="(min-width: 768px)" srcSet={TEAM_IMAGE} />
                <img
                  src={TEAM_IMAGE_MOBILE}
                  alt="Ekin Gümüş"
                  className="absolute inset-0 w-full h-full object-cover"
                  style={{ objectPosition: "center top" }}
                />
              </picture>
              <div className="absolute inset-0 mix-blend-saturation bg-[#fff0f0]" />
              <div className="absolute inset-0 bg-[rgba(73,137,47,0.2)]" />
            </div>

            {/* Bio */}
            <div
              className="relative bg-bg-secondary border-[1.5px] border-t-0 md:border-t-[1.5px] md:border-l-0 border-border-strong rounded-b-md md:rounded-b-none md:rounded-tr-md md:rounded-br-md flex flex-col justify-center gap-[12px] flex-1"
              style={{ padding: 20 }}
            >
              <div className="flex flex-col gap-[4px]">
                <p className="font-heading font-bold text-text-primary" style={{ fontSize: 18, lineHeight: "24px" }}>
                  {t.team.name}
                </p>
                <p className="font-body font-medium text-brand" style={{ fontSize: 12, lineHeight: "18px", letterSpacing: "0.3px" }}>
                  {t.team.title}
                </p>
              </div>

              <p className="font-body text-text-primary text-[14px] md:text-[16px]" style={{ lineHeight: "26px" }}>
                {t.team.bio1}
              </p>

              {/* Mobile: animated expand */}
              <AnimatePresence initial={false}>
                {bioExpanded && (
                  <motion.div
                    className="md:hidden flex flex-col gap-[12px]"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={{
                      open: {
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.48, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.35, delay: 0.06 },
                        },
                      },
                      closed: {
                        height: 0,
                        opacity: 0,
                        transition: {
                          height: { duration: 0.38, ease: [0.4, 0, 0.6, 1] },
                          opacity: { duration: 0.18 },
                        },
                      },
                    }}
                    style={{ overflow: "hidden" }}
                  >
                    <p className="font-body text-text-primary text-[14px]" style={{ lineHeight: "26px" }}>{t.team.bio2}</p>
                    <p className="font-body text-text-primary text-[14px]" style={{ lineHeight: "26px" }}>{t.team.bio3}</p>
                  </motion.div>
                )}
              </AnimatePresence>
              {/* Desktop: always visible */}
              <div className="hidden md:flex flex-col gap-[12px]">
                <p className="font-body text-text-primary text-[16px]" style={{ lineHeight: "26px" }}>{t.team.bio2}</p>
                <p className="font-body text-text-primary text-[16px]" style={{ lineHeight: "26px" }}>{t.team.bio3}</p>
              </div>

              {/* Read less button */}
              <AnimatePresence initial={false}>
                {bioExpanded && (
                  <motion.button
                    className="md:hidden font-body font-bold text-brand underline text-[14px] self-start"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    onClick={() => setBioExpanded(false)}
                  >
                    {t.team.readLess}
                  </motion.button>
                )}
              </AnimatePresence>

              {/* Read more gradient overlay */}
              <AnimatePresence initial={false}>
                {!bioExpanded && (
                  <motion.div
                    className="md:hidden absolute left-0 right-0 bottom-0 flex items-end justify-center pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.25 }}
                    style={{
                      height: 97,
                      background: "linear-gradient(180deg, rgba(228, 236, 229, 0) 23.7%, #e4ece5 61.5%)",
                      borderRadius: "0 0 6px 6px",
                    }}
                  >
                    <button
                      className="pointer-events-auto flex items-center gap-[4px] font-body font-bold text-brand text-[14px]"
                      style={{ paddingBottom: 15 }}
                      onClick={() => setBioExpanded(true)}
                    >
                      {t.team.readMore}
                      <svg width="12" height="7" viewBox="0 0 12 7" fill="none" aria-hidden>
                        <path d="M1 1L6 6L11 1" stroke="#2e4a3a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── FAQ ── */}
      <section
        className="relative overflow-hidden px-6 md:px-40"
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

        <div
          className="relative z-10 flex flex-col gap-[32px] md:gap-[40px]"
          style={{ maxWidth: 1120, marginLeft: "auto", marginRight: "auto" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-[12px] md:gap-[16px]"
          >
            <p
              className="font-body font-bold text-brand uppercase text-[12px] md:text-[16px]"
              style={{ letterSpacing: "2.5px" }}
            >
              {t.faq.eyebrow}
            </p>
            <p className="font-heading font-bold text-text-primary text-[28px] leading-[34px] md:text-[42px] md:leading-[50px]">
              {t.faq.heading}
            </p>
          </motion.div>

          <div className="flex flex-col gap-[16px] md:gap-[24px]">
            {t.faq.items.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="bg-bg-secondary border-[1.5px] border-border-strong rounded-md shadow-[4px_8px_10px_3px_rgba(0,0,0,0.25)] flex flex-col md:flex-row md:items-center overflow-hidden"
                style={{ padding: "16px 20px", gap: 12 }}
              >
                <p
                  className="font-heading font-bold text-text-primary text-[15px] md:text-[16px] md:flex-shrink-0 md:w-[440px]"
                  style={{ lineHeight: "24px" }}
                >
                  {faq.q}
                </p>
                <p
                  className="font-body text-text-primary text-[14px] md:text-[16px] md:flex-1"
                  style={{ lineHeight: "26px" }}
                >
                  {faq.a}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner bgPattern={CTA_PATTERN} />
      <Footer />
    </main>
  );
}
