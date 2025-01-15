import Image, { StaticImageData } from "next/image";

interface IProps {
  title: string;
  image: StaticImageData;
  index: string | number;
}

const CategoryItem = ({ title, index, image }: IProps) => {
  return (
    <div className="border-t border-l border-b border-brown rounded-bl-[100px] p-[40px] lg:p-[60px] w-full lg:w-auto">
      <h1 className="text-[20px] lg:text-[48px] text-light-brown font-normal lg:leading-[57.6px]">
        {title}
      </h1>
      <div className="flex items-center justify-between">
        <p className="text-[20px] lg:text-[48px] text-light-brown font-normal lg:leading-[57.6px]">
          {index}
        </p>
        <Image
          className=""
          src={image}
          alt="menu"
          width={288}
          height={234}
          priority
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 288px"
        />
      </div>
    </div>
  );
};

export default CategoryItem;