"use client";

import { useLanguage } from "@/contexts/LanguageContext";

const ICON_CIRCLE = "/images/ticker-circle.svg";
const ICON_DIAMOND = "/images/ticker-diamond.svg";

const universitiesEN = [
  "Harvard",
  "Oxford",
  "MIT",
  "Sapienza Roma",
  "Amsterdam",
  "Sciences Po",
  "Edinburgh",
  "Padova",
  "KU Leuven",
  "TU Munich",
  "NABA",
];

const universitiesTR = [
  "Harvard",
  "Oxford",
  "MIT",
  "Sapienza Roma",
  "Amsterdam",
  "Sciences Po",
  "Edinburgh",
  "Padova",
  "KU Leuven",
  "TU Munich",
  "NABA",
];

export default function Ticker() {
  const { lang } = useLanguage();
  const universities = lang === "EN" ? universitiesEN : universitiesTR;
  // Two full copies for seamless loop — animation slides to -50%
  const items = [...universities, ...universities];

  return (
    <div
      className="bg-bg-secondary border-border-strong overflow-hidden flex items-center"
      style={{ borderTopWidth: 1.5, borderBottomWidth: 1.5, borderStyle: "solid", paddingTop: 16, paddingBottom: 16 }}
    >
      <div className="ticker-track flex items-center w-max">
        {items.map((uni, i) => (
          <span key={i} className="flex items-center shrink-0">
            <span
              className="font-heading font-medium text-brand whitespace-nowrap"
              style={{ fontSize: 16, paddingLeft: 36, paddingRight: 36 }}
            >
              {uni}
            </span>
            <img
              src={i % 3 === 0 ? ICON_CIRCLE : ICON_DIAMOND}
              alt=""
              aria-hidden
              className="flex-shrink-0 object-contain"
              style={{ width: i % 3 === 0 ? 16 : 13, height: i % 3 === 0 ? 16 : 13 }}
            />
          </span>
        ))}
      </div>
    </div>
  );
}
