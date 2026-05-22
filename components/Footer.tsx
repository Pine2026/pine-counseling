"use client";

import Link from "next/link";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

const FOOTER_LOGO  = "/images/footer-logo.svg";
const ICON_EMAIL   = "/images/footer-icon-email.svg";
const ICON_INSTAGRAM = "/images/footer-icon-instagram.svg";
const ICON_LINKEDIN  = "/images/footer-icon-linkedin.svg";
const ICON_PHONE   = "/images/footer-icon-phone.svg";

export default function Footer() {
  const { lang } = useLanguage();
  const t = translations[lang].footer;

  return (
    <footer className="relative px-6 lg:px-40" style={{ paddingTop: 64, paddingBottom: 64 }}>
      <div className="absolute inset-0 bg-brand pointer-events-none" />
      <div className="absolute inset-0 pointer-events-none shadow-[inset_0px_10px_30px_0px_rgba(0,0,0,0.25)]" />

      <div className="relative" style={{ maxWidth: 1120, marginLeft: "auto", marginRight: "auto" }}>
        <div className="flex flex-col lg:flex-row lg:items-start gap-[32px] lg:gap-0">
          {/* Left — logo */}
          <div className="flex lg:flex-1 flex-col justify-between min-w-0 lg:h-[138px]">
            <div className="flex items-center" style={{ gap: 26.96 }}>
              <div className="relative flex-shrink-0" style={{ width: 40.46, height: 64 }}>
                <img
                  src={FOOTER_LOGO}
                  alt="Pine Counseling"
                  className="absolute inset-0 w-full h-full object-contain"
                />
              </div>
              <div
                className="font-heading font-bold text-text-on-dark whitespace-nowrap leading-none"
                style={{ fontSize: 30.33 }}
              >
                <p style={{ lineHeight: "30.33px", marginBottom: 0 }}>Pine College</p>
                <p style={{ lineHeight: "30.33px" }}>Counseling</p>
              </div>
            </div>
            <p
              className="hidden lg:block font-body text-text-on-dark whitespace-nowrap"
              style={{ fontSize: 12, lineHeight: "normal" }}
            >
              {t.copyright}
            </p>
          </div>

          {/* Right — Pages + Contact columns; gap 8px on mobile, 32px on desktop */}
          <div className="flex flex-shrink-0 gap-[14px] lg:gap-[24px]">
            {/* Pages */}
            <div className="flex flex-col items-start" style={{ gap: 16 }}>
              <p
                className="font-body font-bold text-text-on-dark tracking-[0.5px] whitespace-nowrap"
                style={{ fontSize: 14 }}
              >
                {t.pagesLabel}
              </p>
              <div className="flex flex-col items-start" style={{ gap: 8 }}>
                {t.pageLinks.map(({ label, href }) => (
                  <Link
                    key={href}
                    href={href}
                    className="font-body text-text-on-dark hover:text-text-on-dark/80 transition-colors duration-150 whitespace-nowrap"
                    style={{ fontSize: 14, lineHeight: "20px" }}
                  >
                    {label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div className="flex flex-col items-start" style={{ gap: 16 }}>
              <p
                className="font-body font-bold text-text-on-dark tracking-[0.5px] whitespace-nowrap"
                style={{ fontSize: 14 }}
              >
                {t.contactLabel}
              </p>
              <div className="flex flex-col items-start" style={{ gap: 8 }}>
                <div className="flex items-center" style={{ gap: 8 }}>
                  <div className="relative flex-shrink-0 overflow-hidden" style={{ width: 16, height: 16 }}>
                    <img src={ICON_EMAIL} alt="" aria-hidden className="absolute inset-0 w-full h-full object-contain" />
                  </div>
                  <a
                    href="mailto:ekingumus@pinecounseling.com"
                    className="font-body text-text-on-dark underline break-all"
                    style={{ fontSize: 13, lineHeight: "20px" }}
                  >
                    ekingumus@pinecounseling.com
                  </a>
                </div>

                <div className="flex items-center" style={{ gap: 8 }}>
                  <div className="relative flex-shrink-0 overflow-hidden" style={{ width: 16, height: 16 }}>
                    <img src={ICON_INSTAGRAM} alt="" aria-hidden className="absolute inset-0 w-full h-full object-contain" />
                  </div>
                  <a
                    href="https://instagram.com/pinecounseling"
                    target="_blank"
                    rel="noreferrer"
                    className="font-body text-text-on-dark underline whitespace-nowrap"
                    style={{ fontSize: 13, lineHeight: "20px" }}
                  >
                    pinecounseling
                  </a>
                </div>

                <div className="flex items-center" style={{ gap: 8 }}>
                  <div className="relative flex-shrink-0 overflow-hidden" style={{ width: 16, height: 16 }}>
                    <img src={ICON_LINKEDIN} alt="" aria-hidden className="absolute inset-0 w-full h-full object-contain" />
                  </div>
                  <a
                    href="https://www.linkedin.com/company/pine-college-counseling/"
                    target="_blank"
                    rel="noreferrer"
                    className="font-body text-text-on-dark underline whitespace-nowrap"
                    style={{ fontSize: 13, lineHeight: "20px" }}
                  >
                    pine-college-counseling
                  </a>
                </div>

                <div className="flex items-center" style={{ gap: 8 }}>
                  <div className="relative flex-shrink-0" style={{ width: 16, height: 16 }}>
                    <img src={ICON_PHONE} alt="" aria-hidden className="absolute inset-0 w-full h-full object-contain" />
                  </div>
                  <a
                    href="https://wa.me/905454505928"
                    target="_blank"
                    rel="noreferrer"
                    className="font-body text-text-on-dark underline whitespace-nowrap"
                    style={{ fontSize: 13, lineHeight: "20px" }}
                  >
                    +90 (545) 450 59 28
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p
          className="lg:hidden font-body text-text-on-dark mt-[40px]"
          style={{ fontSize: 12, lineHeight: "normal" }}
        >
          {t.copyright}
        </p>
      </div>
    </footer>
  );
}
