<template>
  <nav class="nav-accordeon">
    <div
      class="nav-accordeon__container"
      v-for="(category, index) in userCategories"
      :key="index"
    >
      <div class="nav-accordeon__icon_preview">&#xf1cb;</div>
      <div class="nav-accordeon__icon_small">&#xf1cb;</div>
      <div class="nav-accordeon__icon_large">
        <router-link to="/knowledge">
          <h3 class="nav-accordeon__link-title">{{ category }}</h3>
        </router-link>
      </div>
    </div>
    <!-- <div class="nav-accordeon__container">
      <div class="nav-accordeon__icon_preview">&#xf1cb;</div>
      <div class="nav-accordeon__icon_small">&#xf1cb;</div>
      <div class="nav-accordeon__icon_large">
        <router-link to="/knowledge">
          <h3 class="nav-accordeon__link-title">Программирование</h3>
          <p class="nav-accordeon__link-text">'Hello, world!'</p>
        </router-link>
      </div>
    </div>
    <div class="nav-accordeon__container">
      <div class="nav-accordeon__icon_preview">&#xf17d;</div>
      <div class="nav-accordeon__icon_small">&#xf17d;</div>
      <div class="nav-accordeon__icon_large">
        <h3 class="nav-accordeon__link-title">Математика</h3>
        <p class="nav-accordeon__link-text">a + b = b + a</p>
      </div>
    </div>
    <div class="nav-accordeon__container">
      <div class="nav-accordeon__icon_preview">&#xf26e;</div>
      <div class="nav-accordeon__icon_small">&#xf26e;</div>
      <div class="nav-accordeon__icon_large">
        <h3 class="nav-accordeon__link-title">Философия</h3>
        <p class="nav-accordeon__link-text">
          Пунктуальность - воровка времени.
        </p>
      </div>
    </div> -->
  </nav>
</template>

<script lang="ts">
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "AccordeonMenu",
  setup() {
    const store = useStore();
    const userCategories = computed(() => store.getters.getCategory);

    return {
      userCategories
    };
  }
};
</script>

<style lang="scss" src="./nav-accord.scss"></style>
