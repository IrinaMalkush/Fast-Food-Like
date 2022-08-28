import { createAsyncThunk } from "@reduxjs/toolkit";

import { baseUrl } from "../../api/BaseUrl";
import { FetchCommentsType } from "../../api/types/FetchCommentsType";

export const fetchComments = createAsyncThunk(
  "comments",
  async ({ page }: FetchCommentsType, ThunkAPI) => {
    try {
      const response = await fetch(`${baseUrl}/comments?_page=${page}`, {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();

      if (response.status === 200) {
        console.log(data);
        return { ...data };
      } else {
        console.log("data: ", data);
        return ThunkAPI.rejectWithValue(data);
      }
    } catch (e: any) {
      console.log("Error: ", e.response.data);
      return ThunkAPI.rejectWithValue(e.response.data);
    }
  },
);
