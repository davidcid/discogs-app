import React from "react";
import { Modal, Button } from "antd";
import { Carousel } from "antd";
import "./ShowDetail.css";

class ShowDetail extends React.Component {
  state = {
    visible: false,
    item: {},
    isLoaded: false
  };

  showModal = () => {
    this.modalSearch();
    this.setState({
      visible: true
    });
  };

  handleCancel = () => {
    this.setState({ visible: false, isLoaded: false });
  };

  modalSearch = () => {
    this.props.client
      .getArtist(this.props.id)
      .then(res => {
        this.setState({
          item: res,
          isLoaded: true
        });
        console.log(res);
      })
      .then(() => {
        console.log(this.state.item.images[0].uri);
      });
  };

  render() {
    const { visible, loading, item, isLoaded } = this.state;
    return (
      <div>
        <Button
          type="primary"
          onClick={this.showModal}
          style={{ marginTop: 25 }}
        >
          View Detail
        </Button>

        <Modal
          visible={visible}
          title={item.name}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>
              Return
            </Button>,
            <Button key="submit" type="primary" loading={loading}>
              Submit
            </Button>
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

              <h4>Real name: </h4>
              <p>{item.realname}</p>
              <h4>Profile:</h4>
              <p>{item.profile}</p>
              <h4>More Information:</h4>
              <ul>
                {item.urls.map(url => {
                  return (
                    <li key={item.id}>
                      <a href={url} target="_blank" rel="noopener noreferrer">
                        {url}
                      </a>
                    </li>
                  );
                })}
              </ul>
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
