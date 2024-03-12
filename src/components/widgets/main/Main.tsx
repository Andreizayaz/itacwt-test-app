import { FC, ReactElement, ReactNode } from "react";

import "./Main.scss";

type MainPropsTypes = {
  children: ReactNode;
};

export const Main: FC<MainPropsTypes> = ({ children }): ReactElement => (
  <main className="main">
    <div className="container">{children}</div>
  </main>
);
