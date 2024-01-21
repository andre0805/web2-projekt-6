<script>
export default {
  props: ["genre"],
}
</script>

<template>
  <a class="button" href="">{{genre.name}}</a>
</template>

<style scoped>
a {
  border-radius: 16px;
  background: #171717;
  color: white;
  font-size: 12px;
  font-weight: bolder;
  text-align: center;
  text-transform: uppercase;
  box-shadow: #171717 2px 2px 8px;
  transition: all 0.3s ease-in-out;
  text-decoration: none;
}

a:hover {
  transform: scale(1.05);
  background: #232020;
}
</style>