import axios, { AxiosInstance } from "axios";

// 기본 API 인스턴스 (withCredentials 없이)
export const api: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_DEV_SERVER_PATH,
})

// withCredentials가 필요한 API 인스턴스
export const authApi: AxiosInstance = axios.create({
    baseURL: import.meta.env.VITE_DEV_SERVER_PATH,
    withCredentials: true,
});

