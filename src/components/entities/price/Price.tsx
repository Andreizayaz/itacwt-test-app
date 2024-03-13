import { FC, ReactElement } from "react";
import { Table } from "src/components/shared";
import { useServerData, useTableHeadings } from "src/global/hooks";
import { PRICES_URL } from "src/router/consts";

export const Price: FC = (): ReactElement => {
  const { displayData } = useServerData(PRICES_URL);
  const { tableHeadings } = useTableHeadings();

  return <Table tableData={displayData} tableHeadings={tableHeadings} />;
};
