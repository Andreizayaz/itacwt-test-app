import { FC, ReactElement, ReactNode } from "react";
import { Link, useMatch } from "react-router-dom";

type CustomLinkPropsTypes = {
  to: string;
  children: ReactNode;
};

export const CustomLink: FC<CustomLinkPropsTypes> = ({
  to,
  children,
}): ReactElement => {
  const isActive = useMatch(to);
  return (
    <Link
      to={to}
      className={isActive ? "links__item links__item_active" : "links__item"}
    >
      {children}
    </Link>
  );
};
