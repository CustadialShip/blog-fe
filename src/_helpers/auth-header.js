import Cookies from "universal-cookie";

const cookies = new Cookies();

export function authHeader() {
    let token = cookies.get("jwt_authorization");

    if (token) {
        return { 'Authorization': 'Bearer ' + token};
    } else {
        return {};
    }
}