import React, { Component } from "react";
import { Pagination } from "antd";

class Pages extends Component {
  render() {
    return (
      <div style={{ margin: 20 }}>
        <Pagination
          current={this.props.page}
          total={this.props.totalPages}
          onChange={this.props.onPageChange}
        />
      </div>
    );
  }
}

export default Pages;
