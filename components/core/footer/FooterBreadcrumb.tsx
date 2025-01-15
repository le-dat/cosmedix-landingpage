import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import React from "react";

const breadcrumbLinks = [
  { href: "/", label: "Home" },
  { href: "/", label: "Blog" },
  { href: "/", label: "Concerns " },
  { href: "/", label: "Treatments " },
  { href: "/", label: "Shop" },
  { href: "/", label: "Locate Us" },
];

export function FooterBreadcrumb() {
  return (
    <Breadcrumb>
      <BreadcrumbList className="flex flex-wrap !gap-y-1 !gap-x-4 !lg:gap-x-[36px]">
        {breadcrumbLinks.map((link, index) => (
          <React.Fragment key={index}>
            <BreadcrumbItem>
              <BreadcrumbLink
                href={link.href}
                className="font-medium text-[20px] lg:text-[32px] leading-[44.8px] text-background hover:text-muted-foreground"
              >
                {link.label}
              </BreadcrumbLink>
            </BreadcrumbItem>
            {index < breadcrumbLinks.length - 1 && (
              <BreadcrumbSeparator>
                <div className="text-background">/</div>
              </BreadcrumbSeparator>
            )}
          </React.Fragment>
        ))}
      </BreadcrumbList>
    </Breadcrumb>
  );
}
