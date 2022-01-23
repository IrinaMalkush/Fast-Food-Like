import { createAsyncThunk } from "@reduxjs/toolkit";
import { SignUpType } from "../../api/types/SignupType";
import { baseExternalUrl } from "../../api/BaseUrl";

export const signupUser = createAsyncThunk(
  "user/signupUser",
  async (signUpData: SignUpType, thunkAPI) => {
    try {
      const response = await fetch(`${baseExternalUrl}/api/identity/register`, {
        method: "POST",
        headers: {
          Accept: "application/json",
          tenantKey: "root",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signUpData),
      });
      let data = await response.json();

      if (response.status === 200) {
        localStorage.setItem("token", data.token);
        localStorage.setItem("username", signUpData.userName);
        console.log("200: ", data);
        return { ...data };
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
