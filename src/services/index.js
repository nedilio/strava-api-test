import axios from "axios";
const BASEURL = "https://www.strava.com/api/v3";
const athleteId = "1326693";
const envVars = import.meta.env;
const { VITE_CLIENT_ID, VITE_CLIENT_SECRET } = envVars;

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

export const getActivities = (activities, token) => {
  return axios
    .get(
      `${BASEURL}/athlete/activities?access_token=${token}&per_page=${activities}`
    )
    .then((res) => res.data)
    .catch((err) => err.response);
};

export const getActivity = (id, token) => {
  return axios
    .get(`${BASEURL}/activities/${id}?access_token=${token}`)
    .then((res) => res.data)
    .catch((err) => err.response);
};
