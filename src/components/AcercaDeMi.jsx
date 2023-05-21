"use client";

import Aos from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";

export const AcercaDeMi = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-white py-24 px-16">
      <div
        data-aos="fade-right"
        className="max-w-[1000px] mx-auto grid grid-cols-2 gap-8"
      >
        <div>
          <Image
            src="/images/pc-setup.jpg"
            alt="imagen"
            width={700}
            height={700}
            className="rounded-xl h-[100%] w-[100%] object-cover object-center"
          />
        </div>
        <div className="flex flex-col gap-2">
          <h1 className="text-emerald-600 font-extrabold text-lg uppercase">
            Acerca de mí
          </h1>

          <h1 className="text-2xl font-extrabold">
            Pasión por el desarrollo y la innovación tecnológica
          </h1>

          <p className="mt-4">
            ¡Hola! Soy Daniel, un joven desarrollador autodidacta de 19 años con
            una pasión ardiente por la programación. Desde que me sumergí en el
            mundo del desarrollo a los 15 años, he cultivado una mente inquieta
            y curiosa, siempre buscando expandir mis conocimientos y
            habilidades. Mi dedicación incansable y mi capacidad para aprender
            rápidamente me han permitido dominar diversos lenguajes y
            tecnologías.
          </p>
          <p className="mt-2">
            Como persona, me considero alguien curioso, creativo y comprometido
            con el aprendizaje continuo. Disfruto enfrentando nuevos desafíos y
            siempre busco oportunidades para mejorar mis habilidades y
            conocimientos.
          </p>
        </div>
      </div>
    </div>
  );
};
