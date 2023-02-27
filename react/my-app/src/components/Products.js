import React from "react";

export default function Products() {
  const products = [
    {
      id: 1,
      title: "apple",
    },
    {
      id: 2,
      title: "mango",
    },
    {
      id: 3,
      title: "orange",
    },
  ];

  const listItems = products.map((product) => (
    <li key={product.id}>{product.title}</li>
  ));
  return <div>{listItems}</div>;
}
