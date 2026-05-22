"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface PageHeroProps {
  imageSrc: string;
  mobileImageSrc?: string;
  imageAlt: string;
  eyebrow: string;
  title: string | React.ReactNode;
  description?: string;
  gradientDeg?: number;
  imageStyle?: React.CSSProperties;
}

export default function PageHero({
  imageSrc,
  mobileImageSrc,
  imageAlt,
  eyebrow,
  title,
  description,
  gradientDeg = 229,
  imageStyle,
}: PageHeroProps) {
  return (
    <section
      className="relative overflow-hidden border-t border-b border-border-strong shadow-[0px_10px_20px_0px_rgba(0,0,0,0.4)] flex flex-col justify-center px-6 lg:px-40 min-h-[320px] lg:min-h-[520px] z-[1] page-hero-pt pb-10 lg:pb-20 bg-brand"
    >
      {/* Background */}
      {/* hero-bg-top offsets background below nav so browser chrome shows brand green, not the hero image */}
      <div className="absolute inset-0 hero-bg-top overflow-hidden pointer-events-none" aria-hidden>
        {/* Image starts below the fixed nav so the very top of each image is the first visible content */}
        {mobileImageSrc ? (
          <>
            <div className="absolute inset-0 lg:hidden">
              <Image src={mobileImageSrc} alt={imageAlt} fill sizes="100vw" quality={100} className="object-cover object-top" priority fetchPriority="high" style={imageStyle} />
            </div>
            <div className="absolute inset-0 hidden lg:block">
              <Image src={imageSrc} alt={imageAlt} fill sizes="100vw" quality={100} className="object-cover object-top" priority fetchPriority="high" style={imageStyle} />
            </div>
          </>
        ) : (
          <div className="absolute inset-0">
            <Image src={imageSrc} alt={imageAlt} fill sizes="100vw" quality={100} className="object-cover object-top" priority fetchPriority="high" style={imageStyle} />
          </div>
        )}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `linear-gradient(${gradientDeg}deg, rgba(109, 176, 138, 0) 10.286%, rgb(46, 74, 58) 100.53%)`,
          }}
        />
      </div>

      {/* Content — constrained to 1120px to align with page sections */}
      <div
        className="relative z-10 w-full flex flex-col"
        style={{ maxWidth: 1120, marginLeft: "auto", marginRight: "auto", gap: 14 }}
      >
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
          className="font-body font-bold text-text-on-dark uppercase tracking-[2.5px] whitespace-nowrap text-[12px] lg:text-[16px]"
        >
          {eyebrow}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] }}
          className="font-heading font-bold text-text-on-dark text-[36px] leading-[42px] lg:text-[56px] lg:leading-[64px] w-full lg:w-[720px]"
        >
          {typeof title === "string" ? (
            title.split("\n").map((line, i, arr) => (
              <p key={i} style={{ marginBottom: i < arr.length - 1 ? 0 : undefined }}>
                {line}
              </p>
            ))
          ) : (
            title
          )}
        </motion.div>

        {description && (
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.35, ease: "easeOut" }}
            className="font-body text-text-on-dark text-base lg:text-[20px] leading-normal lg:leading-[26px] w-full lg:w-[560px]"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
