import { FC, ReactElement, ReactNode } from "react";

import "./Button.scss";

type ButtonPropsTypes = {
  children: ReactNode;
  classes?:string;
  clickHandler?: () => void;
};

export const Button: FC<ButtonPropsTypes> = ({
  children,classes='',
  clickHandler,
}): ReactElement => (
  <button className={`btn ${classes}`} onClick={clickHandler}>
    {children}
  </button>
);
