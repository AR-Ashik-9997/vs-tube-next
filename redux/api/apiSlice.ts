import { axiosBaseQuery } from "@/axios/axiosBaseQuery";
import { createApi } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "https://vs-tube-server-pk04ada77-ar-ashik-9997.vercel.app/api/v1",
  }),
  tagTypes: ["All"],
  endpoints: () => ({}),
});
