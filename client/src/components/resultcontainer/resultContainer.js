import React from "react";
import Results from "../results/result";

function ResultsList(props) {
  const BookList = props.booklist;
  return (
    <div className="container-fluid">
      {BookList.map((book, index) => (
        <Results
          key={index}
          title={book.volumeInfo.title}
          authors={book.volumeInfo.authors}
          description={book.volumeInfo.description}
          thumbnail={book.volumeInfo.imageLinks.thumbnail}
          link={book.volumeInfo.infoLink}
        />
      ))}
    </div>
  );
}

export default ResultsList;