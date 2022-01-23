import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchMenuType } from "../../api/types/FetchMenuType";
import { baseExternalUrl } from "../../api/BaseUrl";

interface IPrices {
  type: string;
  price: number;
}

interface IProductDto {
  id: string;
  name: string;
  description: string;
  prices: IPrices[];
}

export const fetchMenu = createAsyncThunk(
  "menu",
  async ({ categoryId }: FetchMenuType, ThunkAPI) => {
    try {
      const response = await fetch(`${baseExternalUrl}/api/v1/products/search`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          tenantKey: "root",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pageNumber: 1,
          pageSize: 10,
          categoryId: categoryId,
          /* pageNumber: page,
        pageSize: pageSize,*/
        }),
      });
      let data = await response.json();
      console.log("data: ", data);
      if (response.status === 200) {
        let items = data.data.map((item: IProductDto, index: number) => ({
          id: item.id,
          image: "https://picsum.photos/200/" + (300 + index), // TODO need get image from server
          fullimage: "https://picsum.photos/200/" + (300 + index),
          name: item.name,
          description: item.description,
          pricelist: item.prices.map((item: IPrices) => ({
            pricename: item.type,
            price: item.price,
          })),
        }));
        let total = data.totalCount;
        return { items, total };
      } else {
        console.log("data: ", data);
        return ThunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error: ", e.response.data);
      return ThunkAPI.rejectWithValue(e.response.data);
    }
  },
);
