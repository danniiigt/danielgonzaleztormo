"use client";
import { useTranslation } from "react-i18next";

export const TechChip = ({ text }) => {
  const { t } = useTranslation();

  return (
    <div className="bg-gray-400 rounded-xl py-1 px-2 text-white text-xs">
      {t(text)}
    </div>
  );
};
