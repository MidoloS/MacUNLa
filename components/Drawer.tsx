import React, { FC, ReactElement } from "react";

const Drawer: FC<{ children?: ReactElement }> = ({ children }) => {
  return (
    <aside className="absolute right-0 bg-white top-0 max-w-md h-screen shadow-lg p-8 transition-all">
      <div className="container">
        <span>X</span>
        <h1>Hola mundo</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Porro nihil
          hic quia modi accusantium ad rem animi ipsum, perferendis suscipit
          praesentium odio soluta sed numquam ipsa, voluptate magnam harum
          debitis.
        </p>
      </div>
    </aside>
  );
};

export default Drawer;
