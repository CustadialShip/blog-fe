import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "/";

const getBlogs = (currentPage) => {
    return axios.get(API_URL + "blogs?page=" + currentPage, { headers: authHeader() });
};

export default {
    getBlogs,
};