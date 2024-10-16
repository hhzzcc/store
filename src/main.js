import { createApp } from "vue";
import App from "./App.vue";
import { createPinia } from "pinia";
import router from "./router";
import "ant-design-vue/dist/reset.css";
import "./styles/index.css";
import { checkTheme } from "./utils/theme";

checkTheme();
const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(router).mount(document.body);
