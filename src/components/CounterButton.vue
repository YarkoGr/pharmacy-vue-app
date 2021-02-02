<template>
  <div class="counter-button">
    <button @click="sadIncrement">sadCount</button>
    <button @click="happyIncrement">happyCount</button>
    <button @click="heartIncrement">heartCount</button>
  </div>
</template>
<script>
export default {
  name: "CounterButton",
  methods: {
    sadIncrement() {
      this.$store.commit("sadIncrement");
    },
    happyIncrement() {
      this.$store.commit("happyIncrement");
    },
    heartIncrement() {
      this.$store.commit("heartIncrement");
    },
  },
};
</script>
<style lang="scss">
</style>