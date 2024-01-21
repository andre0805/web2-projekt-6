import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import CustomHeader from './components/CustomHeader.vue'
import MovieItem from '@/components/MovieItem.vue'
import GenreCarousel from '@/components/GenreCarousel.vue'
import GenreItem from '@/components/GenreItem.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("custom-header", CustomHeader);
app.component("movie-item", MovieItem);
app.component("genre-carousel", GenreCarousel);
app.component("genre-item", GenreItem)
app.mount('#app')
