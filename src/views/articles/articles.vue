<template>
  <section class="articles">
    <button @click="getArticles">Получить данные</button>
    <ul class="articles__list">
      <li class="articles__list-item"></li>
    </ul>
  </section>
</template>

<script>
import store from "@/store";

export default {
  name: "Articles",

  setup() {
    const getArticles = () => {
      console.log(store.state.data);
    };

    return {
      getArticles
    };
  }
};
</script>

<style></style>
