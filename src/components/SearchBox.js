import React from "react";
import { Input } from "antd";

const { Search } = Input;

const SearchBox = ({ searchChange }) => {
  return (
    <div style={{ margin: 25 }}>
      <Search
        placeholder="search by artist, album or both"
        onSearch={value => console.log(value)}
        style={{ width: 400 }}
      />
    </div>
  );
};

export default SearchBox;
