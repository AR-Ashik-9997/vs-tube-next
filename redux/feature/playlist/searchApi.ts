import { api } from "@/redux/api/apiSlice";
const searchApi:any = api.injectEndpoints({
  endpoints: (builder) => ({
    userLogin: builder.mutation({
      query: (loginData) => ({
        url: `/auth`,
        method: "POST",
        data: loginData,
      }),
      invalidatesTags: ["All"],
    }),
    getAllPlaylists: builder.query({
      query: () => ({
        url: "/play_lists",
        method: "GET",
      }),
      providesTags: ["All"],
    }),
    postComment: builder.mutation({
      query: (commentData) => ({
        url: "/comments",
        method: "POST",
        data: commentData,        
      }),
      invalidatesTags: ["All"],
    }),
    getComments: builder.query({
      query: (id) => ({
        url: `/comments/${id}`,
        method: "GET",
      }),
      providesTags: ["All"],
    }),
    postUserReactions: builder.mutation({
      query: (data) => ({
        url: "/reactions",
        method: "POST",
        data: data,        
      }),
      invalidatesTags: ["All"],
    }),
    getUserReactions: builder.query({
      query: (id) => ({
        url: `/reactions/${id}`,
        method: "GET",
      }),
      providesTags: ["All"],
    }),
    getPlaylistViews: builder.query({
      query: (id) => ({
        url: `/play_lists/${id}/views`,
        method: "GET",
      }),
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
  useGetPlaylistViewsQuery,
  useUserLoginMutation,
} = searchApi;
