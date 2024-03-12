import { FC, ReactElement } from "react";
import { useServerData } from "src/global/hooks";
import { PAGES_URL } from "src/router/consts";

export const Page: FC = (): ReactElement => {
  const { displayData, tableHeadings } = useServerData(PAGES_URL);

  console.log(displayData);
  console.log(tableHeadings)
  return <></>;
};
