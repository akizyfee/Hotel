import { useAxios } from '@/plugins/axios';

import type {
    verifyEmailData,
    verifyEmailGenerateCodeData,
} from '@/interface/api/verify'

const axios = useAxios('normal');

/** 驗證信箱 */
export const verifyEmail = (data: verifyEmailData) => axios.post("/api/v1/verify/email", data);

/** 產生信箱驗證碼 */
export const verifyEmailGenerateCode = (data: verifyEmailGenerateCodeData) => axios.post("/api/v1/verify/generateEmailCode", data);