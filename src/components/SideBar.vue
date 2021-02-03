<template>
  <div class="side-bar">
    <ul class="side-bar__top-nav">
      <li class="side-bar__top-nav-item">
        <router-link
          class="side-bar__top-nav-item-link"
          active-class="_active"
          exact
          :to="routes.home"
        >
          <img src="../assets/svg/Union.svg" alt="topIconHome" />
        </router-link>
      </li>
      <li class="side-bar__top-nav-item">
        <router-link class="side-bar__top-nav-item-link" :to="routes.final">
          <img src="../assets/svg/reset.svg" alt="topIconReset" />
        </router-link>
      </li>
    </ul>
    <span class="side-bar__btn-title">Параметри:</span>
    <show-couters />
    <div class="side-bar__bottom-counter">
      <span class="side-bar__bottom-counter-text">Осталось в очереди:</span>
      <span class="side-bar__bottom-counter-text"
        ><span class="side-bar__bottom-counter-text -bold">14</span>/15</span
      >
    </div>
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
        home: "/",
        final: "/finalPage",
      },
    };
  },
};
</script>
<style lang="scss">
.side-bar {
  position: relative;
  @include flex(start, start, column);
  min-width: 32.5%;
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
  &__btn-title {
    @include text($h36);
    padding-left: 40px;
    margin-bottom: 30px;
    display: block;
  }
  &__bottom-counter {
    @include flex(center, center, column);
    position: absolute;
    bottom: 0;
    width: 100%;
    padding: 25px 0;
  }
  &__bottom-counter-text {
    @include text($h36);
    &.-bold {
      font-family: $bold;
    }
  }
}
</style>