import { createApp } from 'vue'
import App from './App.vue'
import { sanctumPlugin } from 'sanctum-composables'
import router from './router/router'

const app = createApp(App)

app.use(router)
app.use(sanctumPlugin)

app.mount('#app')
