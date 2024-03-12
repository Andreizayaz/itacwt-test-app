import { FC, ReactElement } from "react";
import { Helmet } from "react-helmet";

type CustomHelmetPropsTypes = {
  title: string;
};

export const CustomHelmet: FC<CustomHelmetPropsTypes> = ({
  title,
}): ReactElement => (
  <Helmet>
    <title>{title}</title>
  </Helmet>
);
