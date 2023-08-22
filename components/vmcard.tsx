import { useAppSelector } from "@/redux/hooks/hooks";
import { IPlayList } from "@/types/globalTypes";
import { Card, Image } from "@nextui-org/react";

import Link from "next/link";

const Vmcard = () => {
  const { searchData } = useAppSelector((state) => state.playlist);
  return (
    <div className="sm:gap-4 xl:gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  xl:grid-cols-4  w-4/5 sm:mx-auto pt-12">
      {searchData?.data?.map((item: IPlayList) => (
        <Link href={`/watches/${item.id}`} key={item?.id}>
          <Card className="w-full h-auto mb-4">
            <Image
              removeWrapper
              alt="Relaxing app background"
              className="z-0 w-full h-auto"
              src={item?.image}
            />
          </Card>
          <h1 className="text-xs xl:text-lg mb-4">{item?.title}</h1>
        </Link>
      ))}
    </div>
  );
};

export default Vmcard;
