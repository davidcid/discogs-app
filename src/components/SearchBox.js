import React from "react";
import { Input } from "antd";

const { Search } = Input;

const SearchBox = ({ onSearch }) => {
  return (
    <div>
      <Search
        placeholder="search by artist or album"
        onSearch={onSearch}
        style={{ width: 340, padding: 0, maxWidth: "90%" }}
      />
    </div>
  );
};

export default SearchBox;
