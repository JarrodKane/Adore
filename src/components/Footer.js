import React from "react";
import styled from "styled-components";

const FooterRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: #e0e0e0;
`;

export default function Footer() {
  return (
    <FooterRow>
      <p>Jarrod Kane - 2020</p>
    </FooterRow>
  );
}
