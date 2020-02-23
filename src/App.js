import React, { Component } from "react";
import "./App.css";
import Discojs from "discojs";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Pages from "./components/Pages";
import Selector from "./components/Selector";

const USER_TOKEN = "fvXFPOrRSVzEqLNkSWgvrGiRlLuCmEFQJQQVBKaN";
const USER_KEY = "WwaXPmpRocIYWMWsQSxb";
const USER_SECRET = "AIjlNGAEjBHzqEBfKOgMqkBjCpCCbTIw";
const USER_AGENT = "discogs-app/0.0.1";

const client = new Discojs({
  userAgent: USER_AGENT,
  userToken: USER_TOKEN,
  consumerKey: USER_KEY,
  consumerSecret: USER_SECRET
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      searchfield: "",
      page: 1,
      totalPages: 0,
      client: client, // required by Discojs
      searchType: "artist"
    };
  }

  componentDidMount() {
    this.onSearch(this.state.type, this.state.searchfield, 1);
  }

  // Call the database and throw an error if fails
  onSearch = (type, searchString, page) => {
    this.setState({ isLoaded: false });

    const paginationOpt = {
      page: page,
      perPage: 24
    };

    client
      .searchDatabase({ type: type, query: searchString }, paginationOpt)
      .then(res => {
        this.setState({
          isLoaded: true,
          items: res.results,
          totalPages: res.pagination.pages,
          page: page,
          searchfield: searchString,
          searchType: type
        });
      })
      .catch(error => {
        console.log("There was an error with the request: " + error.message);
      });
  };

  onPageChange = newPage => {
    this.onSearch(this.state.type, this.state.searchfield, newPage);
    console.log(this.state.searchType);
  };

  onSearchBox = newSearch => {
    this.onSearch(this.state.searchType, newSearch, 1);
  };

  onSelectorChange = newType => {
    this.onSearch(newType, this.state.searchfield, 1);
  };

  render() {
    const { isLoaded, items, page, totalPages, client } = this.state;

    return (
      <div className="App">
        <SearchBox onSearch={this.onSearchBox} />
        <Selector
          onChange={this.onSelectorChange}
          type={this.state.searchType}
        />
        <Pages
          page={page}
          totalPages={totalPages}
          onPageChange={this.onPageChange}
        />
        {isLoaded ? (
          <CardList items={items} client={client} />
        ) : (
          <div>Loading...</div>
        )}
        <Pages
          page={page}
          totalPages={totalPages}
          onPageChange={this.onPageChange}
        />
      </div>
    );
  }
}

export default App;
