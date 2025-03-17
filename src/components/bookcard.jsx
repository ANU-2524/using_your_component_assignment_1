import React from 'react';
import './bookcard.css'; // Import the CSS file

const Bookcard = ({ book }) => {
  return (
    <div className="bookCard"> 
      <img className="bookImage" src={book.image} alt={book.name} />
      <h2 className="bookTitle">{book.name}</h2>
      <p className="bookAuthor">Author: {book.author}</p>
      <p className="bookGenre">Genre: {book.genre}</p>   
    </div>
  );
}

export default Bookcard;
