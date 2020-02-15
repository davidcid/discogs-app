import React from "react";
import "./App.css";
import { Button } from "antd";
import MenuComponent from "./components/MenuComponent";
import AlbumsContainer from "./components/AlbumsContainer";

const App = () => (
  <div className="App">
    <MenuComponent />
    <Button type="danger">Button</Button>
    <AlbumsContainer />
  </div>
);

export default App;
