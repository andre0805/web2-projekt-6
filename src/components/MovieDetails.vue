<script>
export default {
  props: ["movie"],
  computed: {
    title() {
      return this.movie.title;
    },
    description() {
      return this.movie.description ?? "Unknown";
    },
    genres() {
      const genres = this.movie.genres.map(g => g.name).toSorted().join(', ');
      if (genres.length > 0) {
        return genres;
      } else {
        return "Unknown";
      }
    },
    year() {
      return this.movie.year ?? "Unknown";
    },
    languages() {
      const languages = this.movie.languages.toSorted().join(', ');
      if (languages.length > 0) {
        return languages;
      } else {
        return "Unknown";
      }
    },
    director() {
      return this.movie.director ?? "Unknown";
    },
    actors() {
      const actors = this.movie.actors.join(', ');
      if (actors.length > 0) {
        return actors;
      } else {
        return "Unknown";
      }
    },
    duration() {
      const duration = this.movie.duration;
      if (duration > 0) {
        return `${duration} min`;
      } else {
        return "Unknown";
      }
    },
  },
};
</script>

<template>
  <div class="movie-item">
    <img class="movie-image" :src="movie.posterUrl" :alt="movie.title" />
    <div class="movie-details">
      <p class="movie-title">{{ title }}</p>

      <p class="label">Plot</p>
      <p class="element">{{ description }}</p>

      <p class="label">Genres</p>
      <p class="element">{{ genres }} </p>

      <p class="label">Year</p>
      <p class="element">{{ year }}</p>

      <p class="label">Languages</p>
      <p class="element">{{ languages }}</p>

      <p class="label">Director</p>
      <p class="element">{{ director }}</p>

      <p class="label">Actors</p>
      <p class="element">{{ actors }}</p>

      <p class="label">Duration</p>
      <p class="element">{{ duration }}</p>
    </div>
  </div>
</template>

<style scoped>
.movie-item {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  width: 100%;
  height: 100%;
  background: #171717;
  box-shadow: #171717 0 2px 8px;
}

.movie-image {
  height: 100%;
  object-fit: cover;
}

.movie-details {
  font-size: 14px;
  color: white;
  padding: 32px;
  height: 80%;
  overflow: scroll;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

::-webkit-scrollbar {
  display: none;
}

.movie-title {
  padding: 0;
  font-size: 24px;
  font-weight: bold;
}

.label {
  margin-top: 24px;
  margin-bottom: 0;
  padding: 0;
  font-size: 16px;
  font-weight: bold;
}

.element {
  margin-top: 8px;
  margin-bottom: 0;
  font-size: 14px;
  text-align: justify;
}

@media (max-width: 800px) {
  .movie-item {
    flex-direction: column;
    width: 100%;
    height: fit-content;
  }

  .movie-image {
    width: 100%;
  }

  .movie-title {
    font-size: 16px;
  }

  .element {
    font-size: 12px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
  }
}
</style>
