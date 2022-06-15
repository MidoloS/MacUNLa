import React, { FC } from "react";
import { Producto } from "../helpers/types";
import Product from "./Product";

const ProductList: FC<{ productos: Producto[]; canRemove?: boolean }> = ({
  productos,
  canRemove,
}) => {
  return (
    <article className="grid justify-center gap-4 auto-cols-max grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
      {productos.map((producto) => (
        <Product
          key={producto.idProducto}
          producto={producto}
          canRemove={canRemove}
        />
      ))}
    </article>
  );
};

export default ProductList;
