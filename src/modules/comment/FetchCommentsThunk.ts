import { createAsyncThunk } from "@reduxjs/toolkit";
import { FetchCommentsType } from "../../api/types/FetchCommentsType";
import { baseExternalUrl } from "../../api/BaseUrl";

interface CommentsDto {
  id: string;
  commentatorName: string;
  title: string;
  description: string;
  creationTime: string;
}

export const fetchComments = createAsyncThunk(
  "comments",
  async ({ page, pageSize }: FetchCommentsType, ThunkAPI) => {
    try {
      const response = await fetch(`${baseExternalUrl}/api/v1/comments/search`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          tenantKey: "root",
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          pageNumber: page,
          pageSize: pageSize,
        }),
      });
      let data = await response.json();

      if (response.status === 200) {
        let items = data.data.map((item: CommentsDto) => ({
          id: item.id,
          name: item.title,
          date: item.creationTime,
          text: item.description,
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
