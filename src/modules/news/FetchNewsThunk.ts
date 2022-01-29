import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchNewsType } from "../../api/types/FetchNewsType";
import { baseExternalUrl } from "../../api/BaseUrl";

export interface NewsDto {
  id: string;
  title: string;
  description: string;
  creationTime: string;
}

export const fetchNews = createAsyncThunk(
  "news",
  async ({ page, pageSize }: FetchNewsType, ThunkAPI) => {
    try {
      const response = await fetch(`${baseExternalUrl}/api/v1/news/search`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          tenantKey: "root",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pageNumber: page,
          pageSize: pageSize,
          orderBy: ["creationTime"],
        }),
      });
      let data = await response.json();

      if (response.status === 200) {
        let items = data.data.map((item: NewsDto, index: number) => ({
          dateOfNew: item.creationTime,
          image: "https://picsum.photos/200/" + (300 + index), // TODO need get image from server
          newsItem: item.description,
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
