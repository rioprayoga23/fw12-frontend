// @ts-nocheck
import { createSlice } from "@reduxjs/toolkit";
import { createTransaction } from "../actions/transactions";

const initialState = {
  movieId: "",
  cinemaId: "",
  bookingDate: "",
  bookingTime: "",
  seatNum: "",
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
    chooseSeat: (state, action) => {
      state.seatNum = action.payload.seatNum;
    },
  },
  extraReducers: (build) => {
    build.addCase(createTransaction.fulfilled, (state, { payload }) => {
      // state.movieId = payload.movieId;
      // state.cinemaId = payload.cinemaId;
      // state.bookingDate = payload.bookingDate;
      // state.bookingTime = payload.bookingTime;
      // state.seatNum = payload.seatNum;
      // state.paymentMethodId = payload.paymentMethodId;
      // state.fullName = payload.fullName;
      // state.email = payload.email;
      // state.phoneNumber = payload.phoneNumber;
      return initialState;
    });
  },
});

export const { chooseMovie, chooseSeat } = transactionsReducer.actions;

export default transactionsReducer.reducer;
