<template>
  <section class="categories">
    <ul class="categories-list">
      <router-link
        to="/knowledge"
        v-for="(category, index) in userCategory"
        :key="index"
      >
        <li class="categories-list__item">
          <h3>{{ category }}</h3>
        </li>
      </router-link>
    </ul>

    <button class="categories__btn-create" @click="createCategory">
      Добавить категорию
    </button>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "categories",

  setup() {
    const store = useStore();
    const userCategory = computed(() => store.getters.getCategory);
    const createCategory = () => {
      console.log("Категория создана");
    };

    return {
      userCategory,
      createCategory
    };
  }
};
</script>

<style lang="scss" scoped>
.categories {
  margin-top: 100px;

  .categories__btn-create {
    padding: 10px 20px;
    border: 1px solid red;
    border-radius: 100px;
    background-color: inherit;

    &:hover {
      background-color: red;
      color: #fff;
    }
    &:active {
      box-shadow: 0px 0px 60px rgba(0, 0, 0, 0.4);
    }
  }
}

.categories-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  grid-gap: 40px;
  margin-bottom: 40px;

  .categories-list__item {
    min-width: 205px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
    padding: 40px;
    cursor: pointer;

    &:hover {
      background-color: rgba($color: rgb(168, 168, 168), $alpha: 1);
      color: #fff;
      transition: 0.3s ease-in-out;
      border-radius: 50px;
    }
  }
}
</style>
