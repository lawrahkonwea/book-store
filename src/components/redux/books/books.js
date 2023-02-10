import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid4 } from 'uuid';

const URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/EDWoMDjjz0qKMAfUSscI/books';

const initialState = [];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {
    addBookAction: (state, action) => {
      if (action.payload.title && action.payload.author) {
        const newBook = {
          title: action.payload.title,
          author: action.payload.author,
          id: uuid4(),
        };
        return [...state, newBook];
      }
      return state;
    },
    removeBookAction: (state, action) => {
      if (action.payload) {
        return state.filter((book) => book.id !== action.payload);
      }
      return state;
    },
  },
});

export default bookSlice.reducer;
export const { addBookAction, removeBookAction } = bookSlice.actions;
