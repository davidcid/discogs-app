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
      searchfield: ""
    };
  }

  componentDidMount() {
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

    client.searchRelease("green day").then(res => {
      this.setState({
        isLoaded: true,
        items: res.results
      });
    });
  }

  onSearchChange = event => {
    this.setState({ searchfield: event.target.value });
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
          <SearchBox searchChange={this.onSearchChange} />
          <CardList items={items} />
        </div>
      );
    }
  }
}

export default App;
