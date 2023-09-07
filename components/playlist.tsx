import { useGetAllPlaylistsQuery } from "@/redux/feature/playlist/searchApi";
import {  IPlayList } from "@/types/globalTypes";
import Image from "next/image";
import Link from "next/link";
import React from "react";
const PlayList = () => {
  const { data } = useGetAllPlaylistsQuery(undefined, {
    refetchOnMountOrArgChange: true,
    pollingInterval: 5000,
  });

  return (
    <React.Fragment>
      {data?.data?.map((item: IPlayList) => (
        <Link href={`/watches/${item.id}`} key={item?.id}>
          <div className="flex gap-4 mt-4">
            <Image
              src={item?.image}
              width={100}
              height={10}
              alt={item?.title}
              className="rounded w-16 h-auto xl:w-32"
            />
            <h1 className="text-xs xl:text-sm">{item?.title}</h1>
          </div>
        </Link>
      ))}
    </React.Fragment>
  );
};

export default PlayList;
