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
        hoverable
        title={title}
        style={{
          width: 240,
          margin: 15,
          backgroundColor: "#141414",
          border: 0,
          borderRadius: 8
        }}
        headStyle={{ color: "white", border: 0 }}
        onClick={handleClick}
      >
        <img src={thumb} alt="" />
        <ShowDetail client={client} id={id} />
      </Card>
    </div>
  );
};

export default CardItem;
