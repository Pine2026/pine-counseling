"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Nav from "@/components/Nav";
import PageHero from "@/components/PageHero";
import CTABanner from "@/components/CTABanner";
import Footer from "@/components/Footer";
import { useLanguage } from "@/contexts/LanguageContext";
import { translations } from "@/lib/i18n";

const CONTACT_HERO        = "/images/contact-hero-desktop-v5.jpg";
const CONTACT_HERO_MOBILE = "/images/contact-hero-mobile-v4.jpg";
const BG_PATTERN   = "/images/bg-pattern.png";
const CTA_PATTERN  = "/images/cta-pattern.png";

const ICON_EMAIL_SVG = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_392_6816" fill="white"><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"/></mask><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#E4ECE5"/><path d="M0 20M40 20M40 20M0 20M20 0M40 20M20 40M0 20M20 40V39C9.50659 39 1 30.4934 1 20H0H-1C-1 31.598 8.40202 41 20 41V40ZM40 20H39C39 30.4934 30.4934 39 20 39V40V41C31.598 41 41 31.598 41 20H40ZM20 0V1C30.4934 1 39 9.50659 39 20H40H41C41 8.40202 31.598 -1 20 -1V0ZM20 0V-1C8.40202 -1 -1 8.40202 -1 20H0H1C1 9.50659 9.50659 1 20 1V0Z" fill="#2E4A3A" mask="url(#path-1-inside-1_392_6816)"/><path d="M26.6663 16C26.6663 15.2667 26.0663 14.6667 25.333 14.6667H14.6663C13.933 14.6667 13.333 15.2667 13.333 16M26.6663 16V24C26.6663 24.7333 26.0663 25.3333 25.333 25.3333H14.6663C13.933 25.3333 13.333 24.7333 13.333 24V16M26.6663 16L19.9997 20.6667L13.333 16" stroke="#2E4A3A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const ICON_WHATSAPP_SVG = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_392_6822" fill="white"><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"/></mask><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#E4ECE5"/><path d="M0 20M40 20M40 20M0 20M20 0M40 20M20 40M0 20M20 40V39C9.50659 39 1 30.4934 1 20H0H-1C-1 31.598 8.40202 41 20 41V40ZM40 20H39C39 30.4934 30.4934 39 20 39V40V41C31.598 41 41 31.598 41 20H40ZM20 0V1C30.4934 1 39 9.50659 39 20H40H41C41 8.40202 31.598 -1 20 -1V0ZM20 0V-1C8.40202 -1 -1 8.40202 -1 20H0H1C1 9.50659 9.50659 1 20 1V0Z" fill="#2E4A3A" mask="url(#path-1-inside-1_392_6822)"/><path d="M19.5647 12.018C20.3066 11.9665 21.0617 12.0264 21.7857 12.1871C23.6348 12.6004 25.2752 13.657 26.412 15.1669C27.7943 16.9793 28.3127 19.4018 27.8147 21.6212C27.4045 23.4554 26.3559 25.086 24.8545 26.2246C23.342 27.3798 21.4615 27.9525 19.5588 27.8374C19.2004 27.8163 18.8937 27.7483 18.5441 27.7009C18.0561 27.6633 17.1371 27.3048 16.6815 27.1105C16.5971 27.0925 16.3795 26.9255 16.3101 26.9209C16.025 26.9023 15.4673 27.0835 15.2044 27.1513L13.3372 27.6401C12.9816 27.7336 12.3026 27.8586 12 28C12.0857 27.7779 12.1402 27.5035 12.2065 27.2685L12.9801 24.4503C13.0318 24.2667 13.1037 24.0667 13.1348 23.8813C13.0412 23.6453 12.8521 23.3598 12.7415 23.1066C12.1972 21.8602 12.0044 20.5981 12.1166 19.2461C12.2523 17.5074 12.968 15.8637 14.1497 14.5765C15.5435 13.0437 17.4908 12.1236 19.5647 12.018ZM14.5641 23.6785C14.429 24.229 14.2809 24.7762 14.1199 25.3198C14.0388 25.6032 13.9833 25.85 13.8809 26.134C14.4578 25.9621 15.0391 25.8049 15.6241 25.6626C15.8626 25.6031 16.171 25.5095 16.4126 25.4805C16.6643 25.5741 16.9552 25.7721 17.2061 25.8908C17.8054 26.1743 18.4404 26.3598 19.0942 26.4576C19.4245 26.5175 19.6938 26.52 20.0261 26.5188C21.3552 26.524 22.6542 26.1256 23.7501 25.3769C26.8193 23.2673 27.6071 19.1524 25.4482 16.1037C24.1694 14.298 22.0492 13.2392 19.8279 13.3322C19.5455 13.3492 19.1727 13.3686 18.8953 13.4156C17.4111 13.6814 16.0608 14.4392 15.0638 15.5657C13.8667 16.9092 13.3174 18.5756 13.4262 20.366C13.4838 21.2652 13.7272 22.1428 14.1414 22.9439C14.2254 23.106 14.5231 23.5599 14.5641 23.6785Z" fill="#2E4A3A"/><path d="M17.0388 16.2878C17.2406 16.2648 17.5739 16.2562 17.7757 16.2993C17.8761 16.3207 17.9074 16.3638 17.9553 16.4496C18.1121 16.7373 18.2296 17.0692 18.3545 17.3716C18.4188 17.5274 18.7375 18.1972 18.7024 18.3233L18.6995 18.3334C18.5959 18.7044 18.2315 18.9495 18.0534 19.2655C17.9659 19.4206 18.3262 19.8848 18.4244 20.0204C19.0099 20.8298 19.8128 21.4609 20.7382 21.8429C20.8379 21.884 20.9979 21.9279 21.1107 21.8869C21.3461 21.8113 21.855 20.9515 21.999 20.903C22.2625 20.8141 23.6066 21.575 23.907 21.7045C23.9761 21.7416 24.0379 21.7823 24.0514 21.8661C24.0943 22.1334 24.0064 22.6344 23.8728 22.8597C23.8657 22.8721 23.8584 22.8843 23.8509 22.8965C23.6197 23.2688 23.093 23.5611 22.6745 23.6597C22.4437 23.7141 22.2003 23.7384 21.9635 23.7197C21.1504 23.6555 20.0536 23.1681 19.3563 22.7382C18.1667 22.0048 16.3734 20.0675 16.0578 18.7042C16.0208 18.5443 16.0162 18.3757 16.0146 18.2122C16.01 17.7567 16.0657 17.3614 16.3141 16.9684C16.4707 16.7205 16.7366 16.3563 17.0388 16.2878Z" fill="#2E4A3A"/></svg>`;

