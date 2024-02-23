
export const useCatchError = (asFn: Function) => {
    return (...params: any[]) => {
        return asFn(...params).catch((err: Error) => {
        console.log('發生未預期的錯誤 catch 起來的訊息', err)
        })
    }
}