<template>
  <div class="main-content">
    <h2>main content</h2>
    <counter-button />
  </div>
</template>
<script>
import CounterButton from "./CounterButton.vue";
export default {
  components: { CounterButton },
  name: "MainContent",
};
</script>
<style lang="scss">
</style>