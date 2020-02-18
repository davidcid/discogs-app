import React from "react";
import { Pagination } from "antd";

const Pages = ({ page, totalPages, onPageChange }) => {
  return (
    <div style={{ margin: 20 }}>
      <Pagination
        defaultCurrent={page}
        total={totalPages}
        onChange={onPageChange}
      />
    </div>
  );
};

export default Pages;
