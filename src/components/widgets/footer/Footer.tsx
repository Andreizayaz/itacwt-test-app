import { FC, ReactElement } from "react";

import "./Footer.scss";
import { APP_AUTHOR, APP_NAME, APP_YEAR, GITHUB_URL } from "./helpers/consts";

export const Footer: FC = (): ReactElement => (
  <header className="footer">
    <div className="footer__items container">
      <h3 className="info-item">{APP_NAME}</h3>
      <a
        href={GITHUB_URL}
        className="info-item"
        target="_blank"
        rel="noreferrer"
      >
        {APP_AUTHOR}
      </a>
      <p className="info-item">&copy; {APP_YEAR}</p>
    </div>
  </header>
);
