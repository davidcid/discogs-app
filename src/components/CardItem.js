import React from "react";
import { Card } from "antd";
import ShowDetail from "./ShowDetail";
import AddToCollection from "./AddToCollection";

const CardItem = ({
  title,
  key,
  thumb,
  client,
  id,
  type,
  onCollection,
  modifyCollection
}) => {
  const addToCollection = () => {
    modifyCollection(id);
  };

  return (
    <div className="card">
      <Card
        hoverable={true}
        title={title}
        style={{
          width: 220,
          margin: 15,
          borderRadius: 8
        }}
      >
        <img src={thumb} alt={title} width="100%" />
        <div
          className="buttons"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: 15
          }}
        >
          <ShowDetail
            client={client}
            id={id}
            type={type}
            addToCollection={addToCollection}
            onCollection={onCollection}
          />
          <AddToCollection
            addToCollection={addToCollection}
            onCollection={onCollection}
          />
        </div>
      </Card>
    </div>
  );
};

export default CardItem;
