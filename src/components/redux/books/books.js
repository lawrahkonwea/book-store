import { createSlice } from '@reduxjs/toolkit';
import { v4 as uuid4 } from 'uuid';

const initialState = [
  {
    title: 'things fall apart',
    author: 'Chinua Achebe',
    id: uuid4(),
  },
  {
    title: 'things fall apart',
    author: 'Chinua Achebe',
    id: uuid4(),
  },
  {
    title: 'things fall apart',
    author: 'Chinua Achebe',
    id: uuid4(),
  },
];

const bookSlice = createSlice({
  name: 'books',
  initialState,
  reducer: {
    addBookAction(state, action) {
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
    removeBookAction(state, action) {
      if (action.payload) {
        return state.filter((book) => book.id !== action.payload);
      }
      return state;
    },
  },
});

export default bookSlice.reducer;
export const { addBookAction, removeBookAction } = bookSlice.actions;
