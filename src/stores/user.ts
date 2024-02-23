import { defineStore } from 'pinia'

// types
import type { UserInfo } from '@/interface/stores/user'

export const useUserStore = defineStore('user', () => {
  const userInfo = ref<UserInfo>({
    name: ''
  })

  return { 
    userInfo,
  }
})
