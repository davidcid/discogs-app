import React from "react";
import { Button } from "antd";

class AddToCollection extends React.Component {
  render() {
    const onCollection = this.props.onCollection;
    let button;
    onCollection
      ? (button = (
          <Button
            type="danger"
            style={{ marginLeft: 5 }}
            onClick={this.props.addToCollection}
          >
            -
          </Button>
        ))
      : (button = (
          <Button
            type="primary"
            style={{ marginLeft: 5 }}
            onClick={this.props.addToCollection}
          >
            +
          </Button>
        ));

    return <div>{button}</div>;
  }
}

export default AddToCollection;
