import React from "react";
import SearchBox from "./SearchBox";
import Selector from "./Selector";

const Navbar = ({ onSearchBox, onSelectorChange, searchType }) => {
  return (
    <nav>
      <SearchBox onSearch={onSearchBox} />
      <Selector onChange={onSelectorChange} type={searchType} />
    </nav>
  );
};

export default Navbar;
