import React from "react";
import SearchForm from "../components/searchform/searchform"
import ResultsList from "../components/resultcontainer/resultContainer"

function Search(props) {
    return (
      <div>
        <SearchForm
          searchTerm={props.searchTerm}
          handleInputChange={props.handleInputChange}
          handleFormSubmit={props.handleFormSubmit}
        />
        <ResultsList booklist={props.booklist}/>
      </div>
    );
  }

export default Search;