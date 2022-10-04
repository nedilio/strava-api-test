import axios from "axios";
const BASEURL = "https://www.strava.com/api/v3";
const athleteId = "1326693";
import.meta.env;
const { VITE_ACCESS_TOKEN, VITE_CLIENT_ID, VITE_CLIENT_SECRET } = import.meta
  .env;

export const getUser = (code) => {
  return axios
    .post(
      `${BASEURL}/oauth/token?client_id=${VITE_CLIENT_ID}&client_secret=${VITE_CLIENT_SECRET}&code=${code}&grant_type=authorization_code`
    )
    .then((response) => response)
    .catch((err) => err.response);
};

export const getStats = (id, token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios
    .get(`${BASEURL}/athletes/${id}/stats`, config)
    .then((res) => res)
    .catch((err) => err.response);
};

export const getAthlete = (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios
    .get(`${BASEURL}/athlete`, config)
    .then((response) => response)
    .catch((err) => err.response);
};
