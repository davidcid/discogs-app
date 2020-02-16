import React from "react";
import { Card } from "antd";

const CardItem = ({ title, year, country, thumb }) => {
  return (
    <Card title={title} style={{ width: 300, margin: 25 }}>
      <p>{year}</p>
      <p>{country}</p>
      <img src={thumb} alt="" />
    </Card>
  );
};

export default CardItem;
