<template>
  <div class="side-bar">
    <ul class="side-bar__top-nav">
      <li class="side-bar__top-nav-item">
        <router-link
          class="side-bar__top-nav-item-link"
          active-class="_active"
          exact
          :to="routes.path"
        >
          <img src="../assets/svg/Union.svg" alt="topIconHome"
        /></router-link>
      </li>
      <li class="side-bar__top-nav-item">
        <button class="side-bar__top-nav-item-link">
          <img src="../assets/svg/reset.svg" alt="topIconReset" />
        </button>
      </li>
    </ul>
    <span class="side-bar__btn-title">Параметри:</span>
    <show-couters />
  </div>
</template>
<script>
import ShowCouters from "./ShowCouters.vue";
export default {
  components: { ShowCouters },
  name: "SideBar",
  data() {
    return {
      routes: {
        path: "/",
      },
    };
  },
};
</script>
<style lang="scss">
.side-bar {
  width: 32.5%;
  min-height: 100vh;
  background: $main-gradient;
  &__top-nav {
    @include flex();
    padding: 70px 0 0 50px;
    margin-bottom: 290px;
  }
  &__top-nav-item {
    @include size(70px, 35px);
    background-color: $white;
  }
  &__top-nav-item:not(:last-child) {
    margin-right: 38px;
  }
  &__top-nav-item-link {
    @include flex(center, center);
    width: 100%;
    height: 100%;
    border-radius: 50%;
    cursor: pointer;
    overflow: hidden;
    transition: background-color 0.5s ease;
    &:hover {
      background-color: $notsodark;
    }
  }
}
</style>