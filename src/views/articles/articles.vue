<template>
  <section class="articles">
    <button @click="increment">+</button>
    <button @click="decrement">-</button>
    <button @click="incrementIfOdd">Increment if odd</button>
    <button @click="incrementAsync">Increment async</button>
    <ul class="articles__list">
      <li class="articles__list-item">{{ count }} count is {{ evenOrOdd }}</li>
    </ul>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";

export default {
  name: "Articles",

  setup() {
    const store = useStore();
    const count = computed(() => store.state.count);
    const evenOrOdd = computed(() => store.getters.evenOrOdd);
    const increment = () => store.dispatch("increment");
    const decrement = () => store.dispatch("decrement");
    const incrementIfOdd = () => store.dispatch("incrementIfOdd");
    const incrementAsync = () => store.dispatch("incrementAsync");

    return {
      count,
      evenOrOdd,
      increment,
      decrement,
      incrementIfOdd,
      incrementAsync
    };
  }
};
</script>

<style></style>
