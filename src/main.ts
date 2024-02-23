import './assets/main.css'

// vue 套餐
import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from '@/App.vue'
import router from './router'

// CSS 框架
import { initFlowbite } from 'flowbite'

// 月曆
import VCalendar from 'v-calendar';
import 'v-calendar/style.css';


const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(initFlowbite)
app.use(VCalendar, {})

app.mount('#app')
