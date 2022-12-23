import { Axios } from "./request";

export function travelSearch(travelKind, origin, destination, travelDate) {
    return Axios.post(
      "travelRespond/",
      {
        travelKind,
        origin,
        destination,
        travelDate,
      }
    ).then(({ data }) => data);
  }