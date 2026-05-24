"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

const SERVICES_PAGE_HERO        = "/images/services-hero-desktop-v4.jpg";
const SERVICES_PAGE_HERO_MOBILE = "/images/services-hero-mobile-v4.jpg";
const BG_PATTERN  = "/images/bg-pattern.png";
const BULLET_ICON = "/images/bullet-icon.svg";
const HUB_IMAGE   = "/images/pinehub-v1.jpg";
const CTA_PATTERN = "/images/cta-pattern.png";

const HUB_ICONS = [
  <svg key="0" width="23" height="23" viewBox="0 0 23 23" fill="none"><path d="M21.25 1.25L10.25 12.25M10.25 12.25L1.25 8.25L21.25 1.25L14.25 21.25L10.25 12.25Z" stroke="#2e4a3a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  <svg key="1" width="23" height="20" viewBox="0 0 23 20" fill="none"><path d="M15.4879 5.83C16.0457 6.38724 16.4883 7.04897 16.7902 7.77736C17.0922 8.50575 17.2476 9.28651 17.2476 10.075C17.2476 10.8635 17.0922 11.6443 16.7902 12.3726C16.4883 13.101 16.0457 13.7628 15.4879 14.32M7.00786 14.31C6.45001 13.7528 6.00745 13.091 5.70551 12.3626C5.40356 11.6343 5.24814 10.8535 5.24814 10.065C5.24814 9.27651 5.40356 8.49575 5.70551 7.76736C6.00745 7.03897 6.45001 6.37724 7.00786 5.82M18.3179 3C20.1926 4.87528 21.2457 7.41836 21.2457 10.07C21.2457 12.7216 20.1926 15.2647 18.3179 17.14M4.17786 17.14C2.30315 15.2647 1.25 12.7216 1.25 10.07C1.25 7.41836 2.30315 4.87528 4.17786 3M13.2479 10.07C13.2479 11.1746 12.3524 12.07 11.2479 12.07C10.1433 12.07 9.24786 11.1746 9.24786 10.07C9.24786 8.96543 10.1433 8.07 11.2479 8.07C12.3524 8.07 13.2479 8.96543 13.2479 10.07Z" stroke="#2e4a3a" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/></svg>,
];

function BulletItem({ bold, normal }: { bold?: string; normal?: string }) {
  return (
    <div className="flex gap-2 items-start">
      <div className="flex-shrink-0 pt-[2px]" style={{ width: 16, height: 18 }}>
        <img src={BULLET_ICON} alt="" aria-hidden className="w-4 h-4 object-contain" />
      </div>
      <p className="font-body text-text-primary flex-1 text-[14px] lg:text-[16px]" style={{ lineHeight: "24px" }}>
        {bold && <span className="font-bold">{bold}</span>}
        {normal && <span>{normal}</span>}
      </p>
    </div>
  );
}

