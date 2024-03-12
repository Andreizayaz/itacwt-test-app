import { FC, ReactElement } from "react";
import { CustomHelmet, PageHeading } from "src/components/shared";

import errorImage from "./img/errorImage.jpeg";
import { BACK_HOME, ERRORS_HEADING } from "./helpers/consts";
import { Link } from "react-router-dom";
import { HOME_URL } from "src/router/consts";

import "./Errors.scss";

const Errors: FC = (): ReactElement => (
  <>
    <CustomHelmet title={ERRORS_HEADING} />
    <PageHeading heading={ERRORS_HEADING} />
    <img className="image" src={errorImage} alt="home" />
    <Link className="back-home" to={HOME_URL}>
      {BACK_HOME}
    </Link>
  </>
);
export default Errors;
