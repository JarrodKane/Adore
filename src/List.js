import React from "react";
import Loader from "./helpers/Loader";

import Row from "./components/Row";

export default function List({ data }) {
  if (data.length === 0) {
    return <Loader />;
  } else {
    console.log(data.data);
    const rows = data.data.map((product, index) => (
      <Row key={product.id} product={product} />
    ));
    return rows;
  }
}
