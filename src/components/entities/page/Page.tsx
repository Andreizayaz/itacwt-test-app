import { FC, ReactElement } from "react";
import { Table } from "src/components/shared";
import { useServerData, useTableHeadings } from "src/global/hooks";
import { PAGES_URL } from "src/router/consts";

export const Page: FC = (): ReactElement => {
  const { displayData } = useServerData(PAGES_URL);
  const { tableHeadings } = useTableHeadings();
  return <Table tableData={displayData} tableHeadings={tableHeadings} />;
};
