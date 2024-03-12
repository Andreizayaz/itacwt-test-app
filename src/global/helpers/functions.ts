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
  const fullDate = new Date("1985-08-09T02:10:18.0Z");
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
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      if (key === STATUS) {
        obj[key] = modifyStatus(obj[key]);
      }
      if (actions.includes(key)) {
        obj[key] = modifyDate(obj[key]);
      }
    }
  }

  return obj;
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
