<template>
  <aside class="sidebar" :class="{ sidebar_collapsed: isCollapsed }">
    <nav class="sidebar__menu">
      <ul class="sidebar__menu-list">
        <li class="sidebar__menu-item">
          <router-link
            class="sidebar__menu-link"
            :class="{ 'sidebar__menu-link_collapsed': isCollapsed }"
            active-class="sidebar__menu-link_active"
            :to="{ name: 'index' }"
          >
            <span
              class="sidebar__menu-link-icon sidebar__menu-link-icon_list"
            ></span>
            <transition
              name="menu-link-text-fade"
              enter-class="sidebar__menu-link-text_fade-enter"
              leave-class="sidebar__menu-link-text_fade-leave"
              enter-active-class="sidebar__menu-link-text_fade-enter"
              leave-active-class="sidebar__menu-link-text_fade-leave"
              enter-to-class="sidebar__menu-link-text_fade-enter-from"
              leave-to-class="sidebar__menu-link-text_fade-leave-to"
            >
              <span v-show="isCollapsed" class="sidebar__menu-link-text"
                >Мои знания</span
              >
            </transition>
          </router-link>
        </li>
      </ul>
    </nav>
    <button
      class="sidebar__collapse-btn"
      :class="{ 'sidebar__collapse-btn_collapsed': isCollapsed }"
      @click="$emit('onCollapse', !isCollapsed)"
    ></button>
  </aside>
</template>
<script lang="ts">
export default {
  name: "Sidebar",
  props: ["isCollapsed"]
};
</script>
<style lang="scss" src="./sidebar.scss"></style>
