<script>
import MoviesList from '../components/MoviesList.vue'
import { mapState } from 'pinia'
import { useMoviesStore } from '../stores/movies.js'

export default {
  components: { MoviesList },
  data() {
    return {
      searchQuery: "",
    }
  },
  computed: {
    ...mapState(useMoviesStore, ["movies"]),
    filteredMovies() {
      if (!this.searchQuery) return this.movies
      return this.movies.filter(movie => movie.title.toLowerCase().includes(this.searchQuery.toLowerCase()))
    }
  },
}
</script>

<template>
  <div class="search-area">
    <input type="search" placeholder="🔍&nbsp;&nbsp;Search movies..." v-model.trim="this.searchQuery">
    <movies-list v-if="this.searchQuery" :movies="filteredMovies"></movies-list>
  </div>

</template>

<style scoped>
.search-area {
  margin-top: 32px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #e01111;
}

input[type = 'search'] {
  margin-bottom: 16px;
  padding: 0 20px;
  width: 80%;
  max-width: 600px;
  height: 50px;
  border: none;
  border-radius: 8px;
  font-size: 20px;
  outline: none;
  transition: all 0.3s ease-in-out;
  box-shadow: #171717 0 0 4px;
  background: #171717;
  color: white;
}

input[type = 'search']::-webkit-search-cancel-button{
  -webkit-appearance: none;
}

input[type = 'search']:focus {
}

@media (max-width: 800px) {
  input[type = 'search'] {
    width: 90%;
    height: 45px;
    padding: 0 16px;
    font-size: 16px;
  }
}

</style>