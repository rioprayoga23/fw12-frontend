// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

import { loginAction, registerAction } from "../actions/auth";

const initialState = {
  token: null,
  message: null,
  isLoading: false,
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: () => {
      return initialState;
    },
  },
  extraReducers: (build) => {
    //* Login
    build.addCase(loginAction.pending, (state) => {
      state.isLoading = true;
    });
    build.addCase(loginAction.rejected, (state, { error }) => {
      state.isLoading = false;
      state.message = error.message;
    });
    build.addCase(loginAction.fulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.message = null;
      state.isLoading = false;
    });

    //* SignUp
    build.addCase(registerAction.pending, (state) => {
      state.isLoading = true;
    });
    build.addCase(registerAction.rejected, (state, { error }) => {
      state.isLoading = false;
      state.message = error.message;
    });
    build.addCase(registerAction.fulfilled, (state, { payload }) => {
      state.token = payload.token;
      state.message = null;
      state.isLoading = false;
    });
  },
});

export const { logout } = authReducer.actions;

export default authReducer.reducer;
