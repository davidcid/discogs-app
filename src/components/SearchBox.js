import React from "react";
import { Input } from "antd";

const { Search } = Input;

const SearchBox = ({ onSearch }) => {
  return (
    <div style={{ margin: 25 }}>
      <Search
        placeholder="search by artist, album or both"
        onSearch={onSearch}
        style={{ maxWidth: 400 }}
      />
    </div>
  );
};

export default SearchBox;
