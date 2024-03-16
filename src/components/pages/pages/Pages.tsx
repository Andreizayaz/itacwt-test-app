import { FC, ReactElement } from "react";
import { Page } from "src/components/entities";
import { CustomHelmet, PageHeading } from "src/components/shared";
import { PAGES_HEADING } from "./helpers/consts";

const Pages: FC = (): ReactElement => (
  <>
    <CustomHelmet title={PAGES_HEADING} />
    <PageHeading heading={PAGES_HEADING} />
    <Page />
  </>
);
export default Pages;
