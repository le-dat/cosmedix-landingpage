"use client";
import useScrollTop from "@/hooks/useScrollTop";
import { ArrowUp } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";

const ButtonScrollTop = () => {
  const scrollToTop = useScrollTop();
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <Button
      onClick={scrollToTop}
      variant={"secondary"}
      className="fixed bottom-4 right-4 bg-background text-secondary-foreground rounded-full shadow-lg transition duration-300"
    >
      <ArrowUp />
    </Button>
  );
};

export default ButtonScrollTop;
