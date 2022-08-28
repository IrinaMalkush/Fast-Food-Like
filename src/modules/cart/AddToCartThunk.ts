import { createAsyncThunk } from "@reduxjs/toolkit";

import { baseUrl } from "../../api/BaseUrl";
import { AddGoodsType } from "../../api/types/AddGoodsType";

export const addGoods = createAsyncThunk(
  "cart/addGoods",
  async (goodsData: AddGoodsType, thunkAPI) => {
    try {
      const response = await fetch(`${baseUrl}/cart`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(goodsData),
      });
      const data = await response.json();
      if (response.status === 200) {
        return;
      } else {
        console.log("data", data);
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e: any) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  },
);
