import { useAppSelector } from "@/redux/hooks/hooks";
import { IData, IPlayList } from "@/types/globalTypes";
import Image from "next/image";
import React from "react";
const PlayList = () => {
  const { AllData }: IData = useAppSelector((state) => state.playlist);
  return (
    <React.Fragment>
      {AllData?.data?.map((item: IPlayList) => (
        <div className="flex gap-4 mt-4" key={item?.id}>
          <Image
            src={item?.image}
            width={100}
            height={10}
            alt={item?.title}
            className="rounded w-16 h-auto xl:w-32"
          />
          <h1 className="text-xs">{item?.title}</h1>
        </div>
      ))}
    </React.Fragment>
  );
};

export default PlayList;
