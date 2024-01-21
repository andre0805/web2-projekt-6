<script>
export default {
  computed: {
    showSearch() {
      return this.$route.path === "/movies";
    },
  },
}
</script>

<template>
  <header>
    <router-link class="logo" to="/">
      🎬&nbsp;&nbsp;The Movie Hub
    </router-link>

    <router-link v-if="showSearch" class="search" to="/search">
      🔍&nbsp;&nbsp;Search
    </router-link>

  </header>
</template>

<style scoped>
header {
  margin: 0;
  padding: 16px 32px;
  background-color: #e01111;
  text-align: left;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.logo {
  color: #171717;
  font-size: 48px;
  font-weight: bold;
}

.search {
  color: #1e1d1d;
  font-size: 22px;
  transition: all 0.3s ease-in-out;
}

.search:hover {
  color: black;
  text-decoration: underline;
}

a {
  text-decoration: none;
  color: #171717;
}

@media (max-width: 800px) {
  .logo {
    font-size: 32px;
  }

  .search {
    font-size: 16px;
  }
}
</style>