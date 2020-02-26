import React from "react";

class Collection extends React.Component {
  //   searchItemCollection = id => {
  //     this.props.client.getArtist(id).then(res => {
  //       console.log(res.name);
  //     });
  //   };

  render() {
    const collection = this.props.collection;

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
        {collection.map((item, id) => {
          const itemToAdd = this.props.items.find(
            element => element.id === item
          );
          return (
            <div>
              <li key={id}>{itemToAdd.title}</li>
              <img src={itemToAdd.thumb} alt={itemToAdd.title} />
            </div>
          );
        })}
      </ul>
    );
  }
}

export default Collection;
