<template>
  <div class="counter-button">
    <button
      class="counter-button__btn -grad1"
      @click="
        sadIncrement();
        totalIncrement();
      "
    >
      Препарат 1
    </button>
    <button
      class="counter-button__btn -grad2"
      @click="
        happyIncrement();
        totalIncrement();
      "
    >
      Препарат 2
    </button>
    <button
      class="counter-button__btn -grad3"
      @click="
        heartIncrement();
        totalIncrement();
      "
    >
      Препарат 3
    </button>
  </div>
</template>
<script>
export default {
  name: "CounterButton",
  methods: {
    sadIncrement() {
      this.$store.commit("sadIncrement");
    },
    happyIncrement() {
      this.$store.commit("happyIncrement");
    },
    heartIncrement() {
      this.$store.commit("heartIncrement");
    },
    totalIncrement() {
      this.$store.commit("totalIncrement");
    },
  },
};
</script>
<style lang="scss">
.counter-button {
  @include flex(space-around, center);

  &__btn {
    height: 90px;
    width: 280px;
    cursor: pointer;
    border-radius: 45px;
    @include text($h28);
    font-family: $bold;
    outline: none;
    &.-grad1 {
      background: $btn1_gradient;
    }
    &.-grad2 {
      background: $btn2_gradient;
    }
    &.-grad3 {
      background: $btn3_gradient;
    }
  }
}
</style>