
import "normalize.css/normalize.css"
import { createApp } from 'vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import '@/styles/utils.scss'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router).use(ElementPlus)

console.log(import.meta.env)

router.isReady().then(() => app.mount('#app'))