import Image from "next/image";
import React from "react";
import SessionWrapper from "../../layout/SessionWrapper";
import LogoWhite from "@/public/images/core/logo-white.png";
import { FooterBreadcrumb } from "./FooterBreadcrumb";
import FaceBookIcon from "@/public/icons/facebook.svg";
import InstagramIcon from "@/public/icons/instagram.svg";
import YoutubeIcon from "@/public/icons/youtube.svg";
import TiktokIcon from "@/public/icons/tiktok.svg";

const Footer = () => {
  return (
    <footer className="py-[30px] lg:py-[60px] bg-[#2D2D2D] flex gap-6 flex-wrap items-center justify-center">
      <SessionWrapper className="flex flex-col lg:flex-row items-start gap-[50px] lg:gap-[100px]">
        <div className="flex flex-col gap-[60px] lg:w-[544px]">
          <Image
            className="w-[200px] h-[60px] lg:w-[364px] lg:h-[94px]"
            src={LogoWhite}
            alt="footer-image"
            width={364}
            height={94}
            priority
            sizes="(max-width: 1024px) 200px, 364px"
          />
          <FooterBreadcrumb />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[277px_277px_113px] max-w-[667px] w-full">
          <div className="flex flex-col gap-[55px]">
            <div>
              <h2 className="text-background mb-2 font-medium text-[10px] leading-[13px] tracking-[4%]">
                Contact us
              </h2>
              <h2 className="text-background text-[24px] leading-[28px]">+02 8006 3344</h2>
            </div>
            <div className="flex gap-4">
              <Image
                src={FaceBookIcon}
                alt="Facebook"
                width={24}
                height={24}
                sizes="(max-width: 1024px) 24px, 24px"
              />
              <Image
                src={InstagramIcon}
                alt="Instagram"
                width={24}
                height={24}
                sizes="(max-width: 1024px) 24px, 24px"
              />
              <Image
                src={YoutubeIcon}
                alt="YouTube"
                width={24}
                height={24}
                sizes="(max-width: 1024px) 24px, 24px"
              />
              <Image
                src={TiktokIcon}
                alt="TikTok"
                width={24}
                height={24}
                sizes="(max-width: 1024px) 24px, 24px"
              />
            </div>
          </div>

          <div className="flex flex-col w-[113px] h-[50px] lg:h-[248px] justify-between flex-1">
            <h3 className="text-background lg:mt-auto mt-4">Follow us</h3>
          </div>
        </div>
      </SessionWrapper>
    </footer>
  );
};

export default Footer;