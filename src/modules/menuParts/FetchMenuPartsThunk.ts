import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseExternalUrl } from "../../api/BaseUrl";

export interface MenuPartsDto {
  id: string;
  name: string;
}

export const fetchMenuParts = createAsyncThunk("menuParts", async (_: any, ThunkAPI) => {
  try {
    const response = await fetch(`${baseExternalUrl}/api/v1/category/search`, {
      method: "POST",
      headers: {
        Accept: "application/json",
        tenantKey: "root",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        pageNumber: 1,
        pageSize: 100,
      }),
    });
    let data = await response.json();
    if (response.status === 200) {
      const items = data.data.map((item: MenuPartsDto) => ({
        id: item.id,
        partname: item.name,
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
});
