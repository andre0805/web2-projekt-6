<script>
export default {
  props: ['genre', 'isSelected']
}
</script>

<template>
  <p v-if="isSelected" class="selected">{{ genre.name }}</p>
  <p v-else class="not-selected">{{ genre.name }}</p>
</template>

<style scoped>
p {
  border-radius: 16px;
  font-size: 12px;
  font-weight: bolder;
  text-align: center;
  text-transform: uppercase;
  transition: all 0.3s ease-in-out;
  cursor: pointer;
}

p:hover {
  transform: scale(1.05);
}

.selected {
  background: #fff;
  color: #e01111;
  animation: 0.4s ease-in-out 0s 1 colorChange;
}

@keyframes colorChange {
  0% {
    background: #171717;
    color: white;
  }
  100% {
    background: #fff;
    color: #e01111;
  }
}

.not-selected {
  background: #171717;
  color: white;
  box-shadow: #171717 2px 2px 8px;
}

p.not-selected:hover {
  background: #232020;
}
</style>
