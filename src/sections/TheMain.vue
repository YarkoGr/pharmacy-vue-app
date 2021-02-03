<template>
  <div class="the-main">
    <side-bar />
    <main-content />
  </div>
</template>
<script>
import MainContent from "./MainContent.vue";
import SideBar from "../components/SideBar.vue";
export default {
  components: { SideBar, MainContent },
  name: "TheMain",
};
</script>
<style lang="scss">
.the-main {
  @include flex(stretch, stretch);
}
</style>