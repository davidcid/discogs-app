import React from "react";
import { Modal, Button } from "antd";

class ShowDetail extends React.Component {
  state = {
    loading: false,
    visible: false,
    item: {},
    isLoaded: false
  };

  showModal = () => {
    this.searchTest();
    this.setState({
      visible: true
    });
  };

  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };

  handleCancel = () => {
    this.setState({ visible: false, isLoaded: false });
  };

  searchTest = () => {
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
            <Button
              key="submit"
              type="primary"
              loading={loading}
              onClick={this.handleOk}
            >
              Submit
            </Button>
          ]}
        >
          {isLoaded ? (
            <div className="content">
              <img src={item.images[0].uri} alt="" style={{ width: 150 }} />
              <h4>Profile:</h4>
              <p>{item.profile}</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
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
