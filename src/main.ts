import { createPinia } from "pinia";
import { createApp } from "vue";
import App from "./App.vue";
import "./assets/main.css";
import router from "./router";

// Vuetify
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import "vuetify/styles";

// Font-Awesome
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { fas } from "@fortawesome/free-solid-svg-icons";

// Apexcharts
import VueApexCharts from "vue3-apexcharts";

library.add(fas);

const vuetify = createVuetify({
  components,
  directives,
});

const app = createApp(App);
app.component("icon", FontAwesomeIcon);
app.use(vuetify);
app.use(createPinia());
app.use(router);
app.use(VueApexCharts);
app.mount("#app");
