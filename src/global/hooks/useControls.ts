import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setSearchResult } from "src/store";
import { selectServerData } from "src/store/selectors";
import { ACTIVE, INACTIVE } from "../helpers/consts";
import { ALL } from "src/components/entities/page/helpers/consts";

export const useControls = (searchKeys: string[], keyForSort: string) => {
  const serverData = useSelector(selectServerData);
  const [searchFilterParams, setSearchFilterParams] = useState({
    search: "",
    filter: ALL,
    sort: "",
  });
  const dispatch = useDispatch();

  const searchByKeys = (obj: any, searchKeys: string[], value: string) => {
    for (let i = 0; i < searchKeys.length; i++) {
      if (obj.hasOwnProperty(searchKeys[i])) {
        return obj[searchKeys[i] as keyof typeof obj]
          ?.toLowerCase()
          .includes(value.toLowerCase());
      }
    }
  };

  const handleSearchInput = (
    e: FormEvent<HTMLInputElement>
  ) => {
    setSearchFilterParams({
      ...searchFilterParams,
      search: (e.target as HTMLInputElement).value,
    });
  };

  const handleSelectStatus = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchFilterParams({ ...searchFilterParams, filter: e.target.value });
  };

  useEffect(() => {
    const temp = serverData
      .filter((item) =>
        searchByKeys(item, searchKeys, searchFilterParams.search)
      )
      .filter((item) => {
        switch (searchFilterParams.filter) {
          case ACTIVE:
            return item?.active;
          case INACTIVE:
            return !item?.active;
          default:
            return true;
        }
      })
      .sort((a:any, b:any) => {
        if (searchFilterParams.sort === "by asc") {
          return a[keyForSort]?.localeCompare(b[keyForSort]);
        } 
          return b[keyForSort]?.localeCompare(a[keyForSort]);
      });
    dispatch(setSearchResult(temp));
  }, [searchFilterParams]);

  const handleSort = (e: ChangeEvent<HTMLSelectElement>) => {
    setSearchFilterParams({ ...searchFilterParams, sort: e.target.value });
  };

  return { handleSearchInput, handleSelectStatus, handleSort };
};
