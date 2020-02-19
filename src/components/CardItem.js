import React from "react";
import { Card } from "antd";
import ShowDetail from "./ShowDetail";

const CardItem = ({ title, year, country, thumb }) => {
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
        <p>{year}</p>
        <p>{country}</p>
        <img src={thumb} alt="" />
        <ShowDetail />
      </Card>
    </div>
  );
};

export default CardItem;
