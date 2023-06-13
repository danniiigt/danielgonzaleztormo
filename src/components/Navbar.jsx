"use client";

import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { i18n, t } = useTranslation();
  const [languageSelected, setLanguageSelected] = useState(i18n.language);

  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    section.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
    setLanguageSelected(language);
  };

  useEffect(() => {
    setLanguageSelected(i18n.language);
  }, [i18n.language]);

  return (
    <div className="w-full px-6 lg:px-16 sticky top-0 bg-white z-50 shadow">
      <div className="max-w-[1000px] h-[80px] bg-white mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-xl font-extrabold">DanielGT</h1>
        </div>

        <div>
          <ul className="md:flex items-center hidden gap-8 ">
            <li>
              <button
                onClick={scrollToTop}
                className="hover:text-emerald-700 transition-all duration-100"
              >
                {t("Inicio")}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("acerca-de-mi")}
                className="hover:text-emerald-700 transition-all duration-100"
              >
                {t("Acerca de mí")}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="hover:text-emerald-700 transition-all duration-100"
              >
                Portfolio
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("estudios")}
                className="hover:text-emerald-700 transition-all duration-100"
              >
                {t("Estudios")}
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("contacto")}
                className="hover:text-emerald-700 transition-all duration-100"
              >
                {t("Contacto")}
              </button>
            </li>
            <select
              className="border rounded shadow-sm py-1 px-2 outline-none focus:ring-neutral-500 focus:border-neutral-500 text-neutral-500 text-sm font-light"
              data-width="fit"
              value={languageSelected}
              onChange={(e) => {
                changeLanguage(e.target.value);
              }}
            >
              <option value="es">Español</option>
              <option value="en">English</option>
            </select>
          </ul>
        </div>
        <ul className="md:hidden block">
          <div>
            <div className="relative group">
              <button
                className="flex flex-col h-12 w-12 rounded justify-center items-center group"
                onClick={() => setIsOpen(!isOpen)}
              >
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen
                      ? "rotate-45 translate-y-3 opacity-100 bg-gray-600 group-hover:opacity-100"
                      : "opacity-50 group-hover:opacity-100"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
                  }`}
                />
                <div
                  className={`${genericHamburgerLine} ${
                    isOpen
                      ? "-rotate-45 -translate-y-3 opacity-100 bg-gray-600 group-hover:opacity-100"
                      : "opacity-50 group-hover:opacity-100"
                  }`}
                />
              </button>
            </div>
          </div>
        </ul>
      </div>
      {isOpen && (
        <>
          <hr />
          <div className="bg-white h-screen w-full overflow-hidden">
            <ul className="flex flex-col mt-8 justify-center items-center gap-8">
              <li>
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                    scrollToTop();
                  }}
                  href="#inicio"
                  className="hover:text-emerald-700 transition-all duration-100"
                >
                  {t("Inicio")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                    scrollToSection("acerca-de-mi");
                  }}
                  className="hover:text-emerald-700 transition-all duration-100"
                >
                  {t("Acerca de mí")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                    scrollToSection("portfolio");
                  }}
                  className="hover:text-emerald-700 transition-all duration-100"
                >
                  {t("Portfolio")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                    scrollToSection("estudios");
                  }}
                  className="hover:text-emerald-700 transition-all duration-100"
                >
                  {t("Estudios")}
                </button>
              </li>
              <li>
                <button
                  onClick={() => {
                    setIsOpen(!isOpen);
                    scrollToSection("contacto");
                  }}
                  className="hover:text-emerald-700 transition-all duration-100"
                >
                  {t("Contacto")}
                </button>
              </li>
              <li>
                <select
                  className="border rounded shadow-sm py-1 px-2 outline-none focus:ring-neutral-500 focus:border-neutral-500 text-neutral-500 text-sm font-light"
                  data-width="fit"
                  value={languageSelected}
                  onChange={(e) => {
                    changeLanguage(e.target.value);
                  }}
                >
                  <option value="es">Español</option>
                  <option value="en">English</option>
                </select>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
