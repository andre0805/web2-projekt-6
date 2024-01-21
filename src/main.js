import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import CustomHeader from './components/CustomHeader.vue'
import MoviesList from '@/components/MoviesList.vue'
import MovieListItem from '@/components/MovieListItem.vue'
import GenreCarousel from '@/components/GenreCarousel.vue'
import GenreCarouselItem from '@/components/GenreCarouselItem.vue'
import Popup from '@/components/Popup.vue'
import MovieDetails from '@/components/MovieDetails.vue'
import Rating from '@/components/Rating.vue'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.component("custom-header", CustomHeader);
app.component("movies-list", MoviesList);
app.component("movie-list-item", MovieListItem);
app.component("genre-carousel", GenreCarousel);
app.component("genre-carousel-item", GenreCarouselItem)
app.component("popup", Popup)
app.component("movie-details", MovieDetails)
app.component("rating", Rating)
app.mount('#app')
