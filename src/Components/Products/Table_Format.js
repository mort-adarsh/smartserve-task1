import React from "react";
import {} from "react-bootstrap";
const Table_Format = ({ data, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{data.title}</td>
      <td>{data.price}</td>
    </tr>
  );
};

export default Table_Format;
