import { stringFields } from "src/global/helpers/consts";

export const getClassNameForCell = (key: string, value: any) => {
  if (stringFields.includes(key)) {
    return "colorized capitalize";
  }
  if (typeof value === "string") {
    return "capitalize";
  }

  return "";
};
