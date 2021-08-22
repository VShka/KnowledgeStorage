<template>
  <section class="categories">
    <UiHeaderViewFilter v-model:search="searchValue" />

    <CategoriesList
      v-if="userCategories.length > 0"
      :user-categories="filteredCategories"
    />

    <form class="add-form">
      <input v-model="newCategory" type="text" class="add-form__input" />
    </form>
    <button class="categories__btn-create" @click="createNewCategory">
      Добавить категорию
    </button>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { ref } from "vue";
// компоненты
import CategoriesList from "@/views/categories/categories-list/CategoriesList";
import UiHeaderViewFilter from "@/components/ui-components/UiHeaderViewFilter";
export default {
  name: "categories",
  components: {
    CategoriesList,
    UiHeaderViewFilter
  },

  data() {
    return {
      searchValue: ""
    };
  },

  computed: {
    userCategories() {
      return this.$store.state.userCategories;
    },
    filteredCategories() {
      const searchFilter = category =>
        category.name.toLowerCase().includes(this.searchValue.toLowerCase());

      return this.userCategories.filter(category => searchFilter(category));
    }
  },

  setup() {
    const newCategory = ref("");
    const store = useStore();
    const createNewCategory = () => {
      const newUserCategory = {
        name: newCategory.value
      };

      store.dispatch("ADD_NEW_CATEGORY", newUserCategory);

      console.log(newUserCategory);
    };

    return {
      newCategory,
      createNewCategory
    };
  }
};
</script>

<style lang="scss" scoped>
.categories {
  .categories__btn-create {
    padding: 10px 20px;
    border: 1px solid green;
    border-radius: 100px;
    background-color: inherit;

    &:hover {
      background-color: #ccc;
      color: #fff;
    }
    &:active {
      box-shadow: 0 0 60px rgba(0, 0, 0, 0.4);
    }
  }
}

.add-form {
  margin: 15px 0;

  &__input {
    padding: 15px;
    border-radius: 6px;
    border: 1px solid green;
  }
}
</style>
