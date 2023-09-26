import { axiosBaseQuery } from "@/axios/axiosBaseQuery";
import { createApi} from "@reduxjs/toolkit/query/react";
export const api = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: "http://localhost:5000/api/v1",
  }),
  tagTypes: ["All"],
  endpoints: () => ({}),
});

