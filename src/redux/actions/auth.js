// @ts-nocheck
import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const loginAction = createAsyncThunk(
  "auth/loginAsync",
  async ({ value, cb }) => {
    try {
      const form = new URLSearchParams({
        email: value.email,
        password: value.password,
      });
      const { data } = await http().post("/auth/login", form);
      cb();
      return data.results;
    } catch (err) {
      throw err.response.data;
    }
  }
);

export const registerAction = createAsyncThunk(
  "auth/registerAsync",
  async ({ value, cb }) => {
    try {
      const form = new URLSearchParams({
        firstName: value.firstName,
        lastName: value.lastName,
        phoneNumber: value.phoneNumber,
        email: value.email,
        password: value.password,
      });
      const { data } = await http().post("/auth/register", form);
      cb();
      return data.results;
    } catch (err) {
      throw err.response.data;
    }
  }
);
