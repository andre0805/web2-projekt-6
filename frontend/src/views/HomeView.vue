<script setup></script>

<template>
  <div class="welcome_text">
    <p>Welcome to <b>The Movie Hub</b>.</p>
    <p>Explore different movies and choose your favorites.</p>
    <router-link class="button" to="/movies">Let's explore&nbsp;&nbsp;➜</router-link>
  </div>
</template>

<style scoped>
div.welcome_text {
  height: 100%;
  max-width: 800px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
  font-size: 16px;
  font-weight: bold;
  text-decoration: none;
  background-color: #171717;
  color: #ffffff;
  border-radius: 5px;
  transition: all 0.3s ease 0s;
  box-shadow: #171717 0 0 4px;
}

.button:hover {
  background-color: #000000;
  transform: scale(1.05);
}

@media (max-width: 800px) {
  div.welcome_text {
    font-size: 16px;
  }

  p {
    font-size: 16px;
  }

  .button {
    padding: 12px 24px;
    font-size: 12px;
  }
}
</style>
