import axios from "axios";
import { URL } from "./constant";

export const Axios = axios.create({
  baseURL: URL,
});
