import { api } from "@/redux/api/apiSlice";
import Cookies from "js-cookie";
const auth: any = Cookies.get("auth");
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
      query: ({ data }) => ({
        url: "/comments",
        method: "POST",
        body: data,
        headers: {
          Authorization: `${auth}`,
          "Content-Type": "application/json",
        },
      }),
      invalidatesTags: ["All"],
    }),
  }),
});

export const {
  useGetSearchVideoQuery,
  usePostCommentMutation,
  useGetAllPlaylistsQuery,
} = searchApi;
