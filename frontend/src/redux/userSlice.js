import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  currUser: null,
  isloading: false,
  error: false,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginStart: (state) => {
      state.isloading = true;
    },
    loginSuccess: (state, action) => {
      state.isloading = false;
      state.currUser = action.payload;
    },
    loginFail: (state) => {
      state.isloading = false;
      state.error = true;
    },
    logout: (state) => {
      state.currUser = null;
      state.isloading = false;
      state.error = false;
    },
    subscription: (state, action) => {
      if (state.currUser.subscribedUsers.includes(action.payload)) {
        state.currUser.subscribedUsers.splice(
          state.currUser.subscribedUsers.findIndex(
            (channelId) => channelId === action.payload
          ),
          1
        );
      } else {
        state.currUser.subscribedUsers.push(action.payload);
      }
    },
  },
});

export const { loginStart, loginFail, loginSuccess, logout, subscription } =
  userSlice.actions;
export default userSlice.reducer;
