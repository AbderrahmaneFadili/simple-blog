import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import postsApi from "../pages/posts.slice";

export const rootReducer = combineReducers({
    [postsApi.reducerPath]: postsApi.reducer
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware)
});



export type AppStat = ReturnType<typeof rootReducer>;