import SessionWrapper from "@/components/layout/SessionWrapper";
import CategoryItem from "./CategoryItem";
import { categories } from "@/constants";

const Categories = () => {
  return (
    <SessionWrapper className="flex flex-col gap-y-8 lg:flex-row items-center py-[40px] lg:py-[112px] lg:px-[64px]">
      {categories.map((item, index) => (
        <CategoryItem key={index} title={item?.title} image={item?.image} index={index + 1} />
      ))}
    </SessionWrapper>
  );
};

export default Categories;
