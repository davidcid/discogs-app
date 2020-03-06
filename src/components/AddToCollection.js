import React from "react";
import { Button, Tooltip } from "antd";

const AddToCollection = ({ addToCollection, onCollection }) => {
  let button;
  onCollection
    ? (button = (
        <Button
          type="danger"
          style={{ marginLeft: 5 }}
          onClick={addToCollection}
        >
          -
        </Button>
      ))
    : (button = (
        <Button
          type="primary"
          style={{ marginLeft: 5 }}
          onClick={addToCollection}
        >
          +
        </Button>
      ));

  return (
    <div>
      <Tooltip title="Add this item to your collection">{button}</Tooltip>
    </div>
  );
};

export default AddToCollection;
