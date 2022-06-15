import { NextPage } from "next";
import Image from "next/image";
import { useState } from "react";
import { PRODUCTS } from "..";
import BackArrow from "../../components/BackArrow";
import Badge from "../../components/Badge";
import CartIcon from "../../components/CartIcon";
import { useCarrito } from "../../helpers/contexts/useCart";
import { Producto } from "../../helpers/types";

const LOREM =
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione soluta ut perferendis minus reprehenderit. Aliquid expedita consequatur labore quas aspernatur aut eos repellat. Nisi ipsum ea dolorum itaque laborum iusto.";

// posts will be populated at build time by getStaticProps()
const ProductPage: NextPage<{ producto: Producto }> = ({ producto }) => {
  const { nombre, img, precio = 120, descripcion = LOREM } = producto;
  const { carrito, agregarProducto, total } = useCarrito();

  return (
    <main className="grid gap-5 md:grid-cols-2">
      <header className="absolute flex justify-between w-full p-3 md:p-7">
        <BackArrow />
        <Badge count={carrito.length}>
          <CartIcon />
        </Badge>
      </header>
      <div className="flex bg-red-500 justify-center md:bg-transparent">
        <Image src={img} alt={nombre} height={220} width={220} layout="fixed" />
      </div>
      <div className="grid max-w-4xl gap-4 m-5">
        <h1 className="text-gray-700 font-bold text-4xl">{nombre}</h1>
        <div className="description md:max-w-xl">
          <h3 className="text-gray-700 font-medium text-xl">Descripcion</h3>
          <p className="text-gray-500">{descripcion}</p>
          <button
            className="bg-red-500 p-4 text-white font-medium my-5 md:max-w-xs"
            onClick={() => agregarProducto(producto)}
          >
            AGREGAR AL CARRITO ({precio}$)
          </button>
        </div>
      </div>
    </main>
  );
};

export async function getStaticPaths() {
  // const paths = await getAllProducts();
  return {
    paths: [
      "/producto/1",
      "/producto/2",
      "/producto/3",
      "/producto/4",
      "/producto/5",
      "/producto/6",
    ],
    fallback: false,
  };
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries.
export async function getStaticProps({
  params: { id },
}: {
  params: { id: string };
}) {
  // Call an external API endpoint to get posts.
  // You can use any data fetching library
  // const res = await fetch("https://.../posts");
  // const posts = await res.json()

  const producto = PRODUCTS.find((el) => String(el.idProducto) === id);

  console.log({ producto });

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      producto,
    },
  };
}

export default ProductPage;