function ChevronDown({ open }: { open: boolean }) {
  return (
    <svg
      width="20" height="20" viewBox="0 0 24 24" fill="none"
      className={`flex-shrink-0 transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path d="M6 9l6 6 6-6" stroke="#2e4a3a" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function TagBadge({ label }: { label: string }) {
  return (
    <div
      className="border border-border-strong flex items-center justify-center overflow-hidden flex-shrink-0"
      style={{
        height: 21,
        borderRadius: 6,
        paddingLeft: 16,
        paddingRight: 16,
        paddingTop: 2,
        paddingBottom: 2,
        background: "linear-gradient(90deg, #e4ece5 0%, #e4ece5 100%)",
      }}
    >
      <p className="font-body font-bold text-brand tracking-[1px] whitespace-nowrap" style={{ fontSize: 11 }}>
        {label}
      </p>
    </div>
  );
}

export default function ServicesPage() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null);
  const { lang } = useLanguage();
  const t = translations[lang].servicesPage;
  const hero = translations[lang].servicesPage.hero;

  function toggleCard(i: number) {
    setExpandedCard(expandedCard === i ? null : i);
  }

  return (
    <main>
      <Nav />

      <PageHero
        imageSrc={SERVICES_PAGE_HERO}
        mobileImageSrc={SERVICES_PAGE_HERO_MOBILE}
        imageAlt="Services"
        eyebrow={hero.eyebrow}
        title={hero.title}
        description={hero.description}
        gradientDeg={229}
      />

      {/* Packages Section */}
      <section
        className="relative overflow-hidden px-6 lg:px-40"
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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start mb-[24px] lg:mb-[40px]"
            style={{ gap: 12 }}
          >
            <p className="font-body font-bold text-brand uppercase tracking-[2.5px] text-[12px] lg:text-[16px]">
              {t.packages.eyebrow}
            </p>
            <p className="font-heading font-bold text-text-primary text-[28px] leading-[34px] lg:text-[42px] lg:leading-[50px]">
              {t.packages.heading}
            </p>
          </motion.div>

          <div className="flex flex-col lg:flex-row lg:flex-wrap" style={{ gap: 24 }}>

            {/* ── Package 1 ── */}
            <motion.div
              initial={{ opacity: 0, y: 36, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0, ease: [0.22, 1, 0.36, 1] }}
              className="bg-bg-secondary border-[1.5px] border-border-strong rounded-md shadow-[4px_8px_10px_3px_rgba(0,0,0,0.25)] flex flex-col w-full lg:flex-1 lg:min-w-0 overflow-hidden p-16 lg:p-24"
              style={{ gap: 16 }}
            >
              <div className="flex flex-col" style={{ gap: 8 }}>
                <div className="hidden lg:flex items-start justify-between flex-shrink-0">
                  <TagBadge label={t.pkg1.tag} />
                  <p className="font-heading font-bold text-brand" style={{ fontSize: 20, lineHeight: "30px" }}>{t.pkg1.price}</p>
                </div>
                <div className="lg:hidden flex items-center justify-between flex-shrink-0">
                  <TagBadge label={t.pkg1.tag} />
                  <button onClick={() => toggleCard(0)} aria-label={expandedCard === 0 ? "Collapse" : "Expand"} className="p-1">
                    <ChevronDown open={expandedCard === 0} />
                  </button>
                </div>
                <div className="flex flex-row items-center" style={{ gap: 16 }}>
                  <p className="font-heading font-light text-brand flex-shrink-0" style={{ fontSize: 36, lineHeight: "normal" }}>{t.pkg1.num}</p>
                  <p className="font-heading font-bold text-text-primary text-[18px] lg:text-[28px] leading-6 lg:leading-[30px]">
                    {t.pkg1.title}
                  </p>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {expandedCard === 0 && (
                  <motion.div
                    className="lg:hidden"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={{
                      open: {
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.32, delay: 0.06 },
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
                    <div className="flex flex-col" style={{ gap: 16 }}>
                      <p className="font-heading font-bold text-brand" style={{ fontSize: 14, lineHeight: "20px" }}>{t.pkg1.price}</p>
                      <p className="font-body text-text-primary text-[14px]" style={{ lineHeight: "24px" }}>{t.pkg1.intro}</p>
                      <div className="flex flex-col" style={{ gap: 12 }}>
                        {t.pkg1.bullets.map((b, i) => <BulletItem key={i} bold={b.bold} normal={b.normal} />)}
                      </div>
                      <p className="font-body text-text-primary text-[14px]" style={{ lineHeight: "24px" }}>
                        <span className="font-bold">{t.pkg1.outcomeLabel} </span>{t.pkg1.outcome}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="hidden lg:flex flex-col" style={{ gap: 16 }}>
                <p className="font-body text-text-primary text-[16px]" style={{ lineHeight: "24px" }}>{t.pkg1.intro}</p>
                <div className="flex flex-col" style={{ gap: 12 }}>
                  {t.pkg1.bullets.map((b, i) => <BulletItem key={i} bold={b.bold} normal={b.normal} />)}
                </div>
                <p className="font-body text-text-primary text-[16px]" style={{ lineHeight: "24px" }}>
                  <span className="font-bold">{t.pkg1.outcomeLabel} </span>{t.pkg1.outcome}
                </p>
              </div>
            </motion.div>

            {/* ── Package 2 ── */}
            <motion.div
              initial={{ opacity: 0, y: 36, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="bg-bg-secondary border-[1.5px] border-border-strong rounded-md shadow-[4px_8px_10px_3px_rgba(0,0,0,0.25)] flex flex-col w-full lg:flex-1 lg:min-w-0 overflow-hidden p-16 lg:p-24"
              style={{ gap: 16 }}
            >
              <div className="flex flex-col" style={{ gap: 8 }}>
                <div className="hidden lg:flex items-start justify-between flex-shrink-0">
                  <TagBadge label={t.pkg2.tag} />
                  <p className="font-heading font-bold text-brand" style={{ fontSize: 20, lineHeight: "30px" }}>{t.pkg2.price}</p>
                </div>
                <div className="lg:hidden flex items-center justify-between flex-shrink-0">
                  <TagBadge label={t.pkg2.tag} />
                  <button onClick={() => toggleCard(1)} aria-label={expandedCard === 1 ? "Collapse" : "Expand"} className="p-1">
                    <ChevronDown open={expandedCard === 1} />
                  </button>
                </div>
                <div className="flex flex-row items-center" style={{ gap: 16 }}>
                  <p className="font-heading font-light text-brand flex-shrink-0" style={{ fontSize: 36, lineHeight: "normal" }}>{t.pkg2.num}</p>
                  <p className="font-heading font-bold text-text-primary text-[18px] lg:text-[28px] leading-6 lg:leading-[30px]">
                    {t.pkg2.title}
                  </p>
                </div>
              </div>

              <AnimatePresence initial={false}>
                {expandedCard === 1 && (
                  <motion.div
                    className="lg:hidden"
                    initial="closed"
                    animate="open"
                    exit="closed"
                    variants={{
                      open: {
                        height: "auto",
                        opacity: 1,
                        transition: {
                          height: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                          opacity: { duration: 0.32, delay: 0.06 },
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
                    <div className="flex flex-col" style={{ gap: 16 }}>
                      <p className="font-heading font-bold text-brand" style={{ fontSize: 14, lineHeight: "20px" }}>{t.pkg2.price}</p>
                      <p className="font-body text-text-primary text-[14px]" style={{ lineHeight: "24px" }}>{t.pkg2.intro}</p>
                      <div className="flex flex-col" style={{ gap: 12 }}>
                        {t.pkg2.bullets.map((b, i) => {
                          const bullet = b as { bold?: string; normal: string };
                          return <BulletItem key={i} bold={bullet.bold} normal={bullet.normal} />;
                        })}
                      </div>
                      <p className="font-body text-text-primary text-[14px]" style={{ lineHeight: "24px" }}>
                        <span className="font-bold">{t.pkg2.outcomeLabel} </span>{t.pkg2.outcome}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
              <div className="hidden lg:flex flex-col" style={{ gap: 16 }}>
                <p className="font-body text-text-primary text-[16px]" style={{ lineHeight: "24px" }}>{t.pkg2.intro}</p>
                <div className="flex flex-col" style={{ gap: 12 }}>
                  {t.pkg2.bullets.map((b, i) => {
                    const bullet = b as { bold?: string; normal: string };
                    return <BulletItem key={i} bold={bullet.bold} normal={bullet.normal} />;
                  })}
                </div>
                <p className="font-body text-text-primary text-[16px]" style={{ lineHeight: "24px" }}>
                  <span className="font-bold">{t.pkg2.outcomeLabel} </span>{t.pkg2.outcome}
                </p>
              </div>
            </motion.div>

            {/* ── Packages 3 + 4 row ── */}
            <div className="flex flex-col lg:flex-row w-full" style={{ gap: 24 }}>

              {/* Package 3 */}
              <motion.div
                initial={{ opacity: 0, y: 36, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
                className="bg-bg-secondary border-[1.5px] border-border-strong rounded-md shadow-[4px_8px_10px_3px_rgba(0,0,0,0.25)] flex flex-1 flex-col items-start min-w-0 overflow-hidden p-16 lg:p-24"
                style={{ gap: 16 }}
              >
                <div className="flex flex-col w-full" style={{ gap: 8 }}>
                  <div className="hidden lg:flex items-start justify-between w-full flex-shrink-0">
                    <TagBadge label={t.pkg3.tag} />
                    <p className="font-heading font-bold text-brand" style={{ fontSize: 20, lineHeight: "30px" }}>{t.pkg3.price}</p>
                  </div>
                  <div className="lg:hidden flex items-center justify-between w-full flex-shrink-0">
                    <TagBadge label={t.pkg3.tag} />
                    <button onClick={() => toggleCard(2)} aria-label={expandedCard === 2 ? "Collapse" : "Expand"} className="p-1">
                      <ChevronDown open={expandedCard === 2} />
                    </button>
                  </div>
                  <div className="flex flex-row items-center w-full" style={{ gap: 16 }}>
                    <p className="font-heading font-light text-brand flex-shrink-0" style={{ fontSize: 36, lineHeight: "normal" }}>{t.pkg3.num}</p>
                    <p className="font-heading font-bold text-text-primary text-[18px] lg:text-[28px] leading-6 lg:leading-[30px]">{t.pkg3.title}</p>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {expandedCard === 2 && (
                    <motion.div
                      className="lg:hidden w-full"
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={{
                        open: {
                          height: "auto",
                          opacity: 1,
                          transition: {
                            height: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                            opacity: { duration: 0.32, delay: 0.06 },
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
                      <div className="flex flex-col w-full" style={{ gap: 16 }}>
                        <p className="font-heading font-bold text-brand" style={{ fontSize: 14, lineHeight: "20px" }}>{t.pkg3.price}</p>
                        <p className="font-body text-text-primary text-[14px]" style={{ lineHeight: "24px" }}>{t.pkg3.intro}</p>
                        <div className="flex flex-col w-full" style={{ gap: 12 }}>
                          {t.pkg3.bullets.map((b, i) => <BulletItem key={i} normal={b.normal} />)}
                        </div>
                        <p className="font-body text-text-primary text-[14px]" style={{ lineHeight: "24px" }}>
                          <span className="font-bold">{t.pkg3.outcomeLabel} </span>{t.pkg3.outcome}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="hidden lg:flex flex-col w-full" style={{ gap: 16 }}>
                  <p className="font-body text-text-primary text-[16px]" style={{ lineHeight: "24px" }}>{t.pkg3.intro}</p>
                  <div className="flex flex-col w-full" style={{ gap: 12 }}>
                    {t.pkg3.bullets.map((b, i) => <BulletItem key={i} normal={b.normal} />)}
                  </div>
                  <p className="font-body text-text-primary text-[16px]" style={{ lineHeight: "24px" }}>
                    <span className="font-bold">{t.pkg3.outcomeLabel} </span>{t.pkg3.outcome}
                  </p>
                </div>
              </motion.div>

              {/* Package 4 */}
              <motion.div
                initial={{ opacity: 0, y: 36, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="bg-bg-secondary border-[1.5px] border-border-strong rounded-md shadow-[4px_8px_10px_3px_rgba(0,0,0,0.25)] flex flex-1 flex-col items-start min-w-0 overflow-hidden p-16 lg:p-24"
                style={{ gap: 16 }}
              >
                <div className="flex flex-col w-full" style={{ gap: 8 }}>
                  <div className="hidden lg:flex items-start justify-between w-full flex-shrink-0">
                    <TagBadge label={t.pkg4.tag} />
                    <p className="font-heading font-bold text-brand text-[16px] lg:text-[20px]" style={{ lineHeight: "30px", whiteSpace: "nowrap" }}>{t.pkg4.price}</p>
                  </div>
                  <div className="lg:hidden flex items-center justify-between w-full flex-shrink-0">
                    <TagBadge label={t.pkg4.tag} />
                    <button onClick={() => toggleCard(3)} aria-label={expandedCard === 3 ? "Collapse" : "Expand"} className="p-1">
                      <ChevronDown open={expandedCard === 3} />
                    </button>
                  </div>
                  <div className="flex flex-row items-center w-full" style={{ gap: 16 }}>
                    <p className="font-heading font-light text-brand flex-shrink-0" style={{ fontSize: 36, lineHeight: "normal" }}>{t.pkg4.num}</p>
                    <p className="font-heading font-bold text-text-primary text-[18px] lg:text-[28px] leading-6 lg:leading-[30px]">{t.pkg4.title}</p>
                  </div>
                </div>

                <AnimatePresence initial={false}>
                  {expandedCard === 3 && (
                    <motion.div
                      className="lg:hidden w-full"
                      initial="closed"
                      animate="open"
                      exit="closed"
                      variants={{
                        open: {
                          height: "auto",
                          opacity: 1,
                          transition: {
                            height: { duration: 0.45, ease: [0.22, 1, 0.36, 1] },
                            opacity: { duration: 0.32, delay: 0.06 },
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
                      <div className="flex flex-col w-full" style={{ gap: 12 }}>
                        <p className="font-heading font-bold text-brand" style={{ fontSize: 14, lineHeight: "20px" }}>{t.pkg4.priceMobile}</p>
                        <p className="font-body text-text-primary text-[14px]" style={{ lineHeight: "24px" }}>{t.pkg4.body1}</p>
                        <p className="font-body text-text-primary text-[14px]" style={{ lineHeight: "24px" }}>{t.pkg4.body2}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
                <div className="hidden lg:flex flex-col w-full" style={{ gap: 12 }}>
                  <p className="font-body text-text-primary text-[16px]" style={{ lineHeight: "24px" }}>{t.pkg4.body1}</p>
                  <p className="font-body text-text-primary text-[16px]" style={{ lineHeight: "24px" }}>{t.pkg4.body2}</p>
                </div>
              </motion.div>
            </div>
          </div>

          {/* CTA */}
          <div className="flex items-center justify-center w-full" style={{ marginTop: 32 }}>
            <Link
              href="/contact"
              className="inline-block bg-brand text-text-on-dark font-body font-bold rounded-xs shadow-[4px_8px_5px_rgba(0,0,0,0.25)] hover:opacity-90 transition-opacity duration-150"
              style={{ fontSize: 18, padding: "12px 28px" }}
            >
              {t.packages.cta}
            </Link>
          </div>
        </div>
      </section>

      {/* For the Schools */}
      <section
        className="relative overflow-hidden px-6 lg:px-40"
        style={{ paddingTop: 60, paddingBottom: 60 }}
      >
        <div
          className="absolute inset-0 opacity-[0.14] pointer-events-none"
          style={{
            backgroundImage: `url('${BG_PATTERN}')`,
            backgroundSize: "1024px 1024px",
            backgroundPosition: "top left",
          }}
        />
        <div
          className="relative z-10 flex flex-col items-start"
          style={{ gap: 32, maxWidth: 1120, marginLeft: "auto", marginRight: "auto" }}
        >
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col items-start"
            style={{ gap: 12 }}
          >
            <p className="font-body font-bold text-brand uppercase tracking-[2.5px] text-[12px] lg:text-[16px]">
              {t.partnerships.eyebrow}
            </p>
            <p className="font-heading font-bold text-text-primary text-[28px] leading-[34px] lg:text-[42px] lg:leading-[50px]">
              {t.partnerships.heading}
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.6, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
            className="font-body text-text-primary w-full text-[14px] lg:text-[16px]"
            style={{ lineHeight: "24px" }}
          >
            {t.partnerships.body}
          </motion.p>
        </div>
      </section>

      {/* Hub — Coming Soon overlay */}
      <section
        className="relative overflow-hidden px-6 lg:px-40"
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
        <div
          className="relative z-10 flex flex-col lg:flex-row lg:items-center"
          style={{ gap: 48, maxWidth: 1120, marginLeft: "auto", marginRight: "auto" }}
        >
          {/* Left: platform image */}
          <div className="w-full lg:flex-1 min-w-0">
            <img src={HUB_IMAGE} alt="Pine Education Hub platform" className="w-full h-auto object-cover rounded-md" />
          </div>

          {/* Right: heading + description + feature items */}
          <div className="flex flex-col items-start lg:w-[420px] lg:flex-shrink-0" style={{ gap: 20 }}>
            <p className="font-body font-bold text-text-secondary uppercase tracking-[2.5px] text-[12px] lg:text-[14px]">
              {t.hub.eyebrow}
            </p>
            <p className="font-heading font-bold text-text-primary text-[28px] leading-[34px] lg:text-[42px] lg:leading-[50px]">
              {t.hub.heading}
            </p>
            <p className="font-body text-text-secondary text-[14px] lg:text-[16px]" style={{ lineHeight: "26px" }}>
              {t.hub.body}
            </p>
            <div className="flex flex-col w-full" style={{ gap: 16 }}>
              {t.hub.features.map((feat, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="flex-shrink-0 mt-[2px]">{HUB_ICONS[i]}</span>
                  <div className="flex flex-col" style={{ gap: 2 }}>
                    <p className="font-heading font-bold text-text-primary" style={{ fontSize: 16, lineHeight: "22px" }}>{feat.title}</p>
                    <p className="font-body text-text-secondary" style={{ fontSize: 14, lineHeight: "22px" }}>{feat.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <motion.div
          className="absolute inset-0 z-20 flex items-center justify-center cursor-pointer"
          initial="rest"
          animate="rest"
          whileHover="hover"
          variants={{
            rest: { backgroundColor: "rgba(46,74,58,0.70)", boxShadow: "inset 0 0 0 0px rgba(109,176,138,0)" },
            hover: { backgroundColor: "rgba(46,74,58,0.88)", boxShadow: "inset 0 0 0 2px rgba(109,176,138,0.65)" },
          }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          <motion.p
            className="font-heading font-bold text-text-on-dark text-[32px] lg:text-[42px]"
            style={{ lineHeight: "50px" }}
            variants={{
              rest: { scale: 1, y: 0, opacity: 1 },
              hover: { scale: 1.07, y: -6, opacity: 1 },
            }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            {t.hub.comingSoon}
          </motion.p>
        </motion.div>
      </section>

      <CTABanner bgPattern={CTA_PATTERN} />
      <Footer />
    </main>
  );
}
