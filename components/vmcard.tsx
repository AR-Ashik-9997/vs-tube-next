import { IData, IPlayList } from "@/types/globalTypes";
import { Card, CardFooter, Image } from "@nextui-org/react";
import Link from "next/link";

const Vmcard = ({ AllData }: IData) => {
  return (
    <div className="sm:gap-4 xl:gap-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  w-4/5 sm:mx-auto pt-12">
      {AllData?.data.map((item: IPlayList) => (
        <Link href={`/watches/${item.id}`} key={item?.id}>
          <Card className="w-full h-[300px] mb-4">
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-full"
              src={item?.image}
            />
          </Card>
        </Link>
      ))}
    </div>
  );
};

export default Vmcard;
