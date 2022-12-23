import { Axios } from "./request";

export function getPassenger(
  firstName,
  lastName,
  nationalCode,
  gender,
  birthDate
) {
  return Axios.put("passengerConfirmation_api/", {
    firstName,
    lastName,
    nationalCode,
    gender,
    birthDate,
  }).then(({ data }) => data);
}

export function reservation(passenger, travel) {
  return Axios.post("ticketRegistration_api/", {
    passenger,
    travel,
  }).then(({ data }) => data);
}
