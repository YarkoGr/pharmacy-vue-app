<template>
  <ul class="show-couters">
    <li class="show-couters__item">
      <img
        class="show-couters__item-icon"
        src="@/assets/icons/sad.png"
        alt="sadIcon"
      />
      <span class="show-couters__item-value"> {{ sadCounter }}</span>
    </li>
    <li class="show-couters__item">
      <img
        class="show-couters__item-icon"
        src="@/assets/icons/happy.png"
        alt="happyIcon"
      />
      <span class="show-couters__item-value"> {{ happyCounter }}</span>
    </li>
    <li class="show-couters__item">
      <img
        class="show-couters__item-icon"
        src="@/assets/icons/heart.png"
        alt="heartIcon"
      />
      <span class="show-couters__item-value"> {{ heartCounter }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "ShowCouters",
  data() {
    return {
      list: [
        {
          name: "Sad",
          src: require("@/assets/icons/sad.png"),
          type: "sadCounter",
        },
        {
          name: "Happy",
          src: require("@/assets/icons/happy.png"),
        },
        {
          name: "Heart",
          src: require("@/assets/icons/heart.png"),
        },
      ],
    };
  },

  computed: {
    sadCounter() {
      return this.$store.getters.sadCounter;
    },
    happyCounter() {
      return this.$store.getters.happyCounter;
    },
    heartCounter() {
      return this.$store.getters.heartCounter;
    },
  },
};
</script>
<style lang="scss">
.show-couters {
  @include flex(space-around, center, row, wrap);
  &__item {
    @include flex(start, center);
    padding-left: 15px;
    width: 190px;
    height: 80px;
    background-color: $white;
    border-radius: 95px;
  }
  &__item:not(:last-child) {
    margin-bottom: 40px;
  }
  &__item-icon {
    margin-right: 20px;
  }
  &__item-value {
    font-size: $h48;
    font-family: $bold;
  }
}
</style>