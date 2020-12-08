import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

const Item = styled.div`
  cursor: pointer;
`;

// These filters are currently a set selection
// TODO: change so that it's not a set selection, and that the user can select them
export default function List({ callCat, data }) {
  return (
    <Row>
      <Item
        id={data.data[0]}
        onClick={() => {
          callCat(data.data[0].id);
        }}
      >
        All
      </Item>
      <Item
        id={data.data[11]}
        onClick={() => {
          callCat(data.data[11].id);
        }}
      >
        Makeup
      </Item>
      <Item
        id={data.data[16]}
        onClick={() => {
          callCat(data.data[16].id);
        }}
      >
        Exsessive Oilness
      </Item>
      <Item
        id={data.data[21]}
        onClick={() => {
          callCat(data.data[21].id);
        }}
      >
        Gift with Purchase
      </Item>
      <Item
        id={data.data[14]}
        onClick={() => {
          callCat(data.data[14].id);
        }}
      >
        Aesop
      </Item>
    </Row>
  );
}
