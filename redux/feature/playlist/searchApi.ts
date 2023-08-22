import { api } from "@/redux/api/apiSlice";

const searchApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSearchVideo: builder.query({
      query: (searchTerm) => `/play_lists/?limit=27&searchTerm=${searchTerm}`,
      providesTags: ["All"],
    }),
  }),
});

export const { useGetSearchVideoQuery } = searchApi;
