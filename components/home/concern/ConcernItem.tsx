import { Card, CardContent } from "@/components/ui/card";
import Image, { StaticImageData } from "next/image";

interface IProps {
  title: string;
  image: StaticImageData;
}

const ConcernItem = ({ title, image }: IProps) => {
  return (
    <div className="p-4">
      <Card className="rounded-[28px] w-[200px] h-[400px] lg:w-[416px] lg:h-[616px] relative overflow-hidden">
        <CardContent className="flex items-end">
          <Image
            className="transform scale-105 z-0"
            src={image}
            alt={`image-${title}`}
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 33vw, 416px"
          />
          <h4 className="absolute z-[1] bottom-0 left-0 text-background text-[25px] lg:text-[48px] font-normal lg:leading-[57.6px] p-4 lg:px-[36px] lg:py-[31px]">
            {title}
          </h4>
        </CardContent>
      </Card>
    </div>
  );
};

export default ConcernItem;