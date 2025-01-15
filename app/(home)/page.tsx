import React, { Suspense } from "react";
import dynamic from "next/dynamic";

import ButtonScrollTop from "@/components/core/ButtonScrollTop";
import Footer from "@/components/core/footer/Footer";
import Header from "@/components/core/Header";
import Loading from "../loading";

const Categories = dynamic(() => import("@/components/home/categories/Categories"), {
  suspense: true,
});
const Comments = dynamic(() => import("@/components/home/comments/Comments"), { suspense: true });
const Concerns = dynamic(() => import("@/components/home/concern/Concerns"), { suspense: true });
const Hero = dynamic(() => import("@/components/home/Hero"), { suspense: true });

export default function Home() {
  return (
    <main>
      <Header />
      <Suspense fallback={<Loading />}>
        <Hero />
        <Categories />
        <Concerns />
        <Comments />
      </Suspense>
      <Footer />
      <ButtonScrollTop />
    </main>
  );
}
