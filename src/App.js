import React, { Component } from "react";
import "./App.css";
import Discojs from "discojs";
import CardList from "./components/CardList";
import SearchBox from "./components/SearchBox";

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
      USER_AGENT: "discogs-app/0.0.1"
    };
  }

  componentDidMount() {
    this.onSearch(this.state.searchfield);
  }

  onSearch = event => {
    const { USER_TOKEN, USER_KEY, USER_SECRET, USER_AGENT } = this.state;

    const client = new Discojs({
      userAgent: USER_AGENT,
      userToken: USER_TOKEN,
      consumerKey: USER_KEY,
      consumerSecret: USER_SECRET
    });

    client.searchRelease(event).then(res => {
      this.setState({
        isLoaded: true,
        items: res.results
      });
    });
  };

  render() {
    const { isLoaded, items, searchfield } = this.state;
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
        </div>
      );
    }
  }
}

export default App;
