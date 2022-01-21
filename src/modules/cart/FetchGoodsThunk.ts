import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../api/BaseUrl";

export const fetchGoods = createAsyncThunk("cart/fetchGoods", async (_, thunkAPI) => {
  try {
    const response = await fetch(`${baseUrl}/cart`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      return { ...data };
    } else {
      console.log("fetch goods: ", data);
      return thunkAPI.rejectWithValue(data);
    }
  } catch (e) {
    console.log("Error", e.response.data);
    return thunkAPI.rejectWithValue(e.response.data);
  }
});
