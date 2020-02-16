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
    this.onSearch(this.state.searchfield);
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
      perPage: 10
    };

    client.searchRelease(event, null, paginationOpt).then(res => {
      this.setState({
        isLoaded: true,
        items: res.results,
        totalPages: res.pagination.pages,
        page: res.pagination.page
      });
    });
  };

  onPageChange = page => {
    this.setState({ page });
    console.log(this.state.page + " " + page);
    this.onSearch(this.state.searchfield);
  };

  render() {
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
          <CardList items={filteredItems} />
          <Pages
            page={page}
            totalPages={totalPages}
            onPageChange={this.onPageChange}
          />
        </div>
      );
    }
  }
}

export default App;
