import Image from "next/image";
import React from "react";
import HeroBg from "@/public/images/home/hero.png";
import { Button } from "../ui/button";
import SessionWrapper from "../layout/SessionWrapper";

const Hero = () => {
  return (
    <div className="w-full h-screen relative">
      <Image
        className="w-full h-full object-cover"
        src={HeroBg}
        alt="HeroBg"
        priority
        sizes="(max-width: 640px) 100vw, (max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>

      <SessionWrapper className="absolute z-[2] left-[50%] transform translate-x-[-50%] bottom-[57px]">
        <h1 className="text-background text-[35px] lg:leading-[76.8px] lg:text-[64px] font-medium max-w-[856px]">
          Unveil Your Best Self with Cosmedix Clinics’ Expert Care and Cutting-Edge Treatments
        </h1>
        <Button className="rounded-full text-white mt-[40px]" variant={"outline"}>
          Book Now
        </Button>
      </SessionWrapper>
    </div>
  );
};

export default Hero;