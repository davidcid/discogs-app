import React from "react";
import { Button } from "antd";

class AddToCollection extends React.Component {
  render() {
    return (
      <Button
        type="primary"
        style={{ marginLeft: 5 }}
        onClick={this.props.addToCollection}
      >
        +
      </Button>
    );
  }
}

export default AddToCollection;

// idea: dejar el state collection en este componente. probar
