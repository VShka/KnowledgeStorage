<template>
  <header class="header">
    <router-link to="/" class="header__logo">
      Это HEADER
    </router-link>
  </header>
</template>
<script lang="ts">
export default {
  name: "Header"
};
</script>
<style lang="scss" scoped>
.header {
  background: #fff;
  box-shadow: 0 0 10px #a3a3a3;
  padding: 22px 24px;
  border-bottom: 1px solid #e2e2ea;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
@media screen and (max-width: 1023px) {
  .header {
    padding: 10px 15px;
  }
}
</style>
