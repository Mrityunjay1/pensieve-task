import axios from "axios";

const API_URL = "http://52.74.166.134:3000/api/signup/";

const register = async (userData) => {
  const response = await axios.post(API_URL, userData);

  if (response.data) {
    console.log(response.data)
    localStorage.setItem("user", JSON.stringify(response.data));
  }

  return response.data;
};

const logout = () => {
  localStorage.removeItem("user");
};

const authService = {
  register,
  logout,
};

export default authService;
