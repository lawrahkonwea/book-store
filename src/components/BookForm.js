import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addBookAction } from './redux/books/books';

const BookForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const addBook = (e) => {
    e.preventDefault();
    if (title.trim() || author.trim()) {
      dispatch(addBookAction({ title, author }));
    }
    setTitle('');
    setAuthor('');
  };

  return (
    <section>
      <h2>ADD NEW BOOK</h2>
      <form onSubmit={addBook}>
        <input type="text" placeholder="Add title" className="input-text" name="title" onChange={(e) => setTitle(e.target.value)} value={title} required />
        <input type="text" placeholder="Add author" className="input-text" name="author" onChange={(e) => setAuthor(e.target.value)} value={author} required />
        <button type="submit">ADD BOOK</button>
      </form>
    </section>
  );
};

export default BookForm;
