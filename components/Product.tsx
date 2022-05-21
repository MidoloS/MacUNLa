import React, { FC } from "react";
import { Hamburguesa } from "../helpers/types";
import Image from "next/image";

const Product: FC<Hamburguesa> = ({ nombre = "123", img, precio }) => {
  console.log({ img });
  return (
    <section className="bg-white min-w-sm p-4 rounded-lg shadow-md flex flex-col justify-center">
      <figure className="flex flex-col items-center justify-center mb-2">
        <Image src={img} alt={nombre} width={140} height={120} />
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
    </section>
  );
};

export default Product;
