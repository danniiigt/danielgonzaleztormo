import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "react-i18next";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import Image from "next/image";
import Link from "next/link";
import { TechChip } from "./TechChip";

export const HorizontalPortfolioItem = ({
  imageUrl,
  imageRedirectUrl = null,
  githubUrl,
  demoUrl,
  title,
}) => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  const { t } = useTranslation();

  return (
    <div
      data-aos={"fade-right"}
      className="bg-white rounded-lg shadow p-6 flex flex-col gap-4 w-full"
    >
      <Link
        href={imageRedirectUrl ? imageRedirectUrl : "#"}
        target="_blank"
        className="hover:brightness-75 transition-all duration-300 relative"
      >
        <Image
          src={imageUrl}
          alt="portfolio"
          width={600}
          height={400}
          className="w-full h-full lg:max-h-[275px] rounded-lg shadow object-cover object-top"
        />
      </Link>

      <hr className="my-2" />

      <div className="flex gap-2 justify-between items-center">
        <h1 className="text-xl font-extrabold underline decoration-emerald-700">
          {title}
        </h1>

        <div className="flex gap-4">
          <Link
            href={githubUrl ? githubUrl : "#"}
            target={demoUrl ? "_blank" : "_self"}
            className="text-emerald-900 border border-emerald-900/50 px-3 py-1.5 rounded-lg flex items-center gap-4 text-sm transition-all duration-300 hover:bg-emerald-300/10"
          >
            {t("Código")}
            <FontAwesomeIcon icon={faGithub} className="h-4 w-4" />
          </Link>
          <Link
            href={demoUrl ? demoUrl : "#"}
            target={demoUrl ? "_blank" : "_self"}
            className="bg-emerald-900 text-white px-3 py-1.5 rounded-lg flex items-center gap-4 text-sm transition-all duration-300 hover:bg-emerald-700"
          >
            {t("Demo")}
            <FontAwesomeIcon icon={faEye} className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};
