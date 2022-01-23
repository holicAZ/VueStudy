import { createApp } from 'vue'
import App from './App.vue'
import Flicking from "@egjs/vue3-flicking/dist/flicking.esm";
import "@egjs/vue3-flicking/dist/flicking.css"
import "@egjs/flicking-plugins/dist/flicking-plugins.css";
const app = createApp(App);

app.component("Flicking", Flicking);
app.mount("#app");
