import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../api/BaseUrl";

export const fetchCarousel = createAsyncThunk("carousel", async (_: any, ThunkAPI) => {
  try {
    const response = await fetch(`${baseUrl}/carouselList`, {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    let data = await response.json();

    if (response.status === 200) {
      return { ...banner };
    } else {
      console.log("data: ", data);
      return ThunkAPI.rejectWithValue(data);
    }
  } catch (e) {
    console.log("Error: ", e.response.data);
    return ThunkAPI.rejectWithValue(e.response.data);
  }
});

export const banner = {
  items: [
    {
      id: 0,
      photo: "/img/banner/timeopen.jpg",
    },
    {
      id: 1,
      photo: "/img/banner/shava.jpg",
    },
    {
      id: 2,
      photo: "/img/banner/burger.jpg",
    },
    {
      id: 3,
      photo: "/img/banner/frenchFry.jpg",
    },
    {
      id: 4,
      photo: "/img/banner/greenShava.jpg",
    },
    {
      id: 5,
      photo: "/img/banner/shakes.jpg",
    },
    {
      id: 6,
      photo: "/img/banner/frenchhotdog.jpg",
    },
  ],
  total: 7,
};
