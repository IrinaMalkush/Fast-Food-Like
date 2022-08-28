import { createAsyncThunk } from "@reduxjs/toolkit";

import { baseUrl } from "../../api/BaseUrl";
import { FetchMenuType } from "../../api/types/FetchMenuType";

export const fetchMenu = createAsyncThunk("menu", async ({ listName }: FetchMenuType, ThunkAPI) => {
  try {
    const response = await fetch(`${baseUrl}/${listName}`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    if (response.status === 200) {
      return { ...data };
    } else {
      console.log("data: ", data);
      return ThunkAPI.rejectWithValue(data);
    }
  } catch (e: any) {
    console.log("Error: ", e.response.data);
    return ThunkAPI.rejectWithValue(e.response.data);
  }
});
