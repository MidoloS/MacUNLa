import "../styles/globals.css";
import type { AppProps } from "next/app";
import { CarritoProvider } from "../helpers/contexts/useCart";
import { useState } from "react";
import { Producto } from "../helpers/types";

function MyApp({ Component, pageProps }: AppProps) {
  const [carrito, setCarrito] = useState<Array<Producto>>([]);
  return (
    <CarritoProvider
      carrito={carrito}
      setCarrito={(producto: Producto[]) => setCarrito(producto)}
    >
      <Component {...pageProps} />
    </CarritoProvider>
  );
}

export default MyApp;
