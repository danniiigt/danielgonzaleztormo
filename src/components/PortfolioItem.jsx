"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";
import Aos from "aos";

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
        className="bg-white rounded-lg shadow p-8 flex lg:flex-row flex-col gap-4 h-fit"
      >
        <div className="lg:w-[40%] w-full lg:order-1 order-2">{children}</div>
        <div className="lg:w-[60%] w-full lg:order-2 order-1">
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
      className="bg-white rounded-lg shadow p-8 flex lg:flex-row flex-col gap-4"
    >
      <div className="lg:w-[60%] w-full">
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
      <div className="lg:w-[40%] w-full">{children}</div>
    </div>
  );
};
