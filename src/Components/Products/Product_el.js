import React from "react";
import {} from "react-bootstrap";
const Product_el = ({ data, index }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{data.title}</td>
      <td>{data.price}</td>
    </tr>
  );
};

export default Product_el;
