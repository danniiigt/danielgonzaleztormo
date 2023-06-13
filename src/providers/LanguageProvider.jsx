"use client";

import { I18nextProvider, useTranslation } from "react-i18next";
import i18n from "../../i18n";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export const LanguageProvider = (props) => {
  const { get } = useSearchParams();
  const lang = get("lang") || "es";
  const { i18n: i18nHook } = useTranslation();

  useEffect(() => {
    if (lang !== i18nHook.language) {
      i18nHook.changeLanguage(lang);
    }
  }, []);

  return <I18nextProvider i18n={i18n}>{props.children}</I18nextProvider>;
};
