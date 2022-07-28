import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import postsApi from "../pages/posts.slice";
import modal from '../components/Posts/Modal.slice';

export const rootReducer = combineReducers({
    [postsApi.reducerPath]: postsApi.reducer,
    modal: modal,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(postsApi.middleware)
});



export type AppState = ReturnType<typeof rootReducer>;