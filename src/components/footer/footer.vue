<template>
  <footer class="footer">
    <div class="footer__copyright">
      <span>&copy; 2021</span>
      <p class="footer__copyright-front">
        Frontend - <a href="#" target="_blank">Шкарупа Виктор</a>
      </p>
      <p class="footer__copyright-back">
        Backend - <a href="#" target="_blank">Васяев Александр</a>
      </p>
      <p class="footer__copyright-designer">
        UI/UX - <a href="#" target="_blank">Рогов Владислав</a>
      </p>
    </div>
  </footer>
</template>

<script lang="ts">
export default {
  name: "Footer"
};
</script>

<style lang="scss" scoped>
.footer {
  background: #fff;
  box-shadow: 0 0 10px #a3a3a3;
  padding: 22px 24px;
  border-bottom: 1px solid #e2e2ea;
  width: 100%;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  bottom: 0;

  .footer__copyright {
    display: flex;
    grid-gap: 20px;
  }
}
</style>
