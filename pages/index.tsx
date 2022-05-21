import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import Product from "../components/Product";
import ProductList from "../components/ProductList";
import { Hamburguesa } from "../helpers/types";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const [hamburguesas, setHamburguesas] = useState<Array<Hamburguesa>>([]);

  useEffect(() => {
    setHamburguesas([
      {
        idHamburguesa: 1,
        nombre: "Grand Triple McBacon",
        precio: 900,
        img: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kQX3BMhy/200/200/original?country=ar",
      },
      {
        idHamburguesa: 2,
        nombre: "McDuo",
        precio: 612,
        img: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kcXhzvVg/200/200/original?country=ar",
      },
      {
        idHamburguesa: 3,
        nombre: "Big Mac",
        precio: 450,
        img: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqX3vl0y/200/200/original?country=ar",
      },
      {
        idHamburguesa: 4,
        nombre: "Doble Cuarto de Libra con Queso",
        precio: 700,
        img: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar",
      },
      {
        idHamburguesa: 5,
        nombre: "Doble Cuarto de Libra con Queso",
        precio: 700,
        img: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar",
      },
      {
        idHamburguesa: 6,
        nombre: "Doble Cuarto de Libra con Queso",
        precio: 700,
        img: "https://cache-backend-mcd.mcdonaldscupones.com/media/image/product$kqXt7Sq2/200/200/original?country=ar",
      },
    ]);
  }, []);

  return (
    <main className="flex justify-center">
      <div className="grid gap-10 container m-5">
        <h1 className="text-gray-700 font-bold text-4xl">Elige a tu gusto</h1>
        <ProductList hamburguesas={hamburguesas} />
      </div>
    </main>
  );
};

export default Home;
