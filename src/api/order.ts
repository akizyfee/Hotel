import { useAxios } from '@/plugins/axios';

import type {
    addOrderData
} from '@/interface/api/order'

const axios = useAxios('normal');

/** 取得自己的訂單列表 */
export const getOrders = () => axios.get("/api/v1/orders");

/** 新增訂單 */
export const addOrder = (data: addOrderData) => axios.post("/api/v1/orders", data);

/** 取得訂單詳細資料 */
export const getOrderInfo = (orderID: number) => axios.get(`/api/v1/orders/${orderID}`);

/** 取消訂單 */
export const deleteOrderInfo = (orderID: number) => axios.delete(`/api/v1/orders/${orderID}`);