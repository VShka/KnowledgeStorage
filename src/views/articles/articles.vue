<template>
  <section class="articles">
    <button @click="getUsers">Получить данные о пользователях</button>
    <ul class="articles-list">
      <li class="articles-list__item"></li>
    </ul>
  </section>
</template>

<script>
import { useStore } from "vuex";

export default {
  name: "Articles",

  setup() {
    const store = useStore();
    const getUsers = () => store.dispatch("getUsers");

    return {
      getUsers
    };
  }
};
</script>

<style></style>
