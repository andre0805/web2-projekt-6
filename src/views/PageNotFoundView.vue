<script setup>

</script>

<template>
  <div>
    <p>Sorry, the page you're looking for doesn't exist 😢</p>
    <router-link class="button" to="/movies">Back</router-link>
  </div>
</template>

<style scoped>
div {
  margin-top: 200px;
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: #171717;
}

p {
  margin: 0;
  padding: 4px;
  font-size: 24px;
}

.button {
  display: inline-block;
  margin-top: 20px;
  padding: 12px 24px;
  font-weight: bold;
  text-decoration: none;
  background-color: #ef1414;
  color: #171717;
  border-radius: 5px;
  transition: all 0.3s ease 0s;
  box-shadow: #171717 0 0 4px;
}

.button:hover {
  background-color: #ff0000;
  box-shadow: #171717 0 0 6px;
  transform: scale(1.01);
}
</style>