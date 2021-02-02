<template>
  <div class="app">
    <main-layout>
      <router-view />
    </main-layout>
  </div>
</template>
<script>
import MainLayout from "./views/MainLayout.vue";
export default {
  components: { MainLayout },
};
</script>

<style lang="scss
MainLayout">
</style>
