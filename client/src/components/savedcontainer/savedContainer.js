import React from "react";
import Saved from "../saved/saved";

function SavedList(props) {
  const BookList = props.booklist;
  const getBooks = props.getSavedBooks;
  return (
    <div className="container-fluid">
      {BookList.map((book, index) => (
        <Saved
          key={index}
          title={book.title}
          authors={book.authors}
          description={book.description}
          thumbnail={book.thumbnail}
          link={book.link}
          id={book._id}
          getBooks={getBooks}
        />
      ))}
    </div>
  );
}

export default SavedList;