import { GetServerSideProps } from "next";
import React, { ReactElement } from "react";
import Layout from "@/layouts/default";
import { GetSearchResult, IPlayList } from "@/types/globalTypes";
import Link from "next/link";
import { Card, Image } from "@nextui-org/react";

const searchResult = ({ SearchResult }: GetSearchResult) => {
  return (
    <div className="sm:gap-4 xl:gap-4 grid grid-cols-1 md:w-4/5 mx-auto pt-12">
      {SearchResult?.data.map((item: IPlayList) => (
        <Link href={`/watches/${item.id}`} key={item?.id}>
          <div className="flex gap-4 mt-4 w-3/4">
          <Card className="w-96 h-auto mb-4">
            <Image
              removeWrapper
              alt=""
              className="z-0 w-full h-auto"
              src={item?.image}
            />         
          </Card>        
            <h1 className="text-xl">{item?.title}</h1>
          </div>
        </Link>
      ))}
    </div>
  );
};
searchResult.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params }: any = context;
  const res = await fetch(
    `${process.env.DB_HOST}/play_lists/?searchTerm=${params.searchResult}`
  );
  const data = await res.json(); 
  return {
    props: {
      SearchResult: data,
    },
  };
};
export default searchResult;
