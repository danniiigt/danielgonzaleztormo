"use client";

import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export const Presentacion = () => {
  const { t } = useTranslation();

  return (
    <div
      id="inicio"
      className="bg-gray-50 px-6 lg:px-16 py-16  min-h-[calc(100vh-80px)] flex items-center justify-center"
    >
      <div>
        <div
          data-aos="fade-down"
          className="max-w-[1100px] mx-auto flex justify-between flex-col lg:flex-row items-center"
        >
          <div className="lg:w-1/2 mt-16 w-full flex flex-col gap-4 order-2 lg:order-1">
            <div className="relative">
              <h1 className="text-6xl text-center lg:text-left leading-[1.2] font-extrabold text-gray-700">
                {t("Front-End React Developer")}
              </h1>
              <Image
                src="/images/saludo-mano.png"
                width={65}
                height={65}
                alt="saludo"
                className="absolute right-20 bottom-[5px] hidden lg:block"
              />
            </div>
            <div>
              <p className="text-center lg:text-left">
                {t(
                  "¡Hola! Soy Daniel, un apasionado desarrollador web especializado en React. Actualmente viviendo en Murcia, España 📍"
                )}
              </p>
            </div>
            <div className="flex justify-center lg:justify-normal gap-4 mt-4">
              <Link
                href="https://www.linkedin.com/in/danielgonzaleztormo/"
                target="_blank"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="h-6 w-6 cursor-pointer hover:text-emerald-700 transition-all duration-150"
                />
              </Link>
              <Link href="https://github.com/danniiigt">
                <FontAwesomeIcon
                  icon={faGithub}
                  className="h-6 w-6 cursor-pointer hover:text-emerald-700 transition-all duration-150"
                />
              </Link>
            </div>
          </div>
          <div className="w-fit flex-1 order-1 lg:order-2">
            <Image
              width={325}
              height={325}
              src="/images/yo.jpg"
              alt="imagen"
              className="h-[325px] w-[325px] ml-auto object-[0 -30px 0] rounded-full border-2 border-gray-700 object-cover image-animation"
            />
          </div>
        </div>
        <div
          data-aos="fade-down"
          className="flex justify-center lg:justify-normal gap-12 mt-16 items-center"
        >
          <h1 className="hidden lg:block">{t("Stack Tecnológico")}</h1>
          <div className="flex gap-4 flex-wrap justify-center lg:justify-normal">
            <div className="bg-white shadow rounded-full p-4">
              <Image src="/icons/html.svg" alt="html" width={25} height={25} />
            </div>
            <div className="bg-white shadow rounded-full p-4">
              <Image src="/icons/css.svg" alt="html" width={25} height={25} />
            </div>
            <div className="bg-white shadow rounded-full p-4">
              <Image
                src="/icons/javascript.svg"
                alt="html"
                width={25}
                height={25}
              />
            </div>
            <div className="bg-white shadow rounded-full p-4">
              <Image src="/icons/react.svg" alt="html" width={25} height={25} />
            </div>
            <div className="bg-white shadow rounded-full p-4 flex items-center justify-center">
              <Image src="/icons/next.svg" alt="html" width={35} height={35} />
            </div>
            <div className="bg-white shadow rounded-full p-4 flex items-center justify-center">
              <Image
                src="/icons/tailwind.svg"
                alt="html"
                width={25}
                height={25}
              />
            </div>
            <div className="bg-white shadow rounded-full p-4 flex items-center justify-center">
              <Image
                src="/icons/material-ui.svg"
                alt="html"
                width={25}
                height={25}
              />
            </div>
            <div className="bg-white shadow rounded-full p-4 flex items-center justify-center">
              <h1 className="text-gray-500 text-sm">{t("y más...")}</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
