import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [],
};

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    add: (state, action) => {
      state.data.push(action.payload);
    },
    remove: (state, action) => {
      state.data = state.data.filter((book) => book.id !== action.payload);
      state.data = state.data.map((book, index) => ({
        ...book,
        id: index,
      }));
    },
  },
});

export const { add, remove, updateIds } = bookSlice.actions;
export default bookSlice.reducer;
