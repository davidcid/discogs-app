import React from "react";
import CardItem from "./CardItem";
import "./CardList.css";

const CardList = ({ items, client }) => {
  return (
    <div className="cardlist">
      {items.map((item, i) => {
        return (
          <CardItem
            title={items[i].title}
            style={{ width: 300 }}
            key={items[i].id}
            year={items[i].year}
            country={items[i].country}
            thumb={items[i].thumb}
            client={client}
            id={items[i].id}
          />
        );
      })}
    </div>
  );
};

export default CardList;
