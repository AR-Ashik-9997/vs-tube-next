import React, { ReactElement } from "react";
import Layout from "@/layouts/default";
import PlayList from "@/components/playlist";
const Watch = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 w-4/5 sm:mx-auto pt-12">
      <div className="lg:col-span-8">
        <div className="relative overflow-hidden w-full pt-[56.25%]">
          <iframe
            allow="accelerometer; autoplay"
            allowFullScreen={true}
            className="absolute left-0 top-0 right-0 bottom-0 w-full h-full"
            src="https://www.youtube.com/embed/p_dtI2bLWhY?autoplay=1"
          ></iframe>
        </div>
      </div>
      <div className="lg:col-span-4">
        <div className="h-96 lg:h-80 xl:h-96 2xl:h-[34rem] border rounded-xl p-4 overflow-auto">
          <PlayList />          
          <PlayList />          
          <PlayList />          
          <PlayList />          
          <PlayList />          
          <PlayList />          
          <PlayList />          
        </div>
      </div>
    </div>
  );
};

Watch.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default Watch;
