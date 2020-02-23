import React from "react";
import { Input } from "antd";

const { Search } = Input;

const SearchBox = ({ onSearch }) => {
  return (
    <div style={{ marginTop: 25, marginBottom: 10 }}>
      <Search
        placeholder="search by artist, album or both"
        onSearch={onSearch}
        style={{ maxWidth: 340, padding: 0 }}
      />
    </div>
  );
};

export default SearchBox;
