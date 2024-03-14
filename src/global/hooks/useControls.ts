import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectServerData, setSearchResult } from "src/store";

export const useControls = () => {
  const serverData = useSelector(selectServerData);
  const dispatch = useDispatch();

  const searchByKeys = (obj: any, searchKeys: string[], value: string) => {
    for (let i = 0; i < searchKeys.length; i++) {
      if (obj.hasOwnProperty(searchKeys[i])) {
        return obj[searchKeys[i] as keyof typeof obj].includes(value);
      }
    }
  };

  const handleSearchInput = (
    e: FormEvent<HTMLInputElement>,
    searchKeys: string[]
  ) => {
    const temp = serverData.filter((item) =>
      searchByKeys(item, searchKeys, (e.target as HTMLInputElement).value)
    );
    dispatch(setSearchResult(temp));
  };

  return { handleSearchInput };
};
