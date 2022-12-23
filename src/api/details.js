import { Axios } from "./request";

export function getDetails(id) {
    return Axios.get(`travelRespond/${id}`).then(({ data }) => data);
  }