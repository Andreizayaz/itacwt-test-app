import { FC, ReactElement } from "react";
import { ID } from "src/global/helpers/consts";

import "./Table.scss";
import { getClassNameForCell } from "./helpers/functions";
import { EDIT_BTN, NO_RESULTS } from "./helpers/consts";
import { Button } from "../button";

type TablePropsTypes = {
  tableHeadings: string[];
  tableData: any[];
  openEdit: (e: any) => void;
};

export const Table: FC<TablePropsTypes> = ({
  tableHeadings,
  tableData,
  openEdit,
}): ReactElement => (
  <>
    <table>
      <thead>
        <tr>
          {tableHeadings.map((heading) => (
            <th key={heading}>{heading}</th>
          ))}
        </tr>
      </thead>
      <tbody
        onClick={(e) => {
          openEdit(e);
        }}
      >
        {tableData.length ? (
          tableData.map((item) => (
            <tr key={item?.id} id={item?.id}>
              {Object.entries(item).map(
                ([key, value]: [string, any]) =>
                  key !== ID && (
                    <td key={value} className={getClassNameForCell(key, value)}>
                      {value}
                    </td>
                  )
              )}
              <td>
                <Button classes="edit-btn">{EDIT_BTN}</Button>
              </td>
            </tr>
          ))
        ) : (
          <p className="no-result">{NO_RESULTS}</p>
        )}
      </tbody>
    </table>
  </>
);
