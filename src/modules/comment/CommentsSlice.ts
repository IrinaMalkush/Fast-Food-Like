import { createSlice } from "@reduxjs/toolkit";
import { fetchComments } from "./FetchCommentsThunk";
import { ICommentsList } from "../../api/types/IComment";

const initialState: ICommentsList = {
  items: [],
  total: 0,
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const CommentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    clearState: (state) => {
      state.isError = false;
      state.isSuccess = false;
      state.isFetching = false;
      return state;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchComments.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.items = payload.items;
      state.total = payload.total;
    });
    builder.addCase(fetchComments.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(fetchComments.rejected, (state, action) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = action.error.message;
    });
  },
});
