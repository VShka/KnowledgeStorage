<template>
  <section class="homepage">
    <h1 class="homepage__title">
      Хранилище знаний
    </h1>

    <div class="homepage__grid-menu">
      <ul class="grid-list">
        <li class="grid-list__item">
          <div class="dgrid-list__icon"></div>
          <h3 class="grid-list__title">Знания</h3>
        </li>
        <li class="grid-list__item">
          <div class="grid-list__icon grid-list__icon-achivement"></div>
          <h3 class="grid-list__title">Ачивки</h3>
        </li>
        <li class="grid-list__item">
          <div class="grid-list__icon"></div>
          <h3 class="grid-list__title">Абракадабра</h3>
        </li>
      </ul>
    </div>
  </section>
</template>

<style lang="scss" scoped>
.homepage {
  max-width: 80%;
  margin: 0 auto;
}
.homepage__title {
  margin-bottom: 100px;
}
.homepage__grid-menu {
  margin: 0 auto;
}
.grid-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 20px;

  .grid-list__item {
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
