import React from "react";
import styled from "styled-components";
import { BrowserRouter as Link } from "react-router-dom";

const Item = styled.div`
  transition: 0.5s;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  cursor: pointer;
  background-color: #f7f7f7;
  padding: 0 16px;
  margin: 10px auto;

  &:hover {
    background-color: #292929;
    color: #f7f7f7;
  }
`;

// Super hacky way of creating a route to the page
// Todo : Change the route so instead of showing "Detail" it shows the name of the product in the URL

export default function Row(props) {
  const { id, name, sku } = props.product;
  const { selectProd } = props;

  return (
    <Link
      to="/detail"
      onClick={() => {
        selectProd(id);
      }}
    >
      <Item>
        <p>
          {id} {name} {sku}
        </p>
      </Item>
    </Link>
  );
}

// return <Link to="/detail">Detail</Link>;
