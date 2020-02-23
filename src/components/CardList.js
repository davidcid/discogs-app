import React from "react";
import CardItem from "./CardItem";
import "./CardList.css";

const CardList = ({ items, client }) => {
  return (
    <div className="cardlist">
      {items.map((item, i) => {
        // console.log(item);
        return (
          <CardItem
            title={items[i].title}
            key={items[i].id}
            year={items[i].year}
            country={items[i].country}
            thumb={items[i].thumb}
            client={client}
            id={items[i].id}
            type={items[i].type}
          />
        );
      })}
    </div>
  );
};

export default CardList;
