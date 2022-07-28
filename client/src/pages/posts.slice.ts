import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../pages/types';


const postsApi = createApi({
    reducerPath: 'posts',
    tagTypes: ["posts"],
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3006',
        headers: {
            'content-type': 'text/json',
        },
    }),
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => '/posts',
            providesTags: ['posts']
        }),
        addNewPost: builder.mutation<Post, { post: Post }>({
            query: ({ post }) => ({
                url: '/posts',
                method: 'POST',
                body: post
            }),
            invalidatesTags: ['posts']
        }),
        deletePost: builder.mutation<void, { id: string }>({
            query: ({ id }) => ({
                url: `/posts/${id}`,
                method: 'DELETE',
            }), invalidatesTags: ['posts']
        })
    })
});

export const { useGetPostsQuery, useAddNewPostMutation, useDeletePostMutation } = postsApi


export default postsApi;

