import { FormEvent } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResult } from "src/store";
import { selectServerData } from "src/store/selectors";

export const useControls = () => {
  const serverData = useSelector(selectServerData);
  const dispatch = useDispatch();

  const searchByKeys = (obj: any, searchKeys: string[], value: string) => {
    for (let i = 0; i < searchKeys.length; i++) {
      if (obj.hasOwnProperty(searchKeys[i])) {
        return obj[searchKeys[i] as keyof typeof obj]?.toLowerCase().includes(value.toLowerCase());
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
