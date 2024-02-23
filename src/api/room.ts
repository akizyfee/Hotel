import { useAxios } from '@/plugins/axios';

const axios = useAxios('normal');

/** 取得房型列表 */
export const getRooms = () => axios.get("/api/v1/rooms");

/** 取得單筆房型 */
export const getOneRooms = (roomsID: number) => axios.get(`/api/v1/rooms/${roomsID}`);