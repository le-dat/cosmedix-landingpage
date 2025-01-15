import { cn } from "@/lib/utils";
import React from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}
const SessionWrapper = ({ children, className }: IProps) => {
  return <section className={cn([`w-full max-w-[1312px] mx-auto px-5 lg:px-0`, className])}>{children}</section>;
};

export default SessionWrapper;
