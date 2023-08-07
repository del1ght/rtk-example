import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { IPost } from '../models/IPost';

const baseUrl = 'http://localhost:5000';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: baseUrl }),
  tagTypes: ['Post'],
  endpoints: (builder) => ({
    getAllPosts: builder.query<IPost[], number>({
      query: (limit) => ({
        url: '/posts',
        params: {
          _limit: limit,
        },
      }),
      providesTags: ['Post'],
    }),
    createPost: builder.mutation<IPost, IPost>({
      query: (post) => ({
        url: '/posts',
        method: 'POST',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
    updatePost: builder.mutation<IPost, IPost>({
      query: (post) => ({
        url: `posts/${post.id}`,
        method: 'PUT',
        body: post,
      }),
      invalidatesTags: ['Post'],
    }),
    deletePost: builder.mutation<number, IPost>({
      query: (post) => ({
        url: `posts/${post.id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Post'],
    }),
  }),
});
