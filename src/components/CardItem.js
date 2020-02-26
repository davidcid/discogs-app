import React from "react";
import { Card } from "antd";
import ShowDetail from "./ShowDetail";
import AddToCollection from "./AddToCollection";

class CardItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      onCollection: this.props.onCollection
    };
  }

  addToCollection = () => {
    this.state.onCollection
      ? this.setState({ onCollection: false })
      : this.setState({ onCollection: true });
    this.props.modifyCollection(this.props.id);
  };

  render() {
    return (
      <div className="card">
        <Card
          hoverable={true}
          title={this.props.title}
          style={{
            width: 240,
            margin: 15,
            borderRadius: 8
          }}
        >
          <img src={this.props.thumb} alt={this.props.title} />
          <div
            className="buttons"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginTop: 15
            }}
          >
            <ShowDetail
              client={this.props.client}
              id={this.props.id}
              type={this.props.type}
            />
            <AddToCollection
              addToCollection={this.addToCollection}
              onCollection={this.state.onCollection}
            />
          </div>
        </Card>
      </div>
    );
  }
}

export default CardItem;
