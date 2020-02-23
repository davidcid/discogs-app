import React from "react";
import { Card } from "antd";
import ShowDetail from "./ShowDetail";

const CardItem = ({ title, thumb, client, id, type }) => {
  const handleClick = () => {
    console.log("you are clicking " + title);
  };

  return (
    <div className="card">
      <Card
        hoverable={true}
        title={title}
        style={{
          width: 240,
          margin: 15,
          borderRadius: 8
        }}
        onClick={handleClick}
      >
        <img src={thumb} alt={title} />
        <ShowDetail client={client} id={id} type={type} />
      </Card>
    </div>
  );
};

export default CardItem;
