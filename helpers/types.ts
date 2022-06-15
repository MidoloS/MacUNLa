export interface Hamburguesa {
  idHamburguesa: number;
  nombre: string;
  precio: number;
  img: string;
  ingredientes?: string[];
}

export interface Producto {
  idProducto: number;
  nombre: string;
  precio: number;
  img: string;
  descripcion?: string;
}

export interface Carrito {
  productos: Producto[];
}
