<template>
  <aside class="sidebar" :class="{ sidebar_collapsed: isCollapsed }">
    <transition
      name="menu-link-text-fade"
      enter-class="sidebar__menu-link-text_fade-enter"
      leave-class="sidebar__menu-link-text_fade-leave"
      enter-active-class="sidebar__menu-link-text_fade-enter"
      leave-active-class="sidebar__menu-link-text_fade-leave"
      enter-to-class="sidebar__menu-link-text_fade-enter-from"
      leave-to-class="sidebar__menu-link-text_fade-leave-to"
    >
      <NavigationMenu></NavigationMenu>
    </transition>
  </aside>
</template>
<script lang="ts">
import NavigationMenu from "@/components/navigation-menu/NavigationMenu.vue";
export default {
  name: "Sidebar",
  components: {
    NavigationMenu
  },
  props: ["isCollapsed"]
};
</script>
<style lang="scss" src="./sidebar.scss"></style>
