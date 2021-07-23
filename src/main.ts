import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

console.log(import.meta.env)

router.isReady().then(() => app.mount('#app'))