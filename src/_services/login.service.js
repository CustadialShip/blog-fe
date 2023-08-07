import jwt from "jwt-decode";
import Cookies from "universal-cookie";

const cookies = new Cookies();

export function login(jwt_token) {
    const decode = jwt(jwt_token);
    cookies.set("jwt_authorization", jwt_token, {
        expires: new Date(decode.exp * 1000)
    });
}

export function logout() {
    cookies.remove('jwt_authorization');
}