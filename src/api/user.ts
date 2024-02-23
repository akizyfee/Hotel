import { useAxios } from '@/plugins/axios';
import type {
    SignUpData,
    LoginData,
    forgotData,
    fixUserInfoData,
} from '@/interface/api/user'

const axios = useAxios('normal');

/** 註冊 */
export const signUp = (data: SignUpData) => axios.post("/api/v1/user/signup", data);

/** 登入 */
export const login = (data: LoginData) => axios.post("/api/v1/user/login", data);

/** 忘記密碼 */
export const forgot = (data: forgotData) => axios.post("/api/v1/user/forgot", data);

/** 檢查是否登入 */
export const checkLogin = () => axios.get("/api/v1/user/check");

/** 取得使用者資訊 */
export const getUserInfo = () => axios.get("/api/v1/user/");

/** 更新使用者資訊 */
export const fixUserInfo = (data: fixUserInfoData) => axios.put("/api/v1/user/", data);
