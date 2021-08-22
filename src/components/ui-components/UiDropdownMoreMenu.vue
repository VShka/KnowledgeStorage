<template>
  <div class="dropdown-menu">
    <ul class="menu">
      <li class="menu__item" v-for="item in menuItems" :key="item" @click="clicked">
        <div
          class="menu__icon"
          v-if="!rtl"
          :style="{
            backgroundImage: `url(${require(`@/assets/img/icons/` +
              item.image +
              '.svg')})`
          }"
        ></div>

        <span class="menu__title" :style="{ color: item.textColor }">
          {{ item.title }}
        </span>

        <div
          class="menu__icon"
          v-if="rtl"
          :style="{
            backgroundImage: `url(${require(`@/assets/img/icons/` +
              item.image +
              '.svg')})`
          }"
        ></div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "UiDropdownMoreMenu",
  props: {
    menuItems: {
      type: Array,
      required: true
    },
    rtl: {
      type: Boolean,
      default: false
    }
  },

  setup(props, { emit }) {
    const clicked = () => {
      emit("btnAction");
    };

    return {
      clicked
    };
  }
};
</script>

<style lang="scss" scoped>
.dropdown-menu {
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.2);
  z-index: 9999;
}
.menu__item {
  display: flex;
  align-items: center;
  padding: 12px 14px;
  cursor: pointer;

  &:hover {
    background-color: rgba(196, 196, 196, 0.11);
  }
}
.menu__title {
  font-size: 18px;
  line-height: 26px;
  color: #434343;
}
.menu__icon {
  width: 24px;
  height: 24px;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  margin-left: 6px;
}
</style>
