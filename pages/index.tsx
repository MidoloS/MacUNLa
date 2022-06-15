import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Drawer from "../components/Drawer";
import ProductList from "../components/ProductList";
import { Producto } from "../helpers/types";
import Image from "next/image";
import Loading from "../components/Loading";
import Badge from "../components/Badge";
import CartIcon from "../components/CartIcon";
import { useCarrito } from "../helpers/contexts/useCart";

export const PRODUCTS = [
  {
    idProducto: 1,
    nombre: "Grand Triple McBacon",
    precio: 900,
    img: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kQX3BMhy/200/200/original?country=ar",
  },
  {
    idProducto: 2,
    nombre: "McDuo",
    precio: 612,
    img: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXhzvVg/200/200/original?country=ar",
  },
  {
    idProducto: 3,
    nombre: "Big Mac",
    precio: 450,
    img: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX3vl0y/200/200/original?country=ar",
  },
  {
    idProducto: 4,
    nombre: "Doble Cuarto de Libra con Queso",
    precio: 700,
    img: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar",
  },
  {
    idProducto: 5,
    nombre: "Doble Cuarto de Libra con Queso",
    precio: 700,
    img: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar",
  },
  {
    idProducto: 6,
    nombre: "Doble Cuarto de Libra con Queso",
    precio: 700,
    img: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar",
  },
];

const Home: NextPage = () => {
  const [productos, setProductos] = useState<Array<Producto>>([]);
  const { carrito } = useCarrito();
  useEffect(() => {
    setProductos(PRODUCTS);
  }, []);

  const handleSearch = (search: string) => {
    console.log({ search });
    setProductos(
      PRODUCTS.filter((producto) =>
        producto.nombre.toLowerCase().includes(search.toLowerCase())
      )
    );
  };

  return (
    <main className="flex justify-center">
      <header className="absolute flex  justify-between w-full p-3 md:p-7">
        <Badge count={carrito.length}>
          <CartIcon />
        </Badge>
      </header>
      <div className="grid gap-10 container m-5">
        <Image src="/mac.png" width={50} height={50} layout="fixed" />
        <h1 className="text-gray-700 font-bold text-4xl">Elige a tu gusto</h1>
        <input
          type="text"
          className="bg-white p-3 shadow-sm md:max-w-lg"
          placeholder="Big Mac, McDuo"
          onChange={(e) => handleSearch(e.target.value)}
        />
        <ProductList productos={productos} />
      </div>
    </main>
  );
};

export default Home;
