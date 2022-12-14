// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";

// import { loginAction } from "../actions/auth";
// import { registerAction } from "../actions/auth";

const initialState = {
  movieId: "",
  cinemaId: "",
  bookingDate: "",
  bookingTime: "",
  seatNumber: "",
  paymentMethodId: "",
  fullName: "",
  email: "",
  phoneNumber: "",
};

const transactionsReducer = createSlice({
  name: "transactions",
  initialState,
  reducers: {
    chooseMovie: (state, action) => {
      state.movieId = action.payload.movieId;
      state.cinemaId = action.payload.cinemaId;
      state.bookingDate = action.payload.bookingDate;
      state.bookingTime = action.payload.bookingTime;
    },
  },
  extraReducers: (build) => {
    // build.addCase(loginAction.fulfilled, (state, { payload }) => {
    //   state.token = payload;
    // });
    // build.addCase(loginAction.rejected, (state, action) => {
    //   state.messageLogin = action.error.message;
    // });
    // build.addCase(registerAction.fulfilled, (state, { payload }) => {
    //   state.token = payload;
    // });
    // build.addCase(registerAction.rejected, (state, action) => {
    //   state.messageRegister = action.error.message;
    // });
  },
});

export const { chooseMovie } = transactionsReducer.actions;

export default transactionsReducer.reducer;
