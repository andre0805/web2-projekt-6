<script setup>

</script>

<template>
  <header>
    <router-link to="/">
      <h1>🎬&nbsp;&nbsp;The Movie Hub</h1>
    </router-link>
  </header>
</template>

<style scoped>
header {
  background-color: #e01111;
  margin: 0;
  padding: 16px 32px;
  text-align: left;
  font-size: 22px;
}

header h1 {
  margin: 0;
  color: #171717;
}

a {
  text-decoration: none;
  color: #171717;
}

@media (max-width: 800px) {
  header {
    font-size: 16px;
  }
}
</style>