const ICON_INSTAGRAM_SVG = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_392_6828" fill="white"><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"/></mask><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#E4ECE5"/><path d="M0 20M40 20M40 20M0 20M20 0M40 20M20 40M0 20M20 40V39C9.50659 39 1 30.4934 1 20H0H-1C-1 31.598 8.40202 41 20 41V40ZM40 20H39C39 30.4934 30.4934 39 20 39V40V41C31.598 41 41 31.598 41 20H40ZM20 0V1C30.4934 1 39 9.50659 39 20H40H41C41 8.40202 31.598 -1 20 -1V0ZM20 0V-1C8.40202 -1 -1 8.40202 -1 20H0H1C1 9.50659 9.50659 1 20 1V0Z" fill="#2E4A3A" mask="url(#path-1-inside-1_392_6828)"/><g clip-path="url(#clip0_392_6828)"><path d="M23.6663 16.3333H23.673M16.6663 13.3333H23.333C25.174 13.3333 26.6663 14.8257 26.6663 16.6667V23.3333C26.6663 25.1743 25.174 26.6667 23.333 26.6667H16.6663C14.8254 26.6667 13.333 25.1743 13.333 23.3333V16.6667C13.333 14.8257 14.8254 13.3333 16.6663 13.3333ZM22.6663 19.58C22.7486 20.1348 22.6538 20.7015 22.3955 21.1993C22.1372 21.6972 21.7284 22.1009 21.2274 22.3531C20.7264 22.6053 20.1586 22.6931 19.6049 22.604C19.0511 22.5148 18.5395 22.2534 18.1429 21.8568C17.7463 21.4602 17.4848 20.9486 17.3957 20.3948C17.3066 19.841 17.3944 19.2733 17.6466 18.7723C17.8987 18.2712 18.3025 17.8625 18.8003 17.6042C19.2982 17.3458 19.8648 17.2511 20.4197 17.3333C20.9856 17.4173 21.5096 17.681 21.9141 18.0855C22.3187 18.4901 22.5824 19.0141 22.6663 19.58Z" stroke="#2E4A3A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></g><defs><clipPath id="clip0_392_6828"><rect width="16" height="16" fill="white" transform="translate(12 12)"/></clipPath></defs></svg>`;

