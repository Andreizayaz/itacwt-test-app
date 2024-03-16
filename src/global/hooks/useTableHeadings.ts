import { useEffect, useState } from "react";
import { getHeadingsForTable } from "../helpers/functions";
import { ID } from "../helpers/consts";

export const useTableHeadings = (data: any[]) => {
  const [tableHeadings, setTableHeadings] = useState<any[]>([]);
  useEffect(() => {
    if (data.length) {
      const maxKeysArray = data
        .map((item) => Object.keys(item))
        .find((item) => Math.max(Object.keys(item).length));
      if (maxKeysArray?.length) {
        const headings = maxKeysArray
          .filter((key) => key !== ID)
          .map(getHeadingsForTable);
        setTableHeadings(headings);
      }
    }
  }, [data]);

  return { tableHeadings };
};
