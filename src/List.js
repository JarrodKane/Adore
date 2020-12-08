import React from "react";
import Loader from "./helpers/Loader";

import Row from "./Row";

export default function List(props) {
  const data = props.resource;
  const selectProd = props.selectProd;

  if (data.length === 0) {
    return <Loader />;
  } else {
    const rows = data.data.map((product, index) => (
      <Row key={product.id} product={product} selectProd={selectProd} />
    ));
    return rows;
  }
}
