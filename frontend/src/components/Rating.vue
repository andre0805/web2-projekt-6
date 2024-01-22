<script>
export default {
  props: ['rating'],
  computed: {
    ratingRounded() {
      const rating = this.rating
      if (rating != null && rating > 0) {
        return Math.round(this.rating / 2)
      } else {
        return null
      }
    },
    ratingText() {
      const rating = this.rating / 2
      if (rating != null && rating > 0) {
        return `${rating} / 5`
      } else {
        return 'Unknown'
      }
    }
  }
}
</script>

<template>
  <div class="rating">
    <span v-for="i in 5" :key="i" class="rating-icon">
      <b v-if="ratingRounded >= i" class="star filled">★&nbsp;</b>
      <b v-else class="star">★&nbsp;</b>
    </span>
    <span>&nbsp;({{ ratingText }})</span>
  </div>
</template>

<style scoped>
.rating {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: start;
  text-align: center;
  color: #e0e0e0;
}

.star {
  color: #e0e0e0;
}

.filled {
  color: #f1c40f;
}
</style>
