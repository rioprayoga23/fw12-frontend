import { createAsyncThunk } from "@reduxjs/toolkit";
import http from "../../helpers/http";

export const transactionAction = createAsyncThunk(
  "transaction/createTransaction",
  async ({ dataTrx, cb }, { getState }) => {
    const { token } = getState().auth;
    try {
      const { data } = await http(token).post(
        "/transactions/createOrder",
        dataTrx
      );
      cb();
      return data.results;
    } catch (err) {
      throw err.response.data.message;
    }
  }
);
