import React from "react";
import axios from "axios";


function Saved(props) {

  const id = props._id;
  const getBooks = props.getBooks;

  const handleDelete = (id) => {
    const deletePath = `/api/books/${id}`;
    axios
      .delete(deletePath)
      .then((result) => {
        getBooks();
      })
      .catch((error) => {
        console.log(error.message);
      });
  };

  return (
    <div className="card card-fluid mt-2 bg-dark text-white">
      <h1 className="card-header">
        {props.title}
        <button
          type="button"
          className="btn btn-sm btn-danger float-right mr-2"
          onClick={() => handleDelete(id)}
        >
          Delete
        </button>
      </h1>
      <div className="card-body">
        <img src={props.thumbnail} alt="book" className="float-left mr-2"></img>
        <p className="">Authors: {props.authors}</p>
        <p>Synopsis: {props.description}</p>
        <a rel="noopener noreferrer" href={props.link} target="_blank">
          Link: {props.link}
        </a>
      </div>
    </div>
  );
}

export default Saved;