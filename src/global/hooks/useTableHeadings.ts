import { useEffect, useState } from "react";
import { getHeadingsForTable } from "../helpers/functions";
import { useSelector } from "react-redux";
import { selectSearchFilterData } from "src/store";
import { ID } from "../helpers/consts";

export const useTableHeadings = () => {
  const [tableHeadings, setTableHeadings] = useState<any[]>([]);
  const serverData = useSelector(selectSearchFilterData);

  useEffect(() => {
    if (serverData.length) {
      const headings = Object.keys(serverData[0])
        .filter((key) => key !== ID)
        .map(getHeadingsForTable);
      setTableHeadings(headings);
    }
  }, [serverData]);

  return { tableHeadings };
};
