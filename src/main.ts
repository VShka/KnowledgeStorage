import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
// сторонние компоненты

require("./assets/fonts/feather/iconfont.css");

// глобальные файлы стилей
import "@/assets/scss/global-styles/global-styles.scss";

createApp(App)
  .use(store)
  .use(router)
  .mount("#app");
