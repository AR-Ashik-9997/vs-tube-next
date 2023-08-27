import { api } from "@/redux/api/apiSlice";

const searchApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSearchVideo: builder.query({
      query: (searchTerm) => `/play_lists/?searchTerm=${searchTerm}`,
      providesTags: ["All"],
    }),
    postComment: builder.mutation({
      query: ({ data }) => ({
        url: "/comments",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["All"],
    }),
    getPostComment: builder.query({
      query: (id) => `/comments/${id}`,
      providesTags: ["All"],
    }),
  }),
});

export const {
  useGetSearchVideoQuery,
  usePostCommentMutation,
  useGetPostCommentQuery,
} = searchApi;
