<template>
  <div id="app" class="page-layout">
    <Header />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>
<script lang="ts">
import Header from "@/components/header/header.vue";
export default {
  components: {
    Header
  }
};
</script>
<style lang="scss" scoped>
.main {
  padding-left: 56px;
  padding-top: 73px;
  transition: 0.2s ease-in-out;
}
@media screen and (max-width: 1023px) {
  .main {
    padding: 60px 15px 0;
  }
}
</style>
