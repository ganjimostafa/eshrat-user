import { Axios } from "./request";

export function getSupporter() {
    return Axios.get('supporter_api/').then(({ data }) => data);
  }