import { useCookies } from '@vueuse/integrations/useCookies'

const cookieToken = useCookies()

/**
 * 清除 cookie
 */
export const clearCookieToken = (cookieName: string) => {
  cookieToken.remove(cookieName)
}

/**
 * 取得 cookie
 */
export const getCookieToken = (cookieName: string) => {
  return cookieToken.get(cookieName)
}

/**
 * 設置 cookie
 */
export const setCookieToken = (cookieName: string, payload: string) => {
  cookieToken.set(cookieName, payload)
}