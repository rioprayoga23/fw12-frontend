import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createTransaction = createAsyncThunk(
  "transactions",
  async ({ data, form, token, cb }) => {
    const { bookingDate, bookingTime, cinemaId, movieId, seatNum } = data;
    const { fullName, email, phoneNumber, paymentMethodId } = form;

    try {
      const { data } = await axios.post(
        "https://fw12-backend-roan.vercel.app/transactions/createOrder",
        {
          bookingDate,
          movieId,
          cinemaId,
          bookingTime,
          email,
          fullName,
          paymentMethodId,
          phoneNumber,
          seatNum,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      cb();
      return data.data;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);
