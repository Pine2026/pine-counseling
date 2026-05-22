"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

const NAV_LOGO = "/images/nav-logo.svg";
const EN_FLAG  = "/images/flag-en.svg";

function TurkishFlag({ width = 21, height = 15 }: { width?: number; height?: number }) {
  return (
    <svg width={width} height={height} viewBox="0 0 30 20" fill="none" style={{ borderRadius: 2, flexShrink: 0 }}>
      <rect width="30" height="20" rx="1.5" fill="#E30A17" />
      <circle cx="11" cy="10" r="5.5" fill="white" />
      <circle cx="13.5" cy="10" r="4.2" fill="#E30A17" />
      <polygon
        fill="white"
        transform="translate(19.5,10) rotate(-18)"
        points="0,-2.4 0.82,-1.13 2.28,-0.74 1.33,0.43 1.41,1.94 0,1.4 -1.41,1.94 -1.33,0.43 -2.28,-0.74 -0.82,-1.13"
      />
    </svg>
  );
}

function FlagImg({
  lang,
  width = 21,
  height = 15,
}: {
  lang: "EN" | "TR";
  width?: number;
  height?: number;
}) {
  if (lang === "TR") return <TurkishFlag width={width} height={height} />;
  return (
    <img
      src={EN_FLAG}
      alt=""
      aria-hidden
      className="flex-shrink-0"
      style={{ width, height, objectFit: "cover", borderRadius: 2 }}
    />
  );
}

function HamburgerIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 32 32" fill="none" aria-hidden>
      <path d="M5 10H27M5 16H27M5 22H27" stroke="#eae6dd" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden>
      <path d="M4 4L16 16M16 4L4 16" stroke="#2e4a3a" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ChevronDownIcon({ rotated = false }: { rotated?: boolean }) {
  return (
    <svg
      width="12"
      height="7"
      viewBox="0 0 12 7"
      fill="none"
      aria-hidden
      className={`transition-transform duration-200 flex-shrink-0 ${rotated ? "rotate-180" : ""}`}
    >
      <path
        d="M1 1L6 6L11 1"
        stroke="#2e4a3a"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function Nav() {
  const { lang, setLang } = useLanguage();
  const [menuOpen, setMenuOpen]           = useState(false);
  const [langOpen, setLangOpen]           = useState(false);
  const [mobileLangOpen, setMobileLangOpen] = useState(false);
  const pathname = usePathname();
  const langRef  = useRef<HTMLDivElement>(null);

  const t        = translations[lang].nav;
  const altLang: "EN" | "TR" = lang === "EN" ? "TR" : "EN";

  useEffect(() => {
    setMenuOpen(false);
    setLangOpen(false);
    setMobileLangOpen(false);
  }, [pathname]);

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (langRef.current && !langRef.current.contains(e.target as Node)) {
        setLangOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  return (
    <>
      {/* DEBUG: red diagnostic rectangle — remove after testing */}
      <div
        className="fixed inset-x-0 lg:hidden"
        style={{ top: 0, height: 200, background: "red", zIndex: 9999, pointerEvents: "none" }}
      />
      <nav
        className="fixed top-0 inset-x-0 z-50 bg-brand"
        style={{
          height: "calc(72px + env(safe-area-inset-top, 0px))",
          paddingTop: "env(safe-area-inset-top, 0px)",
          WebkitBackfaceVisibility: "hidden",
          backfaceVisibility: "hidden",
          transform: "translateZ(0)",
        }}
      >
        <div className="relative z-10 flex items-center justify-between px-6 lg:px-[80px]" style={{ height: 72 }}>
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 flex-shrink-0">
            <img
              src={NAV_LOGO}
              alt="Pine Counseling logo"
              className="object-contain flex-shrink-0"
              style={{ width: 24, height: 38 }}
            />
            <span
              className="font-heading font-bold text-text-on-dark"
              style={{ fontSize: 18, lineHeight: "22px" }}
            >
              Pine College<br />Counseling
            </span>
          </Link>

          {/* Desktop centre links */}
          <div className="hidden lg:flex items-center gap-[40px] flex-1 justify-center">
            {t.links.map(({ label, href }) => (
              <Link
                key={href}
                href={href}
                className={`font-body font-bold text-[16px] transition-opacity duration-150 ${
                  pathname === href
                    ? "text-text-on-dark"
                    : "text-text-on-dark/75 hover:text-text-on-dark"
                }`}
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop right — language DDM + CTA */}
          <div className="hidden lg:flex items-center gap-[12px] flex-shrink-0">
            <div className="relative" ref={langRef} style={{ width: 89 }}>
              <button
                onClick={() => setLangOpen((o) => !o)}
                className="flex items-center justify-between bg-bg-primary border border-bg-primary rounded-[4px] shadow-[4px_8px_10px_3px_rgba(0,0,0,0.25)] w-full cursor-pointer"
                style={{ height: 37, paddingLeft: 8, paddingRight: 8 }}
              >
                <div className="flex items-center gap-[6px]">
                  <FlagImg lang={lang} width={21} height={15} />
                  <span className="font-body font-bold text-brand" style={{ fontSize: 14 }}>
                    {lang}
                  </span>
                </div>
                <ChevronDownIcon rotated={langOpen} />
              </button>

              <AnimatePresence>
                {langOpen && (
                  <motion.button
                    initial={{ opacity: 0, y: -4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -4 }}
                    transition={{ duration: 0.12 }}
                    onClick={() => { setLang(altLang); setLangOpen(false); }}
                    className="absolute flex items-center gap-[6px] w-full cursor-pointer"
                    style={{
                      top: "100%",
                      left: 0,
                      background: "#e1dacd",
                      paddingTop: 8,
                      paddingBottom: 8,
                      paddingLeft: 8,
                      paddingRight: 8,
                      borderRadius: "0 0 4px 4px",
                      zIndex: 10,
                      boxShadow: "4px 8px 10px 3px rgba(0,0,0,0.25)",
                    }}
                  >
                    <FlagImg lang={altLang} width={21} height={15} />
                    <span className="font-body font-bold text-brand" style={{ fontSize: 14 }}>
                      {altLang}
                    </span>
                  </motion.button>
                )}
              </AnimatePresence>
            </div>

            <Link
              href="/contact"
              className="inline-flex items-center bg-bg-primary text-brand font-body font-bold rounded-xs drop-shadow-[4px_8px_5px_rgba(0,0,0,0.25)] hover:bg-bg-secondary transition-colors duration-150 whitespace-nowrap"
              style={{ height: 37, paddingLeft: 16, paddingRight: 16, fontSize: 16 }}
            >
              {t.cta}
            </Link>
          </div>

          {/* Mobile right: Book now + hamburger */}
          <div className="lg:hidden flex items-center gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center bg-bg-primary text-brand font-body font-bold rounded-xs drop-shadow-[4px_8px_5px_rgba(0,0,0,0.25)] whitespace-nowrap"
              style={{ height: 34, paddingLeft: 12, paddingRight: 12, fontSize: 14 }}
            >
              {t.mobileCta}
            </Link>
            <button
              className="flex items-center justify-center flex-shrink-0"
              style={{ width: 32, height: 32 }}
              onClick={() => setMenuOpen((o) => !o)}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
            >
              <HamburgerIcon />
            </button>
          </div>
        </div>
        </nav>

      {/* Mobile overlay + full-height panel */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Dark overlay */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 lg:hidden"
              style={{ background: "rgba(46,74,58,0.75)", zIndex: 49 }}
              onClick={() => setMenuOpen(false)}
            />

            {/* Slide-in panel */}
            <motion.div
              key="panel"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="fixed lg:hidden flex flex-col"
              style={{
                top: "calc(env(safe-area-inset-top, 0px) + 88px)",
                right: 16,
                bottom: 16,
                width: 243,
                background: "#e4ece5",
                borderRadius: 8,
                boxShadow: "4px 8px 20px rgba(0,0,0,0.25)",
                zIndex: 50,
                padding: 16,
              }}
            >
              {/* Close button */}
              <div className="flex justify-end" style={{ marginBottom: 8 }}>
                <button
                  className="flex items-center justify-center"
                  style={{ width: 32, height: 32 }}
                  onClick={() => setMenuOpen(false)}
                  aria-label="Close menu"
                >
                  <CloseIcon />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex flex-col" style={{ gap: 20 }}>
                {t.links.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    onClick={() => setMenuOpen(false)}
                    className={`font-body font-bold text-brand text-[16px] ${
                      pathname === href ? "" : "opacity-75 hover:opacity-100"
                    }`}
                  >
                    {label}
                  </Link>
                ))}
              </div>

              {/* Language DDM — pushed to bottom */}
              <div style={{ marginTop: "auto", paddingTop: 20 }}>
                <div className="relative" style={{ width: 80 }}>
                  <button
                    onClick={() => setMobileLangOpen((o) => !o)}
                    className="relative z-[2] flex items-center justify-between bg-bg-primary border border-bg-primary rounded-[4px] shadow-[4px_8px_10px_3px_rgba(0,0,0,0.25)] w-full cursor-pointer"
                    style={{
                      height: 34,
                      paddingLeft: 8,
                      paddingRight: 8,
                      marginBottom: mobileLangOpen ? -6 : 0,
                    }}
                  >
                    <div className="flex items-center gap-[5px]">
                      <FlagImg lang={lang} width={18} height={13} />
                      <span className="font-body font-bold text-brand text-[13px]">{lang}</span>
                    </div>
                    <ChevronDownIcon rotated={mobileLangOpen} />
                  </button>

                  <AnimatePresence>
                    {mobileLangOpen && (
                      <motion.button
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.12 }}
                        onClick={() => { setLang(altLang); setMobileLangOpen(false); setMenuOpen(false); }}
                        className="relative z-[1] flex items-center gap-[5px] w-full cursor-pointer"
                        style={{
                          background: "#e1dacd",
                          paddingTop: 14,
                          paddingBottom: 8,
                          paddingLeft: 8,
                          paddingRight: 8,
                          borderRadius: "0 0 4px 4px",
                        }}
                      >
                        <FlagImg lang={altLang} width={18} height={13} />
                        <span className="font-body font-bold text-brand text-[13px]">{altLang}</span>
                      </motion.button>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
