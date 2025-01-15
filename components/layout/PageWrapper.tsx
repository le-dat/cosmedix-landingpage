import { cn } from "@/lib/utils";
import React from "react";

interface IProps {
  children: React.ReactNode;
  className?: string;
}
const PageWrapper = ({ children, className }: IProps) => {
  return <main className={cn([`w-full overflow-x-hidden`, className])}>{children}</main>;
};

export default PageWrapper;
