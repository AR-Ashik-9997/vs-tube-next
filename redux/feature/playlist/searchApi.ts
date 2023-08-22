import { api } from "@/redux/api/apiSlice";

const searchApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSearchVideo: builder.query({
      query: (searchTerm) => `/play_lists/?searchTerm=${searchTerm}`,
      providesTags: ["All"],
    }),
  }),
});

export const { useGetSearchVideoQuery } = searchApi;
