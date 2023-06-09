"use client";

import Aos from "aos";
import Image from "next/image";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";

export const AcercaDeMi = () => {
  const { t } = useTranslation();

  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div id="acerca-de-mi" className="bg-white py-12 lg:py-24 px-6 lg:px-16">
      <div
        data-aos="fade-right"
        className="max-w-[1100px] mx-auto grid lg:grid-cols-2 grid-cols-1 gap-x-16 gap-y-8"
      >
        <div className="relative">
          <Image
            src="/images/pc-setup.jpg"
            alt="imagen"
            width={700}
            height={700}
            className="rounded-xl h-[100%] w-[100%] object-cover object-center"
          />

          <div className="absolute bottom-[-20px] right-[-20px] bg-white p-1 rounded-full shadow">
            <Image
              src="/images/acerca-de-mi-pin.svg"
              alt="pin"
              width={125}
              height={125}
              className="rotate-animation"
            />
          </div>
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-emerald-600 font-extrabold text-lg uppercase">
            {t("Acerca de mí")}
          </h1>

          <h1 className="text-2xl font-extrabold">
            {t("Pasión por el desarrollo y la innovación tecnológica")}
          </h1>

          <p className="mt-4">
            {t(
              "¡Hola! Soy Daniel, un joven desarrollador autodidacta de 19 años con una pasión ardiente por la programación. Desde que me sumergí en el mundo del desarrollo a los 15 años, he cultivado una mente inquieta y curiosa, siempre buscando expandir mis conocimientos y habilidades. Mi dedicación incansable y mi capacidad para aprender rápidamente me han permitido dominar diversos lenguajes y tecnologías."
            )}
          </p>
          <p className="mt-2">
            {t(
              "Como persona, me considero alguien curioso, creativo y comprometido con el aprendizaje continuo. Disfruto enfrentando nuevos desafíos y siempre busco oportunidades para mejorar mis habilidades y conocimientos."
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
