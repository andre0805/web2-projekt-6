<script>
export default {
  data() {
    return {
      movie: {
        id: 1,
        title: "Justice League: Crisis on Infinite Earths Part One",
        rating: 8.5,
        image: "https://image.tmdb.org/t/p/w500/zR6C66EDklgTPLHRSmmMt5878MR.jpg",
        description: "Death is coming. Worse than death: oblivion. Not just for our Earth, but for everyone, everywhere, in every universe! Against this ultimate destruction, the mysterious Monitor has gathered the greatest team of Super Heroes ever assembled. But what can the combined might of Superman, Wonder Woman, Batman, The Flash, Green Lantern and hundreds of Super Heroes from multiple Earths even do to save all of reality from an unstoppable antimatter armageddon?! Death is coming. Worse than death: oblivion. Not just for our Earth, but for everyone, everywhere, in every universe! Against this ultimate destruction, the mysterious Monitor has gathered the greatest team of Super Heroes ever assembled. But what can the combined might of Superman, Wonder Woman, Batman, The Flash, Green Lantern and hundreds of Super Heroes from multiple Earths even do to save all of reality from an unstoppable antimatter armageddon?!Death is coming. Worse than death: oblivion. Not just for our Earth, but for everyone, everywhere, in every universe! Against this ultimate destruction, the mysterious Monitor has gathered the greatest team of Super Heroes ever assembled. But what can the combined might of Superman, Wonder Woman, Batman, The Flash, Green Lantern and hundreds of Super Heroes from multiple Earths even do to save all of reality from an unstoppable antimatter armageddon?! Death is coming. Worse than death: oblivion. Not just for our Earth, but for everyone, everywhere, in every universe! Against this ultimate destruction, the mysterious Monitor has gathered the greatest team of Super Heroes ever assembled. But what can the combined might of Superman, Wonder Woman, Batman, The Flash, Green Lantern and hundreds of Super Heroes from multiple Earths even do to save all of reality from an unstoppable antimatter armageddon?!",
      },
    };
  },
};
</script>

<template>
  <router-link :to="'/movies/' + movie.id">
    <div class="movie-item">
      <img :src="movie.image" :alt="movie.title" class="movie-image" />
      <div class="movie-details">
        <p class="movie-title">{{ movie.title }}</p>
        <p class="movie-description">{{ movie.description }}</p>
      </div>
    </div>
  </router-link>
</template>

<style scoped>

.movie-item {
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: start;
  max-width: 800px;
  height: 200px;
  background: #171717;
  border-radius: 8px;
  box-shadow: #171717 2px 2px 8px;
  overflow: hidden;
  transition: transform 0.3s ease-in-out;
}

.movie-item:hover {
  transform: scale(1.02);
}

.movie-image {
  height: 200px;
  object-fit: cover;
}

.movie-details {
  font-size: 14px;
  color: white;
  padding: 32px 24px;
  height: inherit;
}

.movie-title {
  margin: 0;
  padding: 0;
  font-size: 20px;
  font-weight: bold;
  max-height: 50px;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
}

.movie-description {
  //max-height: 150px;
  font-size: 14px;
  //text-align: justify;

  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
}

a {
  text-decoration: none;
  color: #171717;
}

@media (max-width: 800px) {
  .movie-item {
    flex-direction: column;
    width: 100%;
    height: 450px;
  }

  .movie-image {
    width: 100%;
  }

  .movie-title {
    font-size: 16px;
  }

  .movie-description {
    font-size: 12px;

    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 7;
    -webkit-box-orient: vertical;
  }
}

</style>
