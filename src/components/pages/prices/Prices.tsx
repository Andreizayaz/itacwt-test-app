import { FC, ReactElement } from "react";
import { Price } from "src/components/entities";
import { CustomHelmet, PageHeading } from "src/components/shared";
import { PRICES_HEADING } from "./helpers/consts";

const Prices: FC = (): ReactElement => (
  <>
    <CustomHelmet title={PRICES_HEADING} />
    <PageHeading heading={PRICES_HEADING} />
    <Price />
  </>
);
export default Prices;
