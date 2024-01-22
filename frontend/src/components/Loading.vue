<script setup></script>

<template>
  <div class="loader"></div>
</template>

<style scoped>
.loader {
  border: 8px solid rgba(0, 0, 0, 0.5);
  border-top: 8px solid #171717;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: spin 0.8s ease-in-out infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
