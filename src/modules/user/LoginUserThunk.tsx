import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseUrl } from "../../api/BaseUrl";

export type InputsLogin = {
  email: string;
  password: string;
};

export const loginUser = createAsyncThunk(
  "user/login",
  async (loginData: InputsLogin, thunkAPI) => {
    try {
      const response = await fetch(`${baseUrl}/api/Auth/SignIn`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      let data = await response.json();

      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", data.name);
        if (data.avatarUrl !== "null") {
          localStorage.setItem("avatarUrl", data.avatarUrl);
        }
        return data;
      } else {
        return thunkAPI.rejectWithValue(data);
      }
    } catch (e) {
      console.log("Error", e.response.data);
      thunkAPI.rejectWithValue(e.response.data);
    }
  },
);
