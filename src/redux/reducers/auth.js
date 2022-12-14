// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

import { loginAction } from "../actions/auth";
import { registerAction } from "../actions/auth";

const initialState = {
  token: null,
  messageLogin: "",
  messageRegister: "",
};

const authReducer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state, action) => {
      return initialState;
    },
    clearMessage: (state, action) => {
      state.messageLogin = "";
      state.messageRegister = "";
    },
  },
  extraReducers: (build) => {
    build.addCase(loginAction.fulfilled, (state, { payload }) => {
      state.token = payload;
    });
    build.addCase(loginAction.rejected, (state, action) => {
      state.messageLogin = action.error.message;
    });

    build.addCase(registerAction.fulfilled, (state, { payload }) => {
      state.token = payload;
    });
    build.addCase(registerAction.rejected, (state, action) => {
      state.messageRegister = action.error.message;
    });
  },
});

export const { logout, clearMessage } = authReducer.actions;

export default authReducer.reducer;
