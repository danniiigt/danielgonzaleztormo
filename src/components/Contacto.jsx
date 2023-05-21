"use client";

import Link from "next/link";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const Contacto = () => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  return (
    <div className="bg-gray-50 py-24 px-16">
      <div data-aos={"fade-left"} className="max-w-[1000px] mx-auto">
        <div>
          <h1 className="text-emerald-600 font-extrabold text-lg uppercase">
            Contacto
          </h1>
          <h1 className="text-2xl font-extrabold">
            ¿Quieres contactarme? ¡Escríbeme!
          </h1>
        </div>

        <div className="flex gap-24 justify-between items-center mt-12">
          <div className="flex gap-4 items-center">
            <div className="p-4 bg-white rounded-full shadow-md shadow-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-emerald-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                />
              </svg>
            </div>
            <div>
              <h1 className="font-extrabold">Ubicación</h1>
              <h1>Murcia, España</h1>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="p-4 bg-white rounded-full shadow-md shadow-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-8 h-8 text-emerald-700"
              >
                <path
                  strokeLinecap="round"
                  d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                />
              </svg>
            </div>
            <div>
              <h1 className="font-extrabold">Email</h1>
              <Link href="mailto:danielgonzaleztormo@gmail.com">
                danielgonzaleztormo@gmail.com
              </Link>
            </div>
          </div>
          <div className="flex gap-4 items-center">
            <div className="p-4 bg-white rounded-full shadow-md shadow-gray-300">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 text-emerald-700"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
            </div>
            <div>
              <h1 className="font-extrabold">Teléfono</h1>
              <Link href="tel:+34601361279">601361279</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};