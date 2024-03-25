import { FC, ReactElement, ReactNode } from "react";

import "./Table.scss";

type TablePropsTypes = {
  tableHeadings: string[];
  children: ReactNode;
  openEdit: (e: any) => void;
};

export const Table: FC<TablePropsTypes> = ({
  tableHeadings,
  children,
  openEdit,
}): ReactElement => (
  <div className="table-wrapper">
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
        {children}
      </tbody>
    </table>
  </div>
);
