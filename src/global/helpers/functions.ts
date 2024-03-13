import {
  ACTIVE,
  DATE_LOCALES,
  INACTIVE,
  STATUS,
  STATUS_HEADING,
  actions,
  modifyedHeadings,
} from "./consts";

const addZero = (char: string) => (parseInt(char) < 10 ? `0${char}` : char);

const modifyDate = (dateString: string) => {
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

export const makeUserFriendlyData = (obj: any) => {
  const tempObj = structuredClone(obj)
  for (const key in tempObj) {
    if (Object.prototype.hasOwnProperty.call(tempObj, key)) {
      if (key === STATUS) {
        tempObj[key] = modifyStatus(tempObj[key]);
      }
      if (actions.includes(key)) {
        tempObj[key] = modifyDate(tempObj[key]);
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
