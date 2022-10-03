import axios from "axios";
const token = "fddbbaed479bdc47f6cf51462fb641215a9fcec4";
const BASEURL = "https://www.strava.com/api/v3";
const athleteId = "1326693";
const { VITE_CLIENT_ID, VITE_CLIENT_SECRET } = import.meta.env;

export const getStats = (id) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios
    .get(`${BASEURL}/athletes/${id}/stats`, config)
    .then((res) => res)
    .catch((err) => err.response);
};

export const getUser = (code) => {
  return axios
    .post(
      `${BASEURL}/oauth/token?client_id=${VITE_CLIENT_ID}&client_secret=${VITE_CLIENT_SECRET}&code=${code}&grant_type=authorization_code`
    )
    .then((response) => response)
    .catch((err) => err.response);
};

export const getAthlete = (token) => {
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };
  return axios
    .post(`${BASEURL}/athlete`)
    .then((response) => response)
    .catch((err) => err.response);
};
