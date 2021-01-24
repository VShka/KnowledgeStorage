import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import PageLayout from "@/layouts/page-layout.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: PageLayout,
    children: [
      {
        path: "",
        name: "index",
        component: () =>
          import(
            /* webpackChunkName: "homepage" */ "@/views/homepage/homepage.vue"
          )
      },
      {
        path: "/knowledge",
        name: "knowledge-page",
        component: () =>
          import(
            /* webpackChunkName: "knowledge-page" */ "@/views/knowledge-page/knowledge-page.vue"
          )
      },
      {
        path: "/articles",
        name: "articles",
        component: () =>
          import(
            /* webpackChunkName: "knowledge-page" */ "@/views/articles/articles.vue"
          )
      },
      {
        path: "*",
        name: "404",
        component: () =>
          import(/* webpackChunkName: "404" */ "@/views/page-404/page-404.vue")
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
