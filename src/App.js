import React, { Component } from "react";
import "./App.css";
import Discojs from "discojs";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Pages from "./components/Pages";
import ShowDetail from "./components/ShowDetail";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
      searchfield: "",
      USER_TOKEN: "fvXFPOrRSVzEqLNkSWgvrGiRlLuCmEFQJQQVBKaN",
      USER_KEY: "WwaXPmpRocIYWMWsQSxb",
      USER_SECRET: "AIjlNGAEjBHzqEBfKOgMqkBjCpCCbTIw",
      USER_AGENT: "discogs-app/0.0.1",
      page: 1,
      totalPages: 0
    };
  }

  componentDidMount() {
    console.log("componentDidMount");
    this.onSearch(this.state.searchfield, 1);
  }

  onSearch = (searchString, page) => {
    console.log("onSearh");
    const { USER_TOKEN, USER_KEY, USER_SECRET, USER_AGENT } = this.state;

    const client = new Discojs({
      userAgent: USER_AGENT,
      userToken: USER_TOKEN,
      consumerKey: USER_KEY,
      consumerSecret: USER_SECRET
    });

    const paginationOpt = {
      page: page,
      perPage: 6
    };

    client.searchRelease(searchString, null, paginationOpt).then(res => {
      this.setState({
        isLoaded: true,
        items: res.results,
        totalPages: res.pagination.pages,
        page: page,
        searchfield: searchString
      });
    });
  };

  onPageChange = newPage => {
    this.onSearch(this.state.searchfield, newPage);
  };

  onSearchBox = event => {
    this.onSearch(event, 1);
  };

  render() {
    console.log("render App");
    const { isLoaded, items, searchfield, page, totalPages } = this.state;
    const filteredItems = items.filter(item => {
      return item.title.toLowerCase().includes(searchfield.toLowerCase());
    });
    return (
      <div className="App">
        <SearchBox onSearch={this.onSearchBox} />
        <Pages
          page={page}
          totalPages={totalPages}
          onPageChange={this.onPageChange}
        />
        {isLoaded ? <CardList items={filteredItems} /> : <div>Loading...</div>}
      </div>
    );
  }
}

export default App;
