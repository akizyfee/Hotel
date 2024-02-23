import { useAxios } from '@/plugins/axios';

const axios = useAxios('normal');

/** 取得最新消息 */
export const getNews = () => axios.get("/api/v1/home/news");

/** 取得單筆最新消息 */
export const getOneNews = (newsID: number) => axios.get(`/api/v1/home/news/${newsID}`);