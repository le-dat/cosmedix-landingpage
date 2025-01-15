import SessionWrapper from "@/components/layout/SessionWrapper";
import {
  Carousel,
  CarouselContent,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import ConcernItem from "./ConcernItem";
import { concerns } from "@/constants";
import Typography from "@/components/core/Typography";

const Concerns = () => {
  return (
    <SessionWrapper className="my-[20px] lg:my-[112px] flex flex-col gap-[40px] lg:gap-[80px]">
      <div>
        <Typography className="text-brown">Concerns</Typography>
        <h3 className="text-[16px] lg:text-[18px] leading-[27px] font-normal lg:mt-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </h3>
      </div>

      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full "
      >
        <CarouselContent>
          {concerns.map((item, index) => (
            <ConcernItem key={index} title={item.title} image={item.image} />
          ))}
        </CarouselContent>
        <div className="flex items-center gap-2">
          <CarouselPrevious className="" />
          <CarouselNext className="" />
        </div>
      </Carousel>
    </SessionWrapper>
  );
};

export default Concerns;
