import React from "react";
import CardItem from "./CardItem";
import "./CardList.css";

class CardList extends React.Component {
  handleCollection = item => {
    this.props.collection.includes(item)
      ? this.props.removeFromCollection(item)
      : this.props.addToCollection(item);
  };

  render() {
    const { items, client } = this.props;
    console.log(this.props.collection);
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
              onCollection={this.props.collection.includes(item.id)}
              modifyCollection={this.handleCollection}
            />
          );
        })}
      </div>
    );
  }
}

export default CardList;
