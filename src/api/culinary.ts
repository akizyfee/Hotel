import { useAxios } from '@/plugins/axios';

const axios = useAxios('normal');

/** 取得美味佳餚 */
export const getCulinary = () => axios.get("/api/v1/home/culinary");

/** 取得單筆美味佳餚 */
export const getOneCulinary = (culinaryID: number) => axios.get(`/api/v1/home/culinary/${culinaryID}`);