import axios from 'axios';
import type { AxiosInstance } from 'axios'
import { getCookieToken } from '@/plugins/vueuse';

declare module 'axios' {
    export interface AxiosInstance {
        request<T = any> (config: AxiosRequestConfig): Promise<T>;
        get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
        delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
        head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
        post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
        put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
        patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    }
}

export function axiosInterceptors($axios: AxiosInstance) {
    $axios.interceptors.request.use(
        (config) => {
            const token = getCookieToken('loginToken');

            if (token) {
                config.headers.Authorization = token;
            }

            return config;
        },
        (error) => {
            console.log("requestError :>> ", error);
            return Promise.reject(error);
        }
    );

    $axios.interceptors.response.use(
        (res) => {
            return res.data;
        },
        (error) => {
            if (error.message === 'Network Error') {
                console.log('網路異常');
                return;
            }
            if (error.code >= 500) {
                console.log('發生意外的錯誤');
                return;
            }
            if (error.code < 500) {
                console.log('操作異常錯誤，詳細有需要再定義，400 錯');
                return;
            }
            return Promise.reject(error.response.data);
        }
    );
}

export const useAxios = (headersType: string) => {
    const typeName = headersType ? headersType : 'normal';
    let axiosType: AxiosInstance;

    switch (typeName) {
        case 'normal':
            axiosType = axios.create({
                baseURL: import.meta.env.VITE_URL,
                headers: { 'Content-Type': 'application/json' },
            });
            break;
        case 'file':
            axiosType = axios.create({
                baseURL: import.meta.env.VITE_URL,
                headers: { 'Content-Type': 'multipart/form-data' },
            });
            break;
        default:
            throw new Error('Invalid headersType');
    }
    
    axiosInterceptors(axiosType!);

    return axiosType;
};
