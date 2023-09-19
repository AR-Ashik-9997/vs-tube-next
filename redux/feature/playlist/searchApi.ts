import { api } from "@/redux/api/apiSlice";
const searchApi = api.injectEndpoints({
  endpoints: (builder) => ({
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
    postUserReactions: builder.mutation({
      query: ({ data, token }) => ({
        url: "/reactions",
        method: "POST",
        body: data,
        headers: {
          Authorization: token,
        },
      }),
      invalidatesTags: ["All"],
    }),
    getUserReactions: builder.query({
      query: (id) => `/reactions/${id}`,
      providesTags: ["All"],
    }),
  }),
});

export const {
  usePostCommentMutation,
  useGetAllPlaylistsQuery,
  useGetCommentsQuery,
  usePostUserReactionsMutation,
  useGetUserReactionsQuery,
} = searchApi;
