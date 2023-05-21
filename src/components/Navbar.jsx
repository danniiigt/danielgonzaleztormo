import React from "react";

export const Navbar = () => {
  return (
    <div className="w-full px-6 lg:px-16 shadow-md">
      <div className="max-w-[1000px] h-[80px] mx-auto flex justify-between items-center">
        <div>
          <h1 className="text-xl font-extrabold">DanielGT</h1>
        </div>
        <div>
          <ul className="flex gap-8">
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
        </div>
      </div>
    </div>
  );
};