const ICON_LINKEDIN_SVG = `<svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg"><mask id="path-1-inside-1_392_6834" fill="white"><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z"/></mask><path d="M0 20C0 8.95431 8.95431 0 20 0C31.0457 0 40 8.95431 40 20C40 31.0457 31.0457 40 20 40C8.95431 40 0 31.0457 0 20Z" fill="#E4ECE5"/><path d="M0 20M40 20M40 20M0 20M20 0M40 20M20 40M0 20M20 40V39C9.50659 39 1 30.4934 1 20H0H-1C-1 31.598 8.40202 41 20 41V40ZM40 20H39C39 30.4934 30.4934 39 20 39V40V41C31.598 41 41 31.598 41 20H40ZM20 0V1C30.4934 1 39 9.50659 39 20H40H41C41 8.40202 31.598 -1 20 -1V0ZM20 0V-1C8.40202 -1 -1 8.40202 -1 20H0H1C1 9.50659 9.50659 1 20 1V0Z" fill="#2E4A3A" mask="url(#path-1-inside-1_392_6834)"/><path d="M22.6663 17.3333C23.7272 17.3333 24.7446 17.7548 25.4948 18.5049C26.2449 19.2551 26.6663 20.2725 26.6663 21.3333V26H23.9997V21.3333C23.9997 20.9797 23.8592 20.6406 23.6091 20.3905C23.3591 20.1405 23.02 20 22.6663 20C22.3127 20 21.9736 20.1405 21.7235 20.3905C21.4735 20.6406 21.333 20.9797 21.333 21.3333V26H18.6663V21.3333C18.6663 20.2725 19.0878 19.2551 19.8379 18.5049C20.5881 17.7548 21.6055 17.3333 22.6663 17.3333Z" stroke="#2E4A3A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M15.9997 18H13.333V26H15.9997V18Z" stroke="#2E4A3A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/><path d="M14.6663 16C15.4027 16 15.9997 15.403 15.9997 14.6667C15.9997 13.9303 15.4027 13.3333 14.6663 13.3333C13.93 13.3333 13.333 13.9303 13.333 14.6667C13.333 15.403 13.93 16 14.6663 16Z" stroke="#2E4A3A" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round"/></svg>`;

const contactMethods = [
  {
    iconSvg: ICON_EMAIL_SVG,
    label: "EMAIL",
    value: "ekingumus@pinecounseling.com",
    href: "mailto:ekingumus@pinecounseling.com",
  },
  {
    iconSvg: ICON_WHATSAPP_SVG,
    label: "WHATSAPP",
    value: "+90 (545) 450 59 28",
    href: "https://wa.me/905454505928",
  },
  {
    iconSvg: ICON_INSTAGRAM_SVG,
    label: "INSTAGRAM",
    value: "instagram.com/pinecounseling",
    href: "https://instagram.com/pinecounseling",
  },
  {
    iconSvg: ICON_LINKEDIN_SVG,
    label: "LINKEDIN",
    value: "pine-college-counseling",
    href: "https://www.linkedin.com/company/pine-college-counseling/",
  },
];

