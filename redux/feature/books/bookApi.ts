/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */

import { api } from "@/redux/api/apiSlice";
import { IBook } from "@/types/globalTypes";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    postBooks: builder.mutation({
      query: ({ data }) => ({
        url: "/books",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["All"],
    }),
    postReview: builder.mutation({
      query: ({ data }) => ({
        url: "/reviews",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["All"],
    }),
    getBooks: builder.query({
      query: (searchTerm) => `/books/?searchTerm=${searchTerm}`,
      providesTags: ["All"],
    }),
    singleBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["All"],
    }),
    getReviewBook: builder.query({
      query: (id) => `/books/${id}`,
      providesTags: ["All"],
    }),
    updateBook: builder.mutation<IBook, Partial<IBook>>({
      query: ({ _id, ...data }) => ({
        url: `/books/${_id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteBook: builder.mutation({
      query: (id) => ({
        url: `/books/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["All"],
    }),
    
  }),
});

export const {
  useGetBooksQuery,
  useSingleBookQuery,
  usePostBooksMutation,
  useUpdateBookMutation,
  useDeleteBookMutation,
  usePostReviewMutation,
  useGetReviewBookQuery,
} = bookApi;
