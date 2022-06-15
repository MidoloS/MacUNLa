import React, { FC } from "react";
import { Producto } from "../helpers/types";
import Image from "next/image";
import { useCarrito } from "../helpers/contexts/useCart";
import Link from "next/link";

const Product: FC<{ producto: Producto; canRemove?: boolean }> = ({
  producto,
  canRemove = false,
}) => {
  const { idProducto, nombre, img, precio } = producto;
  const { carrito, borrarProducto } = useCarrito();
  return (
    <>
      <section className="bg-white min-w-sm p-4 rounded-lg shadow-md flex flex-col justify-center cursor-pointer">
        <figure className="flex flex-col items-center justify-center mb-2">
          <Link href={`/producto/${idProducto}`}>
            <a>
              <Image src={img} alt={nombre} width={140} height={120} />
            </a>
          </Link>
          <figcaption className="text-center font-medium line-clamp-2">
            {nombre}
          </figcaption>
        </figure>
        <div>
          <p className="text-gray-800 font-bold text-center text-xl">
            <span className="font-normal text-sm text-gray-400 relative bottom-1 right-1">
              $
            </span>
            {precio}.0
          </p>
        </div>
        {canRemove && (
          <button
            className="mt-3 bg-transparent hover:bg-red-500 text-red-700 font-semibold hover:text-white py-2 px-4 border border-red-500 hover:border-transparent rounded"
            onClick={() => borrarProducto(idProducto)}
          >
            Quitar
          </button>
        )}
      </section>
    </>
  );
};

export default Product;
