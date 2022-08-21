import { createSlice } from '@reduxjs/toolkit';

const CurrentContactSlice = createSlice({
  name: 'CurrentContact',
  initialState: {},
  reducers: {
    saveCurrentContact: (state, {payload}) => {
        return state = payload;
    },
  }
});

export const {saveCurrentContact} = CurrentContactSlice.actions;
export default CurrentContactSlice.reducer;