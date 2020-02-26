import React from "react";
import "./Collection.css";

class Collection extends React.Component {
  hideCollection = () => {
    console.log("it works!");
  };

  render() {
    return (
      <div className="collection-box">
        <ul className="collection">
          {this.props.collection.map((item, id) => {
            return (
              <li key={id}>
                <div className="title">{item.title}</div>
                <img src={item.thumb} alt={item.title} style={{ width: 75 }} />
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Collection;
