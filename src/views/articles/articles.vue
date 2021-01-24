<template>
  <section class="articles">
    <ul class="articles__list">
      <li
        v-for="(article, id) in articles"
        :key="id"
        class="articles__list-item"
      >
        {{ article }}
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  name: "Articles",

  setup() {
    const articles = [
      "Frontend",
      "Backend",
      "DevOPs",
      "Mobile",
      "DataScience",
      "MachingLearning"
    ];

    return {
      articles
    };
  }
};
</script>

<style></style>
