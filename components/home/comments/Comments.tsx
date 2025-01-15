import Typography from "@/components/core/Typography";
import SessionWrapper from "../../layout/SessionWrapper";
import { Carousel, CarouselContent, CarouselNext, CarouselPrevious } from "../../ui/carousel";
import Comment from "./Comment";

const Comments = () => {
  return (
    <div className="bg-[#CDBCAB]">
      <SessionWrapper className="py-[40px] lg:py-[112px] flex flex-col gap-[40px] lg:gap-[80px]">
        <Typography className="text-medium-brown">Don’t just take our word for it</Typography>
        <Carousel
          opts={{
            align: "start",
            watchSlides: true,
          }}
          className="w-[90%] mx-auto"
        >
          <CarouselContent>
            {Array.from({ length: 5 }).map((_, index) => (
              <Comment
                key={index}
                content={`"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero."`}
                title={"Name Surname"}
              />
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </SessionWrapper>
    </div>
  );
};

export default Comments;
