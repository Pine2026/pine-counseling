"use client";

import { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Lang = "EN" | "TR";

interface LanguageCtx {
  lang: Lang;
  setLang: (l: Lang) => void;
}

const LanguageContext = createContext<LanguageCtx>({ lang: "EN", setLang: () => {} });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangRaw] = useState<Lang>("EN");

  useEffect(() => {
    const saved = localStorage.getItem("pine_lang") as Lang | null;
    if (saved === "EN" || saved === "TR") setLangRaw(saved);
  }, []);

  function setLang(l: Lang) {
    setLangRaw(l);
    localStorage.setItem("pine_lang", l);
  }

  return (
    <LanguageContext.Provider value={{ lang, setLang }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
