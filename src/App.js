import React, { Component } from "react";
import "./App.css";
import Discojs from "discojs";
import CardList from "./components/CardList";
import Pages from "./components/Pages";
import Collection from "./components/Collection";
import Navbar from "./components/Navbar";

const USER_TOKEN = "fvXFPOrRSVzEqLNkSWgvrGiRlLuCmEFQJQQVBKaN";
const USER_KEY = "WwaXPmpRocIYWMWsQSxb";
const USER_SECRET = "AIjlNGAEjBHzqEBfKOgMqkBjCpCCbTIw";
const USER_AGENT = "discogs-app/0.0.1";

let itemsInCollection = [];

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
      searchType: "artist",
      collection: []
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
  };

  onSearchBox = newSearch => {
    this.onSearch(this.state.searchType, newSearch, 1);
  };

  onSelectorChange = newType => {
    this.onSearch(newType, this.state.searchfield, 1);
  };

  removeFromCollection = id => {
    for (let i = 0; i < itemsInCollection.length; i++) {
      if (itemsInCollection[i].id === id) {
        itemsInCollection.splice(i, 1);
      }
    }
    this.setState(state => {
      const collection = state.collection.filter(item => item !== id);
      return { collection };
    });
  };

  addToCollection = id => {
    const filteredItem = this.state.items.filter(item => item.id === id);
    itemsInCollection.push(filteredItem[0]);
    this.setState({
      collection: [...this.state.collection, id]
    });
  };

  render() {
    const {
      isLoaded,
      items,
      page,
      totalPages,
      client,
      collection,
      searchType
    } = this.state;

    return (
      <div className="App">
        <Navbar
          onSearchBox={this.onSearchBox}
          onSelectorChange={this.onSelectorChange}
          type={searchType}
        />

        <Collection collection={itemsInCollection} />

        <Pages
          page={page}
          totalPages={totalPages}
          onPageChange={this.onPageChange}
        />

        {isLoaded ? (
          <CardList
            items={items}
            client={client}
            collection={collection}
            removeFromCollection={this.removeFromCollection}
            addToCollection={this.addToCollection}
          />
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
