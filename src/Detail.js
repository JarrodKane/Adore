import React from "react";
import styled from "styled-components";
import parse from "html-react-parser";

const Content = styled.div`
  flex-grow: 1;
`;

const Category = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export default function Detail(props) {
  const {
    name,
    sku,
    description,
    calculated_price,
    categories,
  } = props.prod[0];
  const allCats = props.categories.data;

  // This is checking through the categories ids against the ids that the product have in order to find the string name of them to display to the user
  const stringCats = [];
  for (let i = 0; i < categories.length; i++) {
    const matchedCat = allCats.filter((cat) => cat.id === categories[i]);
    if (matchedCat.length !== 0) {
      // I was getting some of them returning with undefined when searching for category, so have filtered them out
      stringCats.push(matchedCat[0].name);
    }
  }

  //TODO: Change out the id being passed in for uuid
  return (
    <Content>
      <p>Name: {name}</p>
      <p>Price: ${calculated_price}</p>
      <Category>
        <h4>categories:</h4>
        {stringCats.map((txt, id) => (
          <p key={id}> {txt} </p>
        ))}
      </Category>
      <p>Sku: {sku}</p>
      <div>{parse(description)}</div>
    </Content>
  );
}
