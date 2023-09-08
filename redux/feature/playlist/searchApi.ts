import { api } from "@/redux/api/apiSlice";
const searchApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getSearchVideo: builder.query({
      query: (searchTerm) => `/play_lists/?searchTerm=${searchTerm}`,
      providesTags: ["All"],
    }),
    getAllPlaylists: builder.query({
      query: () => `/play_lists`,
      providesTags: ["All"],
    }),
    postComment: builder.mutation({
      query: ({ data, token }) => ({
        url: "/comments",
        method: "POST",
        body: data,
        headers: {
          Authorization: token,
        },
      }),
      invalidatesTags: ["All"],
    }),
    getComments: builder.query({
      query: (id) => `/comments/${id}`,
      providesTags: ["All"],
    }),
  }),
});

export const {
  useGetSearchVideoQuery,
  usePostCommentMutation,
  useGetAllPlaylistsQuery,
  useGetCommentsQuery,
} = searchApi;
