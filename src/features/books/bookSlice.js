import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  data: [
    {
      id: 1,
      title: 'The Great Gatsby',
      author: 'John Smith',
      category: 'Fiction',
    },
    {
      id: 2,
      title: 'Anna Karenina',
      author: 'Leo Tolstoy',
      category: 'Fiction',
    },
    {
      id: 3,
      title: 'The Selfish Gene',
      author: 'Richard Dawkins',
      category: 'Nonfiction',
    },
  ],
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
