<template>
  <ul class="categories-list">
    <template v-if="userCategories">
      <CategoryCard
        v-for="category in userCategories"
        :key="category.id"
        :category="category"
      />
    </template>

    <li v-if="userCategories.length === 0" class="categories-list_empty">
      Категории не найдены
    </li>
  </ul>
</template>

<script>
import CategoryCard from "@/views/categories/categories-list/CategoryCard";
export default {
  name: "CategoriesList",

  components: {
    CategoryCard
  },

  props: {
    userCategories: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.categories-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  grid-gap: 40px;
  margin-bottom: 40px;
}
.categories-list_empty {
  font-size: 20px;
}
</style>
