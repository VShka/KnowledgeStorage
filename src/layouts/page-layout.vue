<template>
  <div id="app" class="page-layout">
    <Header />
    <Sidebar
      :isCollapsed="sidebarIsCollapsed"
      @onCollapse="onCollapseSidebar"
    />
    <main
      class="main"
      :class="{ 'main_sidebar-is-collapsed': sidebarIsCollapsed }"
    >
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>
<script lang="ts">
import Header from "@/components/header/header.vue";
import Sidebar from "@/components/sidebar/sidebar.vue";
import Footer from "@/components/footer/footer.vue";
import { onBeforeMount, ref } from "vue";
import { useStore } from "vuex";
export default {
  components: {
    Header,
    Sidebar,
    Footer
  },
  setup() {
    const store = useStore();
    const sidebarIsCollapsed = ref(true);

    const onCollapseSidebar: Function = (value: boolean) => {
      if (!value) {
        localStorage.setItem("tnOrderIsSidebarMinified", "true");
      } else {
        localStorage.removeItem("tnOrderIsSidebarMinified");
      }
      sidebarIsCollapsed.value = value;
    };

    onBeforeMount(() => {
      // получение всех данных пользователя
      store.dispatch("GET_USER_CATEGORIES");
    });

    return {
      sidebarIsCollapsed,
      onCollapseSidebar
    };
  }
};
</script>
<style lang="scss" scoped>
.main {
  padding: 110px 2rem 50px;
  transition: 0.2s ease-in-out;
  margin-left: 300px;
}
@media screen and (max-width: 1023px) {
  .main {
    padding: 60px 15px 0;
  }
}
</style>
