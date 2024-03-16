import { FC, ReactElement } from "react";
import { CustomLink } from "src/components/shared";
import { routes } from "src/router/consts";

import "./Header.scss";

export const Header: FC = (): ReactElement => (
  <header className="header">
    <div className="header__container container">
      <nav>
        <ul className="links">
          {routes.map(({ url, text }) => (
            <li key={url}>
              <CustomLink to={url}>{text}</CustomLink>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  </header>
);
