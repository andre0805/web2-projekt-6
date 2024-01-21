<script>
export default {
  props: ["movies", "selectedGenreId"],
  data() {
    return {
      selectedMovie: null,
    };
  },
  methods: {
    setSelectedMovie(movie) {
      this.selectedMovie = movie;
      console.log("Selected movie:", this.selectedMovie);
    },
  },
};
</script>

<template>
  <div class="movie-list" :key="selectedGenreId">
    <movie-list-item
      v-for="movie in movies"
      :key="movie.id"
      :movie="movie"
      @click="setSelectedMovie(movie)"
    />
  </div>

  <popup v-if="selectedMovie" :movie="selectedMovie" @close="() => setSelectedMovie(null)">
    <movie-details :movie="selectedMovie" />
  </popup>
</template>

<style scoped>
.movie-list {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px 50px;
  gap: 20px;
  background: #e01111;
  animation: 0.4s ease-in-out 0s 1 slideInFromTop;
}

@keyframes slideInFromTop {
  0% {
    transform: scaleY(0);
    transform-origin: top;
  }
  100% {
    transform: scaleY(1);
    transform-origin: top;
  }
}

</style>