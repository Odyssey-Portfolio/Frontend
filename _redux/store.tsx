import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import blogDetailsPageReducer from "./blogDetailsPage/blogDetailsPageSlice";
import createBlogModalReducer from "./createBlogModal/createBlogModalSlice";
import getBlogsReducer from "./getBlogs/getBlogsSlice";
import snackbarReducer from "./snackbar/snackbarSlice";
export const store = configureStore({
  reducer: {
    createBlogModal: createBlogModalReducer,
    getBlogs: getBlogsReducer,
    blogDetailsPage: blogDetailsPageReducer,
    auth: authReducer,
    snackbar: snackbarReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
