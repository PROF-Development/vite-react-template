import axios from "axios";

const $host = axios.create({
    baseURL: '/api',
    headers: { 'Access-Control-Allow-Origin': '*' },
    withCredentials: true
})

export {$host}