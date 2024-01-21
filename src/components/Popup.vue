<script>
export default {
  emits: ["close"],
}
</script>

<template>
  <div class="popup">
    <div class="popup-inner">
      <slot />
      <button class="close-button" @click="$emit('close')">
        &#x2715;
      </button>
    </div>
  </div>
</template>

<style scoped>
.popup {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 99;
  background-color: rgba(0, 0, 0, 0.5);
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
}
.popup-inner {
  position: relative;
  background-color: #fff;
  width: 80%;
  height: 70%;
  border: none;
  border-radius: 8px;
}

.close-button {
  position: absolute;
  top: 0;
  right: 0;
  padding: 2px 8px 4px 8px;
  border: none;
  border-radius: 0 7px 0 4px;
  background: none;
  font-size: 22px;
  background: #171717;
  color: #FFF;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
}

.close-button:hover {
  background-color: #2d2b2b;
}
</style>