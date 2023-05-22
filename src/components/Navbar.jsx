"use client";

import React, { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <div className="w-full px-6 lg:px-16 sticky top-0 bg-white z-50 shadow-md">
      <div className="max-w-[1000px] h-[80px] bg-white mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-xl font-extrabold">DanielGT</h1>
        </div>
        <div>
          <ul className="md:flex hidden gap-8">
            <li>
              <a
                href="#inicio"
                className="hover:text-emerald-700 hover:font-extrabold transition-all duration-200"
              >
                Inicio
              </a>
            </li>
            <li>
              <a
                href="#acerca-de-mi"
                className="hover:text-emerald-700 hover:font-extrabold transition-all duration-200"
              >
                Acerca de mí
              </a>
            </li>
            <li>
              <a
                href="#portfolio"
                className="hover:text-emerald-700 hover:font-extrabold transition-all duration-200"
              >
                Portfolio
              </a>
            </li>
            <li>
              <a
                href="#estudios"
                className="hover:text-emerald-700 hover:font-extrabold transition-all duration-200"
              >
                Estudios
              </a>
            </li>
            <li>
              <a
                href="#contacto"
                className="hover:text-emerald-700 hover:font-extrabold transition-all duration-200"
              >
                Contacto
              </a>
            </li>
          </ul>
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
                      isOpen
                        ? "opacity-0"
                        : "opacity-50 group-hover:opacity-100"
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
      </div>
      {isOpen && (
        <>
          <hr />
          <div className="bg-white h-screen w-screen">
            <ul className="flex flex-col mt-8 justify-center items-center gap-8">
              <li>
                <a
                  onClick={() => setIsOpen(!isOpen)}
                  href="#inicio"
                  className="hover:text-emerald-700 hover:font-extrabold transition-all duration-200"
                >
                  Inicio
                </a>
              </li>
              <li>
                <a
                  onClick={() => setIsOpen(!isOpen)}
                  href="#acerca-de-mi"
                  className="hover:text-emerald-700 hover:font-extrabold transition-all duration-200"
                >
                  Acerca de mí
                </a>
              </li>
              <li>
                <a
                  onClick={() => setIsOpen(!isOpen)}
                  href="#portfolio"
                  className="hover:text-emerald-700 hover:font-extrabold transition-all duration-200"
                >
                  Portfolio
                </a>
              </li>
              <li>
                <a
                  onClick={() => setIsOpen(!isOpen)}
                  href="#estudios"
                  className="hover:text-emerald-700 hover:font-extrabold transition-all duration-200"
                >
                  Estudios
                </a>
              </li>
              <li>
                <a
                  onClick={() => setIsOpen(!isOpen)}
                  href="#contacto"
                  className="hover:text-emerald-700 hover:font-extrabold transition-all duration-200"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>
        </>
      )}
    </div>
  );
};
