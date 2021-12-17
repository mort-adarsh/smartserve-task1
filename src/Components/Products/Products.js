import React, { useEffect, useState } from "react";
import axios from "axios";
import { Container, Table } from "react-bootstrap";
import Product_el from "./Product_el";
const Products = () => {
  const [products, setProduct] = useState([]);

  useEffect(() => {
    async function getData() {
      let Result = [];
      const result = await axios.get(
        "https://s3.amazonaws.com/open-to-cors/assignment.json"
      );
      Object.values(result.data.products).forEach((val) => {
        console.log(typeof +val.popularity);
        Result.push({
          title: val.title,
          price: +val.price,
          popularity: +val.popularity,
        });
      });

      const P = await Promise.all(Result.map(async (el) => await el));
      P.sort((a, b) => {
        return b.popularity - a.popularity;
      });
      console.log(P);
      setProduct(P);
    }

    getData();
  }, []);

  return (
    <>
      <Container>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>S.no</th>
              <th>Title</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((data, index) => {
              return <Product_el index={index} data={data} />;
            })}
          </tbody>
        </Table>
      </Container>
    </>
  );
};

export default Products;
