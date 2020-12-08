import React from "react";
import styled from "styled-components";

import Categories from "./Categories";
import List from "./List";

// Wanted the content to take up as much of the screen as it can with the footer at the bottom
const Content = styled.div`
  flex-grow: 1;
`;

export default function Home({ callCat, categories, resource, selectProd }) {
  return (
    <Content>
      {categories.length === 0 ? (
        <></>
      ) : (
        <>
          <Categories callCat={callCat} data={categories} />
          <List resource={resource} selectProd={selectProd} />
        </>
      )}
    </Content>
  );
}
