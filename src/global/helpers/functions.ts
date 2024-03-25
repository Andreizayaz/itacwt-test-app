import {
  ACTIVE,
  DATE_LOCALES,
  INACTIVE,
  STATUS,
  STATUS_HEADING,
  actions,
  modifyedHeadings,
  stringFields,
} from "./consts";

const addZero = (char: string) => (parseInt(char) < 10 ? `0${char}` : char);

const modifyDate = (dateString: string) => {
  if (!dateString.length) {
    return "";
  }
  const fullDate = new Date(dateString);
  const date = fullDate
    .toLocaleDateString(DATE_LOCALES)
    .split("/")
    .map(addZero)
    .join("/");
  const time = fullDate.toLocaleTimeString();

  return `${date}, ${time}`;
};

const modifyStatus = (status: boolean) => (status ? ACTIVE : INACTIVE);

const getObjFromNestedFields = (key: string, value: Object) => {
  const obj: {
    [key: string]: any;
  } = {};
  const getNestedFields = ([key, value]: [string, any]): any => {
    if (value?.constructor !== Object) {
      obj[key as string] = value;
      return { [key]: value };
    }

    return Object.entries(value).map(getNestedFields);
  };
  getNestedFields([key, value]);
  return obj;
};

export const makeUserFriendlyData = (obj: any) => {
  const tempObj = structuredClone(obj);
  for (const key in tempObj) {
    if (Object.prototype.hasOwnProperty.call(tempObj, key)) {
      if (key === STATUS) {
        tempObj[key] = modifyStatus(tempObj[key]);
      }
      if (actions.includes(key)) {
        tempObj[key] = modifyDate(tempObj[key]);
      }
      if (tempObj[key]?.constructor === Object) {
        const objFromNestedFields = getObjFromNestedFields(key, tempObj[key]);
        Object.assign(tempObj, objFromNestedFields);
        delete tempObj[key];
      }
    }
  }

  return tempObj;
};

export const getHeadingsForTable = (key: string) => {
  if (key === STATUS) {
    return STATUS_HEADING;
  }

  if (actions.includes(key)) {
    const heading = actions.find((act) => act === key);
    return modifyedHeadings.find((tabHeading) => heading?.includes(tabHeading));
  }

  return key;
};

export const fillEmptySells = (data: any[]) => {
  const keys = data
    .map((item: any) => Object.keys(item))
    .find((keysList: string[]) => Math.max(keysList.length));
  const modData = data.map((dataItem) => {
    const emptyKey = keys?.filter(
      (keys) => !Object.keys(dataItem).includes(keys)
    );
    emptyKey?.forEach((emptyItem) => (dataItem[emptyItem] = ""));
    return dataItem;
  });
  return modData;
};

export const getClassNameForCell = (key: string, value: any) => {
  if (stringFields.includes(key)) {
    return "colorized capitalize";
  }
  if (typeof value === "string") {
    return "capitalize";
  }

  return "";
};
