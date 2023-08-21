import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://bookworm-server-production.up.railway.app/api/v1",
  }),
  tagTypes: ["All"],
  endpoints: () => ({}),
});
