import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import BackArrow from "../components/BackArrow";
import Drawer from "../components/Drawer";
import Loading from "../components/Loading";
import ProductList from "../components/ProductList";
import { useCarrito } from "../helpers/contexts/useCart";
import { Producto } from "../helpers/types";

const Home: NextPage = () => {
  const { carrito, total } = useCarrito();
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const handleBuy = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };
  useEffect(() => {
    router.push("/");
  }, []);
  return (
    <main>
      <header className="m-5 ">
        <BackArrow />
      </header>
      <div className="grid gap-10 container justify-center md:p-7">
        <h1 className="text-gray-700 font-bold text-4xl">Carrito</h1>
        <ProductList productos={carrito} canRemove={true} />

        <button
          className="bg-red-500 p-4 text-white font-medium my-4 flex items-center justify-center relative md:max-w-xs"
          onClick={handleBuy}
        >
          {loading && (
            <span className="absolute left-5">
              <Loading />
            </span>
          )}
          PAGAR ({total}$)
        </button>
      </div>
    </main>
  );
};

export default Home;
