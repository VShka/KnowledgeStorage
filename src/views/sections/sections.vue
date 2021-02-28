<template>
  <section class="sections">
    <ul class="sections-list">
      <li
        class="sections-list__item"
        v-for="(category, index) in userCategory"
        :key="index"
      >
        {{ category }}
      </li>
      <!-- <router-link to="/knowledge">
        <li class="sections-list__item">
          <h3>Программирование</h3>
          <p class="nav-accordeon__link-text">'Hello, world!'</p>
        </li>
      </router-link>
      <li class="sections-list__item">
        <h3 class="nav-accordeon__link-title">Математика</h3>
        <p class="nav-accordeon__link-text">a + b = b + a</p>
      </li>
      <li class="sections-list__item">
        <h3 class="nav-accordeon__link-title">Философия</h3>
        <p class="nav-accordeon__link-text">
          Пунктуальность - воровка времени.
        </p>
      </li> -->
    </ul>

    <button class="sections__btn-create" @click="createCategory">
      Добавить категорию
    </button>
  </section>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "Sections",

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
.sections {
  margin-top: 100px;
}

.sections-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  grid-gap: 20px;

  .sections-list__item {
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
