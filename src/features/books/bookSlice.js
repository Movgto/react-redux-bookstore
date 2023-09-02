import { createSlice, createAsyncThunk, nanoid } from '@reduxjs/toolkit';
import axios from 'axios';

const API_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/2gpa0CW7n7pNtqpIb93z/books';

const initialState = {
  data: [],
  status: 'idle',
  error: null,
};

const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  try {
    const response = await axios.get(API_URL);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const addBook = createAsyncThunk('books/addBook', async (book) => {
  const bookData = {
    item_id: nanoid(),
    title: book.title,
    author: book.author,
    category: book.category,
  };
  try {
    const response = await axios.post(API_URL, bookData);
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const deleteBook = createAsyncThunk('books/addBook', async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`, {
      item_id: id,
    });
    return response.data;
  } catch (err) {
    return err.message;
  }
});

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
  },
  extraReducers(builder) {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        const bookArray = [];
        Object.keys(action.payload).forEach((prop) => {
          let { category } = action.payload[prop][0];
          category = category.split('')[0].toUpperCase() + category.split('').slice(1).join('');
          const book = {
            id: prop,
            title: action.payload[prop][0].title,
            author: action.payload[prop][0].author,
            category,
          };

          bookArray.push(book);
        });
        if (bookArray.length > 0) {
          state.data = bookArray;
        }
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export { fetchBooks, addBook, deleteBook };
export default bookSlice.reducer;
