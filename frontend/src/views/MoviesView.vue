<script>

import Popup from '../components/Popup.vue'
import MovieDetails from '../components/MovieDetails.vue'
import MoviesList from '../components/MoviesList.vue'
import { mapActions, mapState } from 'pinia'
import { useMoviesStore } from '../stores/movies.js'
import Loading from '../components/Loading.vue'

export default {
  components: { Loading, MoviesList, MovieDetails, Popup },
  computed: {
    ...mapState(useMoviesStore, ["isLoading", "moviesForSelectedGenre", "genres", "selectedGenreId"]),
  },
  methods: {
    ...mapActions(useMoviesStore, ["selectGenre"]),
  },
};
</script>

<template>
  <div v-if="this.isLoading" class="loading">
    <loading />
  </div>
  <div v-else>
    <genre-carousel :genres=genres :selectedGenreId="selectedGenreId" @selectGenre="selectGenre" />
    <movies-list :movies="moviesForSelectedGenre" :selectedGenreId="selectedGenreId" />
  </div>
</template>

<style scoped>
.loading {
  height: 80%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
