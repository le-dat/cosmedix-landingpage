import { Card } from "@/components/ui/card";

interface IProps {
  content: string;
  title: string;
}

const Comment = ({ content, title }: IProps) => {
  return (
    <div className="p-8">
      <Card className="rounded-[28px] bg-transparent shadow-none border-transparent w-[200px] lg:w-[544px] relative overflow-hidden">
        <div className="flex flex-col gap-8 items-center">
          <p className="font-normal text-center text-[18px] leading-[27px]">{content}</p>
          <div className="text-center">
            <h4 className="text-medium-brown -tracking-[2%] text-[24px] font-medium leading-[28.8px]">
              {title}
            </h4>
            <p className="text-[18px] fo nt-normal leading-[27px]">{"Position, Company name"}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Comment;
