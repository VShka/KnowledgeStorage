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
      <div class="sidebar__menu-link-text">
        <AccordeonMenu />
      </div>
    </transition>
    <button
      class="sidebar__collapse-btn"
      :class="{ 'sidebar__collapse-btn_collapsed': isCollapsed }"
      @click="$emit('onCollapse', !isCollapsed)"
    ></button>
  </aside>
</template>
<script lang="ts">
import AccordeonMenu from "@/components/nav-accordeon/nav-accordeon.vue";
export default {
  name: "Sidebar",
  components: {
    AccordeonMenu
  },
  props: ["isCollapsed"]
};
</script>
<style lang="scss" src="./sidebar.scss"></style>
