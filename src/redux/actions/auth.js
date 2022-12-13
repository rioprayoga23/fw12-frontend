// @ts-nocheck
import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const loginAction = createAsyncThunk(
  "auth/loginAsync",
  async ({ email, password, cb }) => {
    try {
      const form = new URLSearchParams({
        email,
        password,
      });

      const { data } = await axios.post(
        "https://fw12-backend-roan.vercel.app/auth/login",
        form
      );
      cb();
      return data.results.token;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);

export const registerAction = createAsyncThunk(
  "auth/registerAsync",
  async ({ firstName, lastName, phoneNumber, email, password, cb }) => {
    try {
      const form = new URLSearchParams({
        firstName,
        lastName,
        phoneNumber,
        email,
        password,
      });

      const { data } = await axios.post(
        "https://fw12-backend-roan.vercel.app/auth/register",
        form
      );
      cb();
      return data.results.token;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);
