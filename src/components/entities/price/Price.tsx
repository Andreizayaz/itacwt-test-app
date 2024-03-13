import { FC, ReactElement } from "react";
import { Table } from "src/components/shared";
import { useEditForm, useServerData, useTableHeadings } from "src/global/hooks";
import { PRICES_URL } from "src/router/consts";
import { FORM_LABEL } from "./helpers/consts";

export const Price: FC = (): ReactElement => {
  const { displayData } = useServerData(PRICES_URL);
  const { tableHeadings } = useTableHeadings();

  const { dataForEdit, openEditForm } = useEditForm(PRICES_URL);

  return (
    <Table
      tableData={displayData}
      tableHeadings={tableHeadings}
      openEdit={openEditForm}
    />
  );
};
