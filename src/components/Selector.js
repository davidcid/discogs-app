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
      <Radio.Group onChange={this.onChange} value={this.state.value}>
        <Radio value={"artist"}>Artist</Radio>
        <Radio value={"master"}>Album</Radio>
      </Radio.Group>
    );
  }
}

export default Selector;
