import React from "react";
import CardItem from "./CardItem";
import "./CardList.css";

const CardList = ({
  items,
  client,
  collection,
  removeFromCollection,
  addToCollection
}) => {
  const handleCollection = item => {
    collection.includes(item)
      ? removeFromCollection(item)
      : addToCollection(item);
  };

  return (
    <div className="cardlist">
      {items.map((item, i) => {
        return (
          <CardItem
            title={item.title}
            key={item.id}
            thumb={item.thumb}
            client={client}
            id={item.id}
            type={item.type}
            onCollection={collection.includes(item.id)}
            modifyCollection={handleCollection}
          />
        );
      })}
    </div>
  );
};

export default CardList;
