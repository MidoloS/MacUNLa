import {
  createContext,
  ReactElement,
  useContext,
  useEffect,
  useState,
} from "react";

import { Producto } from "../types";

interface ICarritoContext {
  carrito: Producto[];
  setCarrito: (carrito: Producto[]) => void;
  agregarProducto: (producto: Producto) => void;
  borrarProducto: (idProducto: number) => void;
  total: number;
}

const CarritoContext = createContext<ICarritoContext>({
  carrito: [],
  setCarrito: () => {},
  agregarProducto: () => {},
  borrarProducto: () => {},
  total: 0,
});

const CarritoProvider = ({
  children = {} as ReactElement,
  carrito = [] as Producto[],
  setCarrito = (producto: Producto[]) => {},
}) => {
  const borrarProducto = (idProducto: number) => {
    setCarrito(
      carrito.filter((producto) => producto.idProducto !== idProducto)
    );
  };
  const agregarProducto = (producto: Producto) => {
    setCarrito([...carrito, producto]);
  };
  const [total, setTotal] = useState<number>(0);
  useEffect(() => {
    setTotal(carrito.reduce((total, producto) => total + producto.precio, 0));
  }, [carrito]);
  return (
    <CarritoContext.Provider
      value={{ carrito, setCarrito, agregarProducto, borrarProducto, total }}
    >
      {children}
    </CarritoContext.Provider>
  );
};

const CarritoConsumer = CarritoContext.Consumer;
const useCarrito = () => useContext(CarritoContext);
export { CarritoContext, CarritoConsumer, CarritoProvider, useCarrito };
