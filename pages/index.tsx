import Layout from "@/layouts/default";

import React, { ReactElement } from "react";
import Vmcard from "@/components/vmcard";
import { GetStaticProps } from "next";

const index = ({ allData }: any) => {
  return (
    <section>
      <Vmcard AllData={allData} />
    </section>
  );
};
index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
type GetData = {
  allData: [];
};

export const getStaticProps: GetStaticProps<{
  allData: GetData;
}> = async () => {
  const res = await fetch("http://localhost:5000/api/v1/play_lists?limit=27");
  const allData = await res.json();
  return { props: { allData } };
};
export default index;
