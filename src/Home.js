import React from "react";
import styled from "styled-components";

import Loader from "./helpers/Loader";

import Categories from "./Categories";
import List from "./List";

// Wanted the content to take up as much of the screen as it can with the footer at the bottom
const Content = styled.div`
  flex-grow: 1;
`;

export default function Home({
  callCat,
  categories,
  resource,
  selectProd,
  asyncNow,
}) {
  console.log(asyncNow);
  return (
    <Content>
      {categories.length === 0 ? (
        <></>
      ) : (
        <>
          <Categories callCat={callCat} data={categories} />
          {asyncNow ? (
            <Loader />
          ) : (
            <List resource={resource} selectProd={selectProd} />
          )}
        </>
      )}
    </Content>
  );
}

// {asyncNow ? <div>True</div> : <div>False</div>}
