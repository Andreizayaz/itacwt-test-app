import { FC, ReactElement } from "react";
import { ID } from "src/global/helpers/consts";

import "./Table.scss";
import { getClassNameForCell } from "./helpers/functions";

type TablePropsTypes = {
  tableHeadings: string[];
  tableData: any[];
};

export const Table: FC<TablePropsTypes> = ({
  tableHeadings,
  tableData,
}): ReactElement => (
  <table>
    <thead>
      <tr>
        {tableHeadings.map((heading) => (
          <th key={heading}>{heading}</th>
        ))}
      </tr>
    </thead>
    <tbody>
      {tableData.map((item) => (
        <tr key={item?.id}>
          {Object.entries(item).map(
            ([key, value]: [string, any]) =>
              key !== ID && (
                <td key={value} className={getClassNameForCell(key, value)}>
                  {value}
                </td>
              )
          )}
          <td>
            <button>edit</button>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);
