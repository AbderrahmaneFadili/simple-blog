import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Post } from '../pages/types';


const postsApi = createApi({
    reducerPath: 'posts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'http://localhost:3006'
    }),
    endpoints: (builder) => ({
        getPosts: builder.query<Post[], void>({
            query: () => '/posts'
        })
    })
});

export const { useGetPostsQuery } = postsApi


export default postsApi;

