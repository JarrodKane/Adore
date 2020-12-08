import React from "react";

export default function Row(product) {
  console.log(product);
  const { id, name, sku } = product.product;
  console.log(sku);
  return (
    <div>
      <p>
        {id} {name} {sku}
      </p>
    </div>
  );
}
