import React from "react";
import styled from "styled-components";

import Categories from "./Categories";
import List from "./List";

const Body = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: wheat;
  font-family: Arial, Helvetica, sans-serif;
  max-width: 750px;
  margin: 0 auto;
  padding: 0 16px;
`;

// Wanted the content to take up as much of the screen as it can with the footer at the bottom
const Content = styled.div`
  flex-grow: 1;
`;

export default function Home({ categories, callCat, resource }) {
  return (
    <Content>
      {/* {resource.length === 0 ? <Loader /> : <List data={resource.data} />} */}
      {categories.length === 0 ? (
        <></>
      ) : (
        <>
          <Categories callCat={callCat} data={categories} />
          <List data={resource} />
        </>
      )}
    </Content>
  );
}
