import axios from "axios";

const $host = axios.create({
    baseURL: '/api',
    withCredentials: true
})

export {$host}