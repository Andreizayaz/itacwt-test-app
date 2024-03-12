import { FC, ReactElement } from "react";
import { PageHeading } from "src/components/shared";
import { HOME_HEADING } from "./helpers/consts";
import homeImage from "./img/homeImage.png";

const Home: FC = (): ReactElement => (
  <>
    <PageHeading heading={HOME_HEADING} />
    <img className="image" src={homeImage} alt="home" />
  </>
);
export default Home;
