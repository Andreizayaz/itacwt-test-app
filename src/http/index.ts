import axios from "axios";
import { BASE_URL } from "./helpers/const";

const $api = axios.create({
  baseURL: BASE_URL,
});

export default $api;
