import React, { Component }  from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/navbar/navbar";
import Jumbotron from "./components/jumbotron/jumbotron"
import Search from "./pages/search"
import Saved from "./pages/saved"
import API from "../src/utils/API";
import "./App.css"


class App extends Component {
  state = {
    searchTerm: "",
    booklist: [],
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    API.search(this.state.searchTerm).then((result) => {
      const searchresult = result.data.items;
      this.setState({ booklist: searchresult, searchTerm: "" });
    });
  };

  handleInputChange = (event) => {
    const value = event.target.value;
    this.setState({
      searchTerm: value,
    });
  };

  render(){
    return (
      <Router>
        <div>
          <Nav />
          <header className="background-image">
          <Jumbotron />
          <Switch>
            <Route exact path="/">
              <Search 
              searchTerm={this.state.searchTerm}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
              booklist={this.state.booklist}
              />
            </Route>
            <Route path="/saved">
              <Saved />
            </Route>
          </Switch>
          </header>
        </div>
      </Router>
    );
  }

};


export default App;
  
