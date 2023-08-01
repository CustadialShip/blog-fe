import axios from "axios";

const API_URL = "/api/v1/auth/";

const register = (firstname, secondname, username, password) => {
    return axios.post(API_URL + "register", {
        firstname,
        secondname,
        username,
        password,
    });
};

const login = (username, password) => {
    return axios
        .post(API_URL + "authenticate", {
            username,
            password,
        })
        .then((response) => {
            if (response.data.token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }
            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    register,
    login,
    logout,
};