import axios from "axios";

export default axios.create({
    baseURL: "https://mail-api-port.fly.dev",
    timeout: 10000,
    headers: { "Content-Type": "application/json" },
});