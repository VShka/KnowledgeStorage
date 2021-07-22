<template>
  <header class="header">
    <router-link to="/" class="logo">
      <div class="logo__icon"></div>

      <div class="logo__container">
        <h2 class="logo__title">
          Древо Знаний
        </h2>

        <p class="logo__subtitle">
          Платформа саморазвития
        </p>
      </div>
    </router-link>

    <div class="profile">
      <p class="profile__name">
        Константинопольский К. К.
      </p>

      <div class="profile__avatar"></div>

      <div class="profile__btn-menu"></div>
    </div>
  </header>
</template>
<script lang="ts">
export default {
  name: "Header"
};
</script>
<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #fff;
  box-shadow: 0 0 10px #a3a3a3;
  padding: 18px 30px 15px 25px;
  border-bottom: 1px solid #e2e2ea;
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  z-index: 10;

  .logo {
    display: flex;
    justify-content: center;
    align-items: center;
    .logo__icon {
      width: 47px;
      height: 47px;

      background-image: url("~@/assets/img/icons/tree-logo.svg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;

      margin-right: 13px;
    }
    .logo__container {
      text-align: left;
      .logo__title {
        font-style: normal;
        font-weight: bold;
        font-size: 24px;
        color: #475365;
      }
      .logo__subtitle {
        font-style: normal;
        font-weight: 400;
        font-size: 14px;
        color: #969696;

        margin-top: -5px;
      }
    }
  }

  .profile {
    display: flex;
    justify-content: center;
    align-items: center;
    grid-gap: 15px;
    .profile__name {
      font-size: 18px;
      color: #575757;
    }
    .profile__avatar {
      width: 41px;
      height: 41px;
      background-image: url("~@/assets/img/icons/avatar.svg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;
    }
    .profile__btn-menu {
      width: 24px;
      height: 24px;
      background-image: url("~@/assets/img/icons/chevron_down.svg");
      background-position: center;
      background-repeat: no-repeat;
      background-size: contain;

      cursor: pointer;
    }
  }
}
@media screen and (max-width: 1023px) {
  .header {
    padding: 10px 15px;
  }
}
</style>