const inputClass =
  "w-full bg-bg-primary border border-brand rounded-xs drop-shadow-[4px_8px_5px_rgba(0,0,0,0.25)] font-body text-text-primary placeholder:text-text-primary/40 focus:outline-none focus:bg-bg-secondary [&:not(:placeholder-shown)]:bg-bg-secondary transition-colors duration-150";

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const { lang } = useLanguage();
  const tp = translations[lang].contactPage;

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(form.subject || "Pine Counseling — Website Inquiry");
    const body = encodeURIComponent(
      `Name: ${form.name}\n\n${form.message}`
    );
    window.location.href = `mailto:ekingumus@pinecounseling.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
  }

  return (
    <main>
      <Nav />

      <PageHero
        eyebrow={tp.hero.eyebrow}
        title={tp.hero.title}
        description={tp.hero.description}
        imageSrc={CONTACT_HERO}
        mobileImageSrc={CONTACT_HERO_MOBILE}
        imageAlt="Contact Pine Counseling"
        gradientDeg={229}
      />

      {/* ── Form + Reach Out ── */}
      <section
        className="relative overflow-hidden px-6 md:px-40"
        style={{ paddingTop: 60, paddingBottom: 80 }}
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
          className="relative z-10 flex flex-col md:flex-row md:items-start gap-[40px] md:gap-[100px]"
          style={{ maxWidth: 1120, marginLeft: "auto", marginRight: "auto" }}
        >
          {/* Left: form */}
          <motion.div
            initial={{ opacity: 0, x: -40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-[24px] w-full md:w-[580px] md:flex-shrink-0"
          >
            <p
              className="font-heading font-bold text-text-primary text-[20px] md:text-[24px]"
              style={{ lineHeight: "32px" }}
            >
              {tp.form.heading}
            </p>

            {submitted ? (
              <div
                className="bg-bg-secondary border-[1.5px] border-border-strong rounded-md drop-shadow-[4px_8px_5px_rgba(0,0,0,0.25)] flex flex-col items-center justify-center gap-[16px] text-center"
                style={{ padding: 40, minHeight: 200 }}
              >
                <p className="font-heading font-bold text-text-primary" style={{ fontSize: 20 }}>
                  {tp.form.successHeading}
                </p>
                <p className="font-body text-text-primary" style={{ fontSize: 16 }}>
                  {tp.form.successBody}
                </p>
                <p className="font-body text-text-secondary" style={{ fontSize: 13 }}>
                  {tp.form.successFallback}{" "}
                  <a
                    href="mailto:ekingumus@pinecounseling.com"
                    className="text-brand underline font-medium"
                  >
                    ekingumus@pinecounseling.com
                  </a>
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col gap-[24px]">
                <div className="flex flex-col gap-[8px]">
                  <label className="font-body font-medium text-text-primary" style={{ fontSize: 13 }}>
                    {tp.form.name}
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder={tp.form.namePlaceholder}
                    className={inputClass}
                    style={{ height: 48, paddingLeft: 16, paddingRight: 16, fontSize: 14, lineHeight: "20px" }}
                  />
                </div>

                <div className="flex flex-col gap-[8px]">
                  <label className="font-body font-medium text-text-primary" style={{ fontSize: 13 }}>
                    {tp.form.subject}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder={tp.form.subjectPlaceholder}
                    className={inputClass}
                    style={{ height: 48, paddingLeft: 16, paddingRight: 16, fontSize: 14, lineHeight: "20px" }}
                  />
                </div>

                <div className="flex flex-col gap-[8px]">
                  <label className="font-body font-medium text-text-primary" style={{ fontSize: 13 }}>
                    {tp.form.message}
                  </label>
                  <textarea
                    name="message"
                    required
                    value={form.message}
                    onChange={handleChange}
                    placeholder={tp.form.messagePlaceholder}
                    className={`${inputClass} resize-none`}
                    style={{ height: 120, padding: 16, fontSize: 14, lineHeight: "20px" }}
                  />
                </div>

                <div className="flex flex-col gap-[16px] items-start">
                  <button
                    type="submit"
                    className="bg-brand text-text-on-dark font-body font-bold rounded-xs drop-shadow-[4px_8px_5px_rgba(0,0,0,0.25)] hover:opacity-90 transition-opacity"
                    style={{ fontSize: 18, paddingLeft: 28, paddingRight: 28, paddingTop: 12, paddingBottom: 12 }}
                  >
                    {tp.form.submit}
                  </button>
                  <p
                    className="font-body font-bold text-brand uppercase"
                    style={{ fontSize: 12, letterSpacing: "2.5px" }}
                  >
                    {tp.form.disclaimer}
                  </p>
                </div>
              </form>
            )}
          </motion.div>

          {/* Right: reach out directly */}
          <motion.div
            initial={{ opacity: 0, x: 40, scale: 0.97 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.75, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-col gap-[24px] w-full md:flex-1"
          >
            <p
              className="font-heading font-bold text-text-primary text-[20px] md:text-[24px]"
              style={{ lineHeight: "32px" }}
            >
              {tp.reach.heading}
            </p>
            <p
              className="font-body text-text-primary text-[14px] md:text-[16px]"
              style={{ lineHeight: "26px" }}
            >
              {tp.reach.body}
            </p>

            <div className="flex flex-col gap-[20px] md:gap-[24px]">
              {contactMethods.map((method, i) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  target={method.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={method.href.startsWith("mailto") ? undefined : "noreferrer"}
                  initial={{ opacity: 0, x: 24 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.2, ease: [0.22, 1, 0.36, 1] }}
                  className="flex gap-[16px] items-center"
                >
                  <span
                    aria-hidden
                    className="flex-shrink-0"
                    style={{ width: 40, height: 40, display: "inline-flex" }}
                    dangerouslySetInnerHTML={{ __html: method.iconSvg }}
                  />
                  <div className="flex flex-col gap-[2px]">
                    <p
                      className="font-body font-bold text-brand uppercase"
                      style={{ fontSize: 12, letterSpacing: "2.5px" }}
                    >
                      {method.label}
                    </p>
                    <p
                      className="font-body font-medium text-text-primary underline decoration-solid break-all"
                      style={{ fontSize: 14 }}
                    >
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <CTABanner bgPattern={CTA_PATTERN} />
      <Footer />
    </main>
  );
}
