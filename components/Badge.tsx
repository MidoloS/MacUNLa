import { FC, ReactNode } from "react";

type Props = {
  children: ReactNode;
  count?: number;
};

const Badge: FC<Props> = ({ children, count = 0 }) => {
  return (
    <span>
      {children}
      {count > 0 && (
        <span className="bg-red-600 text-white font-medium ml-1 rounded-md relative bottom-2 left-2 px-2 ">
          {count}
        </span>
      )}
    </span>
  );
};

export default Badge;
