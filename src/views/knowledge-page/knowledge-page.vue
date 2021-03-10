<template>
  <div class="knowledge__container">
    <ul class="grid-list">
      <router-link to="/articles">
        <li class="grid-list__item">
          <div class="grid-list__icon"></div>
          <h3 class="grid-list__title">Статьи</h3>
        </li>
      </router-link>
      <!-- <router-link>
        <li class="grid-list__item">
          <div class="grid-list__icon grid-list__icon-achivement"></div>
          <h3 class="grid-list__title">Книги</h3>
        </li>
      </router-link>
      <router-link>
        <li class="grid-list__item">
          <div class="grid-list__icon"></div>
          <h3 class="grid-list__title">Видео</h3>
        </li>
      </router-link> -->
    </ul>
  </div>
</template>

<script>
export default {
  name: "Knowledge-page"
};
</script>

<style lang="scss" scoped>
.knowledge__container {
  max-width: 90%;
  margin: 0 auto;
}
.grid-list {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  grid-gap: 20px;

  .grid-list__item {
    min-width: 205px;
    background-color: #fff;
    border-radius: 20px;
    box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.2);
    padding: 40px;
    cursor: pointer;
    transition: linear 0.4s;

    &:hover {
      background-color: rgba($color: rgb(168, 168, 168), $alpha: 1);
      color: #fff;
      transition: 0.3s ease-in-out;
      border-radius: 50px;
      transition: linear 0.2s;
    }
  }
}
</style>
