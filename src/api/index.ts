import axios from "../http";

export const getServerData = async (url: string) => {
  const serverData = (await axios.get(url)).data;
  return serverData;
};
