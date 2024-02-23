/** 註冊 */
export interface SignUpData {
    name: string;
    email: string;
    password: string;
    phone: string;
    birthday: string;
    address: {
        zipcode: number;
        detail: string;
    };
}

/** 登入 */
export interface LoginData {
    email: string
    password: string
}

/** 忘記密碼 */
export interface forgotData {
    email: string;
    code: string;
    newPassword: string;
}

/** 更新使用者資訊 */
export interface fixUserInfoData {
    userId: string;
    name: string;
    phone: string;
    birthday: string;
    address: {
        zipcode: number;
        detail: string;
    };
    oldPassword: string;
    newPassword: string;
}