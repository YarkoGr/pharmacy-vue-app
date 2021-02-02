<template>
  <div class="main-layout">
    <slot>
      <home></home>
    </slot>
  </div>
</template>
<script>
import Home from "../sections/Home.vue";
export default {
  components: { Home },
  name: "MainLayout",
};
</script>
<style lang="scss">
</style>