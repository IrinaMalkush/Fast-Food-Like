import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseExternalUrl } from "../../api/BaseUrl";

interface IPayment {
  cartSum: string;
  bearer: string | null;
}

export const ImplementPayment = createAsyncThunk(
  "cart/addGoods",
  async ({ cartSum, bearer }: IPayment, thunkAPI) => {
    console.log("token: ", bearer);
    try {
      const response = await fetch(`${baseExternalUrl}/api/v1/payment?totalCount=${cartSum}`, {
        method: "POST",
        headers: {
          tenantKey: "root",
          Authorization: `Bearer ${bearer}`,
          "Content-Type": "application/json",
        },
      });
      let data = await response.text();
      if (response.status === 200) {
        window.open(data, "_blank");
        return;
      } else {
        console.log("data", data);
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      return thunkAPI.rejectWithValue(e.response.data);
    }
  },
);
