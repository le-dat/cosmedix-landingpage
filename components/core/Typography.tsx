import { cn } from "@/lib/utils";
import React from "react";

interface IProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
}
const Typography = ({ children, ...props }: IProps) => {
  return (
    <h1
      className={cn(
        "font-medium text-center text-[30px] lg:text-[64px] lg:leading-[76.8px]",
        props.className
      )}
    >
      {children}
    </h1>
  );
};

export default Typography;
