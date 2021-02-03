<template>
  <div class="main-content">
    <the-card />
    <counter-button />
  </div>
</template>
<script>
import CounterButton from "../components/CounterButton.vue";
import TheCard from "../components/TheCard.vue";
export default {
  components: { CounterButton, TheCard },
  name: "MainContent",
};
</script>
<style lang="scss">
.main-content {
  padding-top: 140px;
  position: relative;
  width: 100%;
  .counter-button {
    position: absolute;
    bottom: 0;
    width: 100%;
    padding-bottom: 64px;
  }
}
</style>