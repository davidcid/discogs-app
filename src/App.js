import React, { Component } from "react";
import "./App.css";
import Discojs from "discojs";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";
import Pages from "./components/Pages";

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
    this.onSearch(this.state.searchfield);
  }

  componentDidUpdate() {
    console.log("actualizando...");
  }

  onSearch = event => {
    const { USER_TOKEN, USER_KEY, USER_SECRET, USER_AGENT, page } = this.state;

    const client = new Discojs({
      userAgent: USER_AGENT,
      userToken: USER_TOKEN,
      consumerKey: USER_KEY,
      consumerSecret: USER_SECRET
    });

    const paginationOpt = {
      page,
      perPage: 6
    };

    client.searchRelease(event, null, paginationOpt).then(res => {
      this.setState({
        isLoaded: true,
        items: res.results,
        totalPages: res.pagination.pages,
        page: res.pagination.page,
        searchfield: event
      });
    });
  };

  onPageChange = page => {
    this.setState({ page });
    console.log(`state: ${this.state.page}, page clicked: ${page}`);
    console.log(this.state.searchfield);
    this.onSearch(this.state.searchfield);
  };

  render() {
    console.log("render");
    const { isLoaded, items, searchfield, page, totalPages } = this.state;
    const filteredItems = items.filter(item => {
      return item.title.toLowerCase().includes(searchfield.toLowerCase());
    });

    if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="App">
          <SearchBox onSearch={this.onSearch} />
          <Pages
            page={page}
            totalPages={totalPages}
            onPageChange={this.onPageChange}
          />
          <CardList items={filteredItems} />
        </div>
      );
    }
  }
}

export default App;
