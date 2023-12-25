import { createSlice } from '@reduxjs/toolkit';

export const loadingSlice = createSlice({
  name: 'loading',
  initialState: {
    value: false,
  },
  reducers: {
    loading: state => {
      state.value = !state.value;
    },
  },
});

// Action creators are generated for each case reducer function
export const { loading } = loadingSlice.actions;

export default loadingSlice.reducer;
