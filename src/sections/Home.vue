<template>
  <div class="home">
    <div class="home__wrapper">
      <span class="home__wrapper-text">Добро пожаловать в игру</span>
      <h2 class="home__title">
        Помоги <span class="home__title-uppercase">Фармацевту</span>
      </h2>
      <router-link class="home__btn" :to="routes.path">{{
        routes.name
      }}</router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      routes: {
        name: "Начать",
        path: "/main",
      },
    };
  },
};
</script>
<style lang="scss">
.home {
  height: 100vh;
  background-image: url("../assets/bg-image.jpg");
  background-position: center center;
  background-size: cover;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background: $main-gradient;
    opacity: 0.35;
  }
  &__wrapper {
    width: 860px;
    height: 860px;
    border-radius: 50%;
    background: $main-gradient;
    @include flex(center, center, column);
    position: relative;
    left: 110px;
    top: -30px;
  }

  &__wrapper-text {
    @include text($h35);
    letter-spacing: 0.02em;
    font-family: $light;
    margin-bottom: 29px;
  }
  &__title {
    @include text($h60);
    font-family: $bold;
    @include flex(start, start, column);
    margin-bottom: 120px;
  }
  &__title-uppercase {
    font-family: $bold;
    text-transform: uppercase;
  }
  &__btn {
    @include text($h36, 400, $notsodark);
    font-family: $regular;
    height: 90px;
    padding: 0 120px;
    background: $white;
    border-radius: 45px;
    @include flex(center, center);
    cursor: pointer;
    text-decoration: none;
    transition: background-color 0.5s ease;
    &:hover {
      background-color: $notsodark;
      color: $white;
    }
  }
}
</style>
