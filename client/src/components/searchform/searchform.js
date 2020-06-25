import React from "react";
import "./searchform.css"

function SearchForm(props) {
    return(
      <div className="container">
      <form
        className="mt-2 p-2 border border-dark bg-dark"
        onSubmit={props.handleFormSubmit}>
        <div className="form-group font">
          <h1>Search for a Book</h1>
          <hr />
          <label htmlFor="searchBar" className="mr-1 font">
            Search Here...
          </label>
          <input
            type="text"
            className="form-control"
            id="searchBar"
            value={props.searchTerm}
            onChange={props.handleInputChange}
            name="searchTerm"
          ></input>
        </div>
        <button type="submit" className="btn btn-dark">
          Search
        </button>
      </form>
    </div>
    );
}

export default SearchForm;

