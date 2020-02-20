import React from "react";
import { Card } from "antd";
import ShowDetail from "./ShowDetail";

const CardItem = ({ title, thumb, client, id }) => {
  const handleClick = () => {
    console.log("you are clicking " + title);
  };

  return (
    <div className="card">
      <Card
        title={title}
        style={{ width: 300, margin: 25 }}
        onClick={handleClick}
      >
        <img src={thumb} alt="" />
        <ShowDetail client={client} id={id} />
      </Card>
    </div>
  );
};

export default CardItem;
