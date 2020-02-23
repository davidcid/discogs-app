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
      client: client,
      searchType: "artist"
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.onSearch(this.state.type, this.state.searchfield, 1);
  }

  onSearch = (type, searchString, page) => {
    console.log("onSearh");

    const paginationOpt = {
      page: page,
      perPage: 26
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
      });
  };

  onPageChange = newPage => {
    this.onSearch(this.state.type, this.state.searchfield, newPage);
  };

  onSearchBox = event => {
    this.onSearch(this.state.type, event, 1);
  };

  onSelectorChange = event => {
    this.onSearch(event, this.state.searchfield, 1);
  };

  render() {
    console.log("render App");
    const {
      isLoaded,
      items,
      searchfield,
      page,
      totalPages,
      client
    } = this.state;
    const filteredItems = items.filter(item => {
      return item.title.toLowerCase().includes(searchfield.toLowerCase());
    });
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
          <CardList items={filteredItems} client={client} />
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
