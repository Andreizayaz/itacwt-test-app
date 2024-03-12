import { useEffect, useState } from "react";
import { getServerData } from "src/api";
import { getHeadingsForTable, makeUserFriendlyData } from "../helpers/functions";
import { ID } from "../helpers/consts";

export const useServerData = (url: string) => {
  const [serverData, setServerData] = useState<any[]>([]);
  const [displayData, setDisplayData] = useState<any[]>([]);
  const [tableHeadings, setTableHeadings]=useState<any[]>([])

  useEffect(() => {
    Promise.resolve(getServerData(url)).then((data) => setServerData(data));
  }, [url]);

   useEffect(() => {   
    const userFriendlyData = serverData.map(makeUserFriendlyData);
    setDisplayData(userFriendlyData)
    if (serverData.length) {
      const headings = Object.keys(serverData[0]).filter(key=>key!==ID).map(getHeadingsForTable);
      setTableHeadings(headings)
    }
    }, [serverData]);

  return { displayData, tableHeadings };
};
