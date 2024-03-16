import { FC, ReactElement } from "react";

import "./PageHeading.scss";

type PageHeadingPropsTypes = {
  heading: string;
};

export const PageHeading: FC<PageHeadingPropsTypes> = ({
  heading,
}): ReactElement => <h2 className="page-heading">{heading}</h2>;
