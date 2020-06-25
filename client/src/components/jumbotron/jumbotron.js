import React from "react";
import "./jumbotron.css"

function Jumbotron() {
    return(
        <div className="container">
            <div className="jumbotron bg-dark jumbotron-fluid mb-0">
                <h1 className="display-3 text-center text-white">(React) Google Books Search</h1>
                <p className="text-center h3 text-white">This is a React Application that utilizes Google Books API for users to search and save for any book ever published.</p>
            </div>
        </div>
    )

};

export default Jumbotron;

