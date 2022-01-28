import { createAsyncThunk } from "@reduxjs/toolkit";
import { baseExternalUrl } from "../../api/BaseUrl";

export type InputsLogin = {
  email: string;
  password: string;
};

export const loginUser = createAsyncThunk(
  "user/login",
  async (loginData: InputsLogin, thunkAPI) => {
    try {
      const response = await fetch(`${baseExternalUrl}/api/tokens`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          tenantKey: "root",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(loginData),
      });
      let data = await response.json();

      if (response.status === 200) {
        localStorage.setItem("token", data.data.token);
        localStorage.setItem("username", loginData.email);
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
