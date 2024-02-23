/** 新增訂單 */
export interface addOrderData {
    roomId: string;
    checkInDate: string;
    checkOutDate: string;
    peopleNum: number;
    userInfo: {
        address: {
            zipcode: number;
            detail: string;
        }
        name: string;
        phone: string;
        email: string;
    }
}