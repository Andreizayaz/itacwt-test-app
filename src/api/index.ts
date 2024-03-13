import axios from "../http";

export const getServerData = async (url: string) => {
  const serverData = (await axios.get(url)).data;
  return serverData;
};

export const editServerData = async (url: string, payload: any) => {
  const modifiedData = await axios.patch(url, payload);
  return modifiedData;
};
