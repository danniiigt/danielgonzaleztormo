"use client";

import { PortfolioItem } from "./PortfolioItem";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { TechChip } from "./TechChip";
import { useTranslation } from "react-i18next";

export const Portfolio = () => {
  const { t } = useTranslation();

  return (
    <div id="portfolio" className="bg-gray-100 py-12 lg:py-24 px-6 lg:px-16">
      <div className="max-w-[1000px] mx-auto">
        <div>
          <h1 className="text-emerald-600 font-extrabold text-lg uppercase">
            {t("Portfolio")}
          </h1>
          <h1 className="text-2xl font-extrabold">
            {t("Estos son algunos de mis proyectos personales 🧩")}
          </h1>
        </div>

        <div className="flex flex-col gap-8 lg:gap-16 mt-12">
          <PortfolioItem
            imageRedirectUrl="https://padel-app-two.vercel.app/"
            imageUrl="https://camo.githubusercontent.com/77208d4f99c243e0449337850e60d380afcf3a1b41b6e04b716464b0ad0529c7/68747470733a2f2f692e696d6775722e636f6d2f516c4335684c4e2e706e67"
          >
            <div className="flex flex-col gap-4 lg:px-4">
              <h1 className="text-xl font-extrabold underline decoration-emerald-700">
                {t("Padel App")}
              </h1>
              <p>
                {t(
                  "El proyecto consiste en una aplicación completa de reserva de pistas de pádel. Un tipo de usuarios crean pistas, con sus horarios y precios determinados y otros usuarios pueden reservar estas pistas."
                )}
              </p>

              <p>
                {t(
                  "El objetivo principal es eliminar a la persona intermediaria que se encarga de atender a los clientes, reservar las pistas... etc y automatizar el proceso."
                )}
              </p>

              <div className="flex flex-wrap gap-2">
                <TechChip text="React" />
                <TechChip text="Next.js" />
                <TechChip text="PostgresSQL" />
                <TechChip text="Material UI" />
                <TechChip text="Node.js" />
                <TechChip text="Prisma.js" />
                <TechChip text="Google Maps" />
              </div>

              <div className="flex gap-4">
                <Link
                  href="https://github.com/danniiigt/padel-app-tfg"
                  target="_blank"
                  className="bg-emerald-900 text-white px-4 py-2 rounded-lg flex items-center gap-4 text-sm transition-all duration-300 hover:bg-emerald-700"
                >
                  {t("Código")}
                  <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
                </Link>
                <Link
                  href="https://padel-app-two.vercel.app/"
                  target="_blank"
                  className="bg-emerald-900 text-white px-4 py-2 rounded-lg flex items-center gap-4 text-sm transition-all duration-300 hover:bg-emerald-700"
                >
                  {t("Demo")}
                  <FontAwesomeIcon icon={faEye} className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </PortfolioItem>
          <PortfolioItem
            imageRight
            imageRedirectUrl="https://coches-de-ocasion.vercel.app/"
            imageUrl="https://i.imgur.com/wj3VpNs.png"
          >
            <div className="flex flex-col gap-4 lg:px-4">
              <h1 className="text-xl font-extrabold underline decoration-emerald-700">
                {t("Coches de ocasión")}
              </h1>
              <p>
                {t(
                  "El proyecto consiste en una réplica de coches.net y flexicar donde ver coches de ocasión y poder contactar con el vendedor."
                )}
              </p>

              <p>
                {t(
                  "Los coches son importados de coches.net y flexicar mediante web scrapping"
                )}
              </p>

              <div className="flex flex-wrap gap-2">
                <TechChip text="React" />
                <TechChip text="Redux" />
                <TechChip text="Context" />
                <TechChip text="Material UI" />
                <TechChip text="Node.js" />
                <TechChip text="MongoDB" />
                <TechChip text="Animate On Scroll" />
                <TechChip text="React Router" />
              </div>

              <div className="flex gap-4">
                <Link
                  href="https://github.com/danniiigt/Coches-de-Ocasion-FrontEnd"
                  target="_blank"
                  className="bg-emerald-900 text-white px-4 py-2 rounded-lg flex items-center gap-4 text-sm transition-all duration-300 hover:bg-emerald-700"
                >
                  {t("Código")}
                  <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
                </Link>
                <Link
                  href="https://coches-de-ocasion.vercel.app/"
                  target="_blank"
                  className="bg-emerald-900 text-white px-4 py-2 rounded-lg flex items-center gap-4 text-sm transition-all duration-300 hover:bg-emerald-700"
                >
                  {t("Demo")}
                  <FontAwesomeIcon icon={faEye} className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </PortfolioItem>
        </div>
      </div>
    </div>
  );
};
