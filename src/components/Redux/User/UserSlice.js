import { createSlice } from '@reduxjs/toolkit';

const UserSlice = createSlice({
  name: 'User',
  initialState: null,
  reducers: {
    UserAuth: (state, { payload }) => {
      return state = payload;
    },
  },
});

export const { UserAuth } = UserSlice.actions;
export default UserSlice.reducer;
