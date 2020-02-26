import React, { Component } from "react";
import { Radio } from "antd";

class Selector extends Component {
  state = {
    value: this.props.type
  };

  onChange = event => {
    this.setState({
      value: event.target.value
    });
    this.props.onChange(event.target.value);
  };

  render() {
    return (
      <Radio.Group
        onChange={this.onChange}
        value={this.state.value}
        style={{ marginTop: 10 }}
      >
        <Radio value={"artist"} style={{ color: "#ffffff" }}>
          Artist
        </Radio>
        <Radio value={"master"} style={{ color: "#ffffff" }}>
          Album
        </Radio>
      </Radio.Group>
    );
  }
}

export default Selector;
