import axios from "axios";

const SPRING_CONNECTION_BACKEND = process.env.REACT_APP_API_URL;

const NODE_EXPRESS_BACKEND = process.env.REACT_APP_AUTH_URL;


export const apiClient = axios.create({
    baseURL: `${SPRING_CONNECTION_BACKEND}`,  // Dynamic base URL from environment variable

    headers: {
        "ngrok-skip-browser-warning": "true"  // Custom header to skip ngrok warning
    }
});
export const apiClient2 = axios.create({
    baseURL: `${NODE_EXPRESS_BACKEND}`,  // Dynamic base URL from environment variable

    headers: {
        "ngrok-skip-browser-warning": "true"  // Custom header to skip ngrok warning
    }
});

