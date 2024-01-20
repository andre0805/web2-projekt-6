import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import CustomHeader from './components/CustomHeader.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("custom-header", CustomHeader);

app.mount('#app')
