import { FC, ReactElement } from "react";
import { Product } from "src/components/entities";
import { PAGES_HEADING } from "./helpers/consts";
import { CustomHelmet, PageHeading } from "src/components/shared";

const Products: FC = (): ReactElement => (
  <>
    <CustomHelmet title={PAGES_HEADING} />
    <PageHeading heading={PAGES_HEADING} />
    <Product />
  </>
);
export default Products;
