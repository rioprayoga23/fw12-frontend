import { createSlice } from "@reduxjs/toolkit";
import { getProfileAction } from "../actions/profile";

const initialState = {
  picture: null,
  firstName: null,
  lastName: null,
  email: null,
  phoneNumber: null,
  isLoading: false,
};
const profile = createSlice({
  name: "profile",
  initialState,
  reducers: {
    clearProfile: () => {
      return initialState;
    },
  },
  extraReducers: (build) => {
    build.addCase(getProfileAction.fulfilled, (state, { payload }) => {
      state.picture = payload.picture;
      state.firstName = payload.firstName;
      state.lastName = payload.lastName;
      state.email = payload.email;
      state.phoneNumber = payload.phoneNumber;
      state.isLoading = false;
    });
  },
});

export const { clearProfile: clearProfileAction } = profile.actions;
export default profile.reducer;
