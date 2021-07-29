<template>
<nav class="navigation-menu">
  <ul class="navigation-list">
    <router-link to="/categories">
      <li class="navigation-list__item">
        <div class="navigation-list__icon book-icon"></div>

        <span class="navigation-list__title">База знаний</span>

        <div v-show="$route.path === '/categories'" class="navigation-list__item_target"></div>
      </li>
    </router-link>

    <router-link to="/knowledge">
      <li class="navigation-list__item">
        <div class="navigation-list__icon success-icon"></div>

        <span class="navigation-list__title">Достижения</span>

        <div v-show="$route.path === '/knowledge'" class="navigation-list__item_target"></div>
      </li>
    </router-link>

    <router-link to="/articles">
      <li class="navigation-list__item">
        <div class="navigation-list__icon link-icon"></div>

        <span class="navigation-list__title">Полезные ссылки</span>

        <div v-show="$route.path === '/articles'" class="navigation-list__item_target"></div>
      </li>
    </router-link>

    <router-link to="/">
      <li class="navigation-list__item">
        <div class="navigation-list__icon info-icon"></div>

        <span class="navigation-list__title">О платформе</span>

        <div v-show="$route.path === '/'" class="navigation-list__item_target"></div>
      </li>
    </router-link>
  </ul>
</nav>
</template>

<script>
export default {
  name: "MainMenu"
};
</script>

<style lang="scss" scoped>
.navigation-list {
  display: flex;
  flex-direction: column;
  grid-gap: 20px;
}
.navigation-list__item {
  position: relative;
  display: flex;
  background-color: #fff;
  width: 260px;
  height: 70px;
  box-shadow: 0 2px 10px rgb(0 0 0 / 10%);
  border-radius: 5px;
  align-items: center;
  padding-left: 15px;
  cursor: pointer;

  &:hover {
    background-color: rgba(252, 247, 247, 1);
  }
}
.navigation-list__icon {
  width: 32px;
  height: 32px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 12px;
}
.navigation-list__title {
  font-family: Jost, sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 29px;
  color: #575757;
}
.navigation-list__item_target {
  position: absolute;
  top: 13px;
  left: 0;
  content: "";
  width: 3px;
  height: 43px;
  background-color: #0066ff;
  border-radius: 0 5px 5px 0;
}
.book-icon {
  background-image: url("~@/assets/img/icons/open-book.svg");
}
.success-icon {
  background-image: url("~@/assets/img/icons/success.svg");
}
.link-icon {
  background-image: url("~@/assets/img/icons/link.svg");
}
.info-icon {
  background-image: url("~@/assets/img/icons/info.svg");
}
</style>