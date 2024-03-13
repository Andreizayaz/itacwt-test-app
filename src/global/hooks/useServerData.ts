import { useEffect, useState } from "react";
import { getServerData } from "src/api";
import { makeUserFriendlyData } from "../helpers/functions";
import { useDispatch, useSelector } from "react-redux";
import { selectServerData, setServerData } from "src/store";

export const useServerData = (url: string) => {
  const [displayData, setDisplayData] = useState<any[]>([]);

  const dispatch = useDispatch();
  const serverData = useSelector(selectServerData);

  useEffect(() => {
    Promise.resolve(getServerData(url)).then((data) =>
      dispatch(setServerData(data))
    );
  }, [dispatch, url]);

  useEffect(() => {
    const userFriendlyData = serverData.map(makeUserFriendlyData);
    setDisplayData(userFriendlyData);
  }, [serverData]);

  return { displayData };
};
