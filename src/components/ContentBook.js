import React from "react";
import PropTypes from 'prop-types'

const ContentBook = ({book}) => {
  // const {title, author} = props;

  return (
    <ul>
        <li>
          <h3>{book.title}</h3>
          <p>{book.author}</p>
          <button type="button">Delete</button>
        </li>
    </ul>
  );
};


ContentBook.propTypes = {
  title: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired
}

export default ContentBook