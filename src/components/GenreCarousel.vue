<script>

export default {
  props: ["genres"],
};
</script>

<template>
  <div class="carousel">
    <genre-item
      v-for="genre of genres"
      :key="genre.id"
      :genre="genre"
      class="carousel-item"
    />
  </div>
</template>

<style scoped>
.carousel {
  margin: 0 16px;
  padding: 16px 8px;
  display: grid;
  grid-template-columns: repeat(19, auto);
  grid-column-gap: 16px;
  overflow: scroll;
  align-items: center;
  scroll-snap-type: both mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  scrollbar-width: none;
}

::-webkit-scrollbar {
  display: none;
}

.carousel-item {
  height: fit-content;
  width: fit-content;
  padding: 8px 32px;
}

</style>
