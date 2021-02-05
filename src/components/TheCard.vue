<template>
  <div class="the-card">
    <div class="the-card__imd-wrapper">
      <img :src="cards.src" :alt="cards.title" class="the-card__img" />
    </div>
    <div class="the-card__titile-wrapper">
      <h3 class="the-card__title">{{ cards.title }}</h3>
      <span class="the-card__subtitle">{{ cards.subtitle }}</span>
    </div>
  </div>
</template>
<script>
export default {
  name: "TheCard",
  data() {
    return {
      cards: {
        src: require("@/assets/image_card.png"),
        title: "Валентина, 75 років",
        subtitle:
          "Дитя, дай бабусі ліки від тиску за цим рецептом, але не дорогих, тих, що дешевші!",
      },
    };
  },
};
</script>
<style lang="scss">
.the-card {
  width: 540px;
  margin: 0 auto;
  border-radius: 40px;
  box-shadow: 0px 0px 40px rgba(127, 127, 127, 0.4);
  &__titile-wrapper {
    padding: 25px 60px 80px;
  }
  &__title {
    @include text($h32, 400, $notsodark);
    margin-bottom: 10px;
    line-height: 39.2px;
  }
  &__subtitle {
    font-size: $h16;
    line-height: 19.6px;
    letter-spacing: 2.1px;
  }
  &__imd-wrapper {
    @include padding-hack(64.7%, cover);
  }
}
</style>