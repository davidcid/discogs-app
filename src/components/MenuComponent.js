import { Input } from "antd";
import React from "react";

const { Search } = Input;

class MenuComponent extends React.Component {
  state = {
    current: "mail"
  };

  handleClick = e => {
    console.log("click ", e);
    this.setState({
      current: e.key
    });
  };

  render() {
    return (
      <div style={{ margin: 25 }}>
        <Search
          placeholder="search by artist, album or both"
          onSearch={value => console.log(value)}
          style={{ width: 400 }}
        />
      </div>
    );
  }
}

export default MenuComponent;
