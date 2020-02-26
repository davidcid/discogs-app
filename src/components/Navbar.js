import React from "react";
import SearchBox from "./SearchBox";
import Selector from "./Selector";
import Logo from "../assets/images/logo.png";

const Navbar = ({ onSearchBox, onSelectorChange, type }) => {
  console.log("type: " + type);
  return (
    <nav
      style={{
        backgroundColor: "#272a44",
        padding: 20,
        boxShadow: "0 -5px 10px 5px",
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        flexWrap: "wrap"
      }}
    >
      <img src={Logo} alt="logo" width="250" />
      <div className="search">
        <SearchBox onSearch={onSearchBox} />
        <Selector onChange={onSelectorChange} type={type} />
      </div>
    </nav>
  );
};

export default Navbar;
