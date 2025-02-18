import axios from "axios";

export const axiosInstance = axios.create({
    baseURL: import.meta.env.VITE_BASE_URL_QURAN,
    headers: {
        "Content-Type": "application/json"
    }
}) 