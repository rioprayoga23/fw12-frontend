// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

import { loginAction } from "../actions/auth";
import { registerAction } from "../actions/auth";

const initialState = {
  token: null,
  message: "",
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      return initialState;
    },
  },
  extraReducers: (build) => {
    build.addCase(loginAction.fulfilled, (state, { payload }) => {
      state.token = payload;
    });
    build.addCase(loginAction.rejected, (state, action) => {
      state.message = action.error.message;
    });

    build.addCase(registerAction.fulfilled, (state, { payload }) => {
      state.token = payload;
    });
    build.addCase(registerAction.rejected, (state, action) => {
      state.message = action.error.message;
    });
  },
});

export const { logout } = authReducer.actions;

export default authReducer.reducer;
