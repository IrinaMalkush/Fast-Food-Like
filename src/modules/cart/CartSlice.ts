import { createSlice } from "@reduxjs/toolkit";
import { fetchGoods } from "./FetchGoodsThunk";
import { ICartList } from "../../api/types/ICart";

const initialState: ICartList = {
  items: [],
  total: 0,
  isFetching: false,
  isSuccess: false,
  isError: false,
  errorMessage: "",
};

export const CartSlice = createSlice({
  name: "cart",
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
    builder.addCase(fetchGoods.fulfilled, (state, { payload }) => {
      state.isFetching = false;
      state.isSuccess = true;
      state.items = payload.items;
      state.total = payload.total;
    });
    builder.addCase(fetchGoods.pending, (state, action) => {
      state.isFetching = true;
    });
    builder.addCase(fetchGoods.rejected, (state, action) => {
      state.isFetching = false;
      state.isError = true;
      state.errorMessage = action.error.message;
    });
  },
});
