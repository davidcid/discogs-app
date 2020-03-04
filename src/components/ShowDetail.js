import React from "react";
import { Modal, Button } from "antd";
import { Carousel } from "antd";
import ShowArtistData from "./ShowArtistData";
import ShowMasterData from "./ShowMasterData";
import "./ShowDetail.css";
import AddToCollection from "./AddToCollection";

class ShowDetail extends React.Component {
  state = {
    visible: false,
    item: {},
    isLoaded: false
  };

  handleCancel = () => {
    this.setState({ visible: false, isLoaded: false });
  };

  modalSearch = () => {
    this.props.type === "artist"
      ? this.props.client
          .getArtist(this.props.id)
          .then(res => {
            this.setState({
              item: res,
              isLoaded: true,
              visible: true
            });
          })
          .catch(error => {
            console.log("There was an error with the request: " + error);
          })
      : this.props.client
          .getMaster(this.props.id)
          .then(res => {
            this.setState({
              item: res,
              isLoaded: true,
              visible: true
            });
            console.log(res);
          })
          .catch(error => {
            console.log("There was an error with the request: " + error);
          });
  };

  render() {
    const { visible, item, isLoaded } = this.state;
    return (
      <div>
        <Button type="primary" onClick={this.modalSearch}>
          View Detail
        </Button>

        <Modal
          visible={visible}
          title={item.title}
          onCancel={this.handleCancel}
          footer={[
            <AddToCollection
              addToCollection={this.props.addToCollection}
              onCollection={this.props.onCollection}
            />
          ]}
        >
          {isLoaded ? (
            <div className="content">
              <Carousel autoplay>
                {item.images.map(image => {
                  return (
                    <div key={item.id}>
                      <img
                        className="artist-image"
                        src={image.uri}
                        alt=""
                      ></img>
                    </div>
                  );
                })}
              </Carousel>
              {this.props.type === "artist" ? (
                <ShowArtistData data={this.state.item} />
              ) : (
                <ShowMasterData data={this.state.item} />
              )}
            </div>
          ) : (
            <div className="content">
              <p>Loading...</p>
            </div>
          )}
        </Modal>
      </div>
    );
  }
}

export default ShowDetail;
