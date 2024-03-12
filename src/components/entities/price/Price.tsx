import { FC, ReactElement } from "react";
import { Table } from "src/components/shared";
import { useServerData } from "src/global/hooks";
import { PRICES_URL } from "src/router/consts";

export const Price: FC = (): ReactElement => {
  const { displayData, tableHeadings } = useServerData(PRICES_URL);

  return <Table tableData={displayData} tableHeadings={tableHeadings} />;
};
