import axios from "axios";

const API_URL = "http://192.168.102.34:8000";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return axios.get(API_URL + "user", {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
};

const getModeratorBoard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return axios.get(API_URL + "mod", {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
};

const getAdminBoard = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  return axios.get(API_URL + "admin", {
    headers: {
      Authorization: `Bearer ${user.accessToken}`,
    },
  });
};

const UserService = {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
};

export default UserService;