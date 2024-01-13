import { createSlice } from '@reduxjs/toolkit';
import user from '../../data/data.json';
//'https://example.com/profile_picture.jpg',

// const initialUserDataState;

const userdataSlice = createSlice({
  name: 'userdata',
  initialState:user,
  reducers: {
    getUserDataStart(state) {
      state.loading = true;
      state.error = null;
    },
    getUserDataSuccess(state, action) {
      state.loading = false;
      state.user = action.payload; // Ensure the payload structure here matches the user object structure
      state.error = null;
    },
    getUserDataFailure(state, action) {
      state.loading = false;
      state.error = action.payload; // Ensure the payload here is a valid error object or message
    },
    // Add other actions as needed
  },
});

export const {
  getUserDataStart,
  getUserDataSuccess,
  getUserDataFailure,
} = userdataSlice.actions;

export default userdataSlice.reducer;