import React, { FC } from "react";
import { Hamburguesa } from "../helpers/types";
import Product from "./Product";

const ProductList: FC<{ hamburguesas: Hamburguesa[] }> = ({ hamburguesas }) => {
  return (
    <article className="grid justify-center gap-4 auto-cols-max grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {hamburguesas.map((hamburguesa) => (
        <Product key={hamburguesa.idHamburguesa} {...hamburguesa} />
      ))}
    </article>
  );
};

export default ProductList;
