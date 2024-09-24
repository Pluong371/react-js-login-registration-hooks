import axios from "axios";



const register = (username, email, password) => {
  return axios.post(API_URL, {
    username,
    email,
    password,
  });
};

const login = (username, password) => {
  return axios
    .post(UI_V1_AUTH_LOGIN, {
      username,
      password,
    })
    .then((response) => {
      if (response.data.username) {
        localStorage.setItem("user", JSON.stringify(response.data));
      }

      return response.data;
    });
};

const logout = () => {
  localStorage.removeItem("user");
  return axios.post(API_URL + "signout").then((response) => {
    return response.data;
  });
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem("user"));
};

const AuthService = {
  register,
  login,
  logout,
  getCurrentUser,
}

export default AuthService;
