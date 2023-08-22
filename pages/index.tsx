/* eslint-disable react-hooks/rules-of-hooks */

import Layout from "@/layouts/default";
import React, { ReactElement } from "react";
import Vmcard from "@/components/vmcard";
import { GetServerSideProps } from "next";
import { IData } from "@/types/globalTypes";
import { useAppDispatch } from "@/redux/hooks/hooks";
import { setData } from "@/redux/feature/playlist/playListSlice";

const index = ({ AllData }: IData) => {
  const dispatch = useAppDispatch();  
  if (AllData?.data?.length > 0) {
    dispatch(setData(AllData?.data));
  }
  return (
    <section>
      <Vmcard />
    </section>
  );
};
index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export const getServerSideProps: GetServerSideProps = async () => {
  const res = await fetch("http://localhost:5000/api/v1/play_lists");
  const result = await res.json();
  return { props: { AllData: result } };
};
export default index;
