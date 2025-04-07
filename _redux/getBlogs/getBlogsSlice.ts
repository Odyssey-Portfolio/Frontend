import { GetBlog } from "@/_models/GetBlog";
import { GetBlogsParams } from "@/_models/GetBlogsParams";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getBlogsThunk } from "./getBlogsThunk";

interface GetBlogsState {
  isLoading: boolean;
  searchParams: GetBlogsParams;
  blogs: GetBlog[];
}

const initialState: GetBlogsState = {
  isLoading: false,
  blogs: [],
  searchParams: {
    PageNumber: 1,
    PageSize: 5,
  },
};

const getBlogsSlice = createSlice({
  name: "getBlogs",
  initialState,
  reducers: {
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBlogsThunk.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getBlogsThunk.fulfilled, (state, action) => {
        state.isLoading = false;
      });
  },
});

export const { setIsLoading } = getBlogsSlice.actions;
export default getBlogsSlice.reducer;
