import React from "react";
import "./App.css";
import { Button } from "antd";
import Menu from "./components/Menu";

const App = () => (
  <div className="App">
    <Menu />
    <Button type="danger">Button</Button>
  </div>
);

export default App;
