import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import Logo from "@/public/images/core/logo.png";
import Menu from "@/public/images/core/menu.png";
import SessionWrapper from "../layout/SessionWrapper";

const Header = () => {
  return (
    <div className="w-full bg-background fixed top-0 inset-x-0 z-10">
      <SessionWrapper className="flex items-center mx-auto justify-between py-4 lg:py-[25px]">
        <Image
          className="hidden lg:block"
          src={Logo}
          alt="logo"
          width={180}
          height={38}
          priority
          sizes="(max-width: 1024px) 100px, 180px"
        />
        <Image
          className="w-[30px] h-[10px] lg:w-[50px] lg:h-[15px]"
          src={Menu}
          alt="menu"
          width={50}
          height={15}
          priority
          sizes="(max-width: 1024px) 30px, 50px"
        />
        <Button className="rounded-full">Book Now</Button>
      </SessionWrapper>
    </div>
  );
};

export default Header;
