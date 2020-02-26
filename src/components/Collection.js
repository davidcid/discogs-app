import React from "react";

class Collection extends React.Component {
  render() {
    const items = this.props.collection;
    return (
      <ul>
        {items.map(item => {
          return <li>{item}</li>;
        })}
      </ul>
    );
  }
}

export default Collection;
