import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";

export const Presentacion = () => {
  return (
    <div className="bg-gray-100 px-16 mt-1 h-[calc(100vh-90px)] flex items-center justify-center">
      <div>
        <div
          data-aos="fade-down"
          className="max-w-[1000px] mx-auto flex justify-between items-center"
        >
          <div className="w-1/2 flex flex-col gap-4">
            <div className="relative">
              <h1 className="text-6xl leading-[1.2] font-extrabold text-gray-700">
                Front-End React Developer
              </h1>
              <Image
                src="/images/saludo-mano.png"
                width={65}
                height={65}
                alt="saludo"
                className="absolute right-20 bottom-[5px]"
              />
            </div>
            <div>
              <p>
                ¡Hola! Soy Daniel, un apasionado desarrollador web especializado
                en React. Actualmente viviendo en Murcia, España 📍
              </p>
            </div>
            <div className="flex gap-4 mt-4">
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
          <div className="w-fit">
            <Image
              width={325}
              height={325}
              src="/images/yo.jpg"
              alt="imagen"
              className="h-[325px] w-[325px] object-top rounded-full object-cover"
            />
          </div>
        </div>
        <div data-aos="fade-down" className="flex gap-12 mt-16 items-center">
          <h1>Stack Tecnológico</h1>
          <div className="flex gap-4">
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
              <h1 className="text-gray-500 text-sm">y más...</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
