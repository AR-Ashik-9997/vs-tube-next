/* eslint-disable react-hooks/rules-of-hooks */

import Layout from "@/layouts/default";
import React, { ReactElement } from "react";
import Vmcard from "@/components/vmcard";
import { SessionProvider, useSession } from "next-auth/react";
import axios from "axios";
import Cookies from "js-cookie";
import { useUserLoginMutation } from "@/redux/feature/playlist/searchApi";

const index = () => {
  const [userLogin] = useUserLoginMutation();
  const { data: session } = useSession(); 
  if (session?.user) {
    axios
      .post(`${process.env.DB_HOST}/auth`, {
        name: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image,
        role: "user",
      })
      .then((res) => Cookies.set("auth", res?.data?.data?.token))
      .catch((err) => console.log(err));
  }
  return (
    <section>     
      <Vmcard />
    </section>
  );
};
index.getLayout = function getLayout(page: ReactElement) {
  return (
    <SessionProvider>
      <Layout>{page}</Layout>
    </SessionProvider>
  );
};
export default index;
