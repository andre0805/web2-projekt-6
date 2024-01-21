<script>
export default {
  emits: ["selectMovie"],
  props: ["movies", "selectedGenreId"],
  methods: {
    selectMovie(movie) {
      this.$emit("selectMovie", movie);
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
      @click="selectMovie(movie)"
    />
  </div>
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