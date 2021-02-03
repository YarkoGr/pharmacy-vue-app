<template>
  <div class="final-page">
    <img class="final-page__img" :src="images.src" :alt="images.name" />
    <router-link class="final-page__link" :to="routes.home">
      <img :src="icons.src" :alt="icons.name" />
    </router-link>
    <ul class="final-page__list">
      <li class="final-page__list-item">
        <span class="final-page__list-item-value">{{ firstPrep }}%</span
        ><span class="final-page__list-item-number">Препарат 1</span>
      </li>
      <li class="final-page__list-item">
        <span class="final-page__list-item-value">{{ secondPrep }}%</span
        ><span class="final-page__list-item-number">Препарат 2</span>
      </li>
      <li class="final-page__list-item">
        <span class="final-page__list-item-value">{{ thirdPrep }}%</span
        ><span class="final-page__list-item-number">Препарат 3</span>
      </li>
    </ul>
    <div class="final-page__title">
      <span>Ваш результат:</span>
      <span>«Что я здесь делаю?»</span>
    </div>
    <div class="final-page__subtitle">
      <span>Это тестовое задание, так что не будем</span>
      <span>углубляться в глубины проблем фармацевтов.</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "FinalPage",
  data() {
    return {
      firstPrep: "",
      secondPrep: "",
      thirdPrep: "",
      images: {
        src: require("@/assets/image-final.jpg"),
        name: "Final-img",
      },
      icons: {
        src: require("@/assets/svg/Union.svg"),
        name: "home",
      },
      routes: {
        home: "/",
      },
    };
  },

  async created() {
    let a =
      (this.$store.state.sadCounter / this.$store.state.totalCounter) * 100;

    this.firstPrep = Math.round(a);
    let b =
      (this.$store.state.happyCounter / this.$store.state.totalCounter) * 100;

    this.secondPrep = Math.round(b);
    let c =
      (this.$store.state.heartCounter / this.$store.state.totalCounter) * 100;

    this.thirdPrep = Math.round(c);
  },
};
</script>
<style lang="scss">
.final-page {
  position: relative;
  padding-left: 130px;
  @include flex(start, start, column);

  &__img {
    position: absolute;
    right: 0;
    top: 0;
  }
  &__link {
    position: absolute;
    width: 70px;
    height: 70px;
    left: 50px;
    top: 70px;
    @include size(70, true);
    @include flex(center, center);
    background: $main-gradient;
    img,
    svg {
      color: $white;
    }
  }
  &__list {
    padding-top: 260px;
    @include flex();
    border-bottom: 2px solid #d9d9d9;
    margin-bottom: 40px;
  }
  &__list-item {
    @include flex(center, center, column);
    padding: 40px 40px 80px;
  }
  &__list-item:not(:last-child) {
    margin-right: 20px;
  }
  &__list-item-value {
    @include text($h48, 400, $black);
  }
  &__list-item-number {
    @include text($h16, 400, $black);
    font-family: $bold;
  }
  &__title {
    @include flex(start, start, column);
    margin-bottom: 30px;
    span:first-child {
      @include text($h32, 400, $notsodark);
    }
    span:last-child {
      @include text($h40, 400, $notsodark);
    }
  }
  &__subtitle {
    @include flex(start, start, column);
    @include text($h24, 400, $black);
  }
}
</style>