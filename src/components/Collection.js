import React from "react";

class Collection extends React.Component {
  render() {
    return (
      <ul
        style={{
          position: "fixed",
          bottom: 0,
          backgroundColor: "#ffffff",
          width: "100%",
          zIndex: 99,
          display: "flex",
          justifyContent: "flex start",
          alignItems: "center",
          flexDirection: "row",
          flexWrap: "wrap"
        }}
      >
        {this.props.collection.map((item, id) => {
          return (
            <li
              key={id}
              style={{
                margin: 7,
                listStyle: "none"
              }}
            >
              <div className="title">{item.title}</div>
              <img src={item.thumb} alt={item.title} style={{ width: 95 }} />
            </li>
          );
        })}
      </ul>
    );
  }
}

export default Collection;
