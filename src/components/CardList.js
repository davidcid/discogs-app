import React from "react";
import CardItem from "./CardItem";

const CardList = ({ items }) => {
  return (
    <div>
      {items.map((item, i) => {
        return (
          <CardItem
            title={items[i].title}
            style={{ width: 300 }}
            key={items[i].id}
            year={items[i].year}
            country={items[i].country}
            thumb={items[i].thumb}
          />
        );
      })}
    </div>
  );
};

export default CardList;
