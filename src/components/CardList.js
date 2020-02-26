import React from "react";
import CardItem from "./CardItem";
import "./CardList.css";

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      collection: this.props.collection
    };
  }

  handleCollection = item => {
    this.state.collection.includes(item)
      ? this.props.removeFromCollection(item)
      : this.props.addToCollection(item);
  };

  render() {
    const { items, client } = this.props;
    return (
      <div className="cardlist">
        {items.map((item, i) => {
          // console.log(item);
          return (
            <CardItem
              title={item.title}
              key={item.id}
              year={item.year}
              country={item.country}
              thumb={item.thumb}
              client={client}
              id={item.id}
              type={item.type}
              onCollection={this.state.collection.includes(item.id)}
              modifyCollection={this.handleCollection}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
