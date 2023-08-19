import Layout from "@/layouts/default";

import React, { ReactElement } from "react";
import Vmcard from "@/components/vmcard";

const index = () => {
  return (
    <section>
      <Vmcard />
    </section>
  );
};
index.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default index;
