import React from "react";
import ContentBook from "./ContentBook";
import BookForm from "./BookForm";
import { v4 as uuid4} from 'uuid'

const BookList = () => {
    const books = [
      {
        title: "things fall apart",
        author: "Chinua Achebe",
        completed: true,
        id: uuid4()
      },
      {
        title: "things fall apart",
        author: "Chinua Achebe",
        completed: true,
        id: uuid4()
      },
      {
        title: "things fall apart",
        author: "Chinua Achebe",
        completed: true,
        id: uuid4()
      } 
    ]
 
    return (
      <div>
        <ul>
          {books.map((book) => (<ContentBook book={book} key={book.id} /> ))}
        </ul>
        <BookForm/>
      </div>
    );
  }  

export default BookList;