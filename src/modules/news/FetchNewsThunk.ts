import { createAsyncThunk } from "@reduxjs/toolkit";

import { baseUrl } from "../../api/BaseUrl";
import { FetchNewsType } from "../../api/types/FetchNewsType";

export const fetchNews = createAsyncThunk(
  "news",
  async ({ page, pageSize }: FetchNewsType, ThunkAPI) => {
    try {
      const response = await fetch(`${baseUrl}/newsList?_page=${page}&_limit=${pageSize}`, {
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
