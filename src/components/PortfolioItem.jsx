"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

export const PortfolioItem = ({
  imageUrl,
  imageRedirectUrl = null,
  imageRight,
  children,
}) => {
  useEffect(() => {
    Aos.init({ duration: 1000, once: true });
  }, []);

  if (imageRight)
    return (
      <div
        data-aos={"fade-right"}
        className="bg-white rounded-lg shadow-md p-8 flex gap-4 "
      >
        <div className="w-[40%]">{children}</div>
        <div className="w-[60%]">
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
              className="w-full h-full rounded-lg shadow-md object-cover object-left"
            />
          </Link>
        </div>
      </div>
    );

  return (
    <div
      data-aos={"fade-left"}
      className="bg-white rounded-lg shadow-md p-8 flex gap-4 "
    >
      <div className="w-[60%]">
        <Link
          href={imageRedirectUrl ? imageRedirectUrl : "#"}
          target="_blank"
          className="hover:brightness-75 transition-all duration-300"
        >
          <Image
            src={imageUrl}
            alt="portfolio"
            width={600}
            height={400}
            className="w-full h-full rounded-lg shadow-md object-cover object-left"
          />
        </Link>
      </div>
      <div className="w-[40%]">{children}</div>
    </div>
  );
};
