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
