import React from "react";
import { Pagination } from "antd";

const Pages = ({ page, totalPages, onPageChange }) => {
  return (
    <div style={{ marginTop: 50, marginBottom: 20 }}>
      <Pagination current={page} total={totalPages} onChange={onPageChange} />
    </div>
  );
};

export default Pages;
