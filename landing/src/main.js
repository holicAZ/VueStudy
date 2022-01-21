import { createApp } from 'vue'
import App from './App.vue'
import Flicking from "../node_modules/@egjs/flicking/dist/flicking.esm"
import "@egjs/vue3-flicking/dist/flicking.css";

const app = createApp(App);
app.component("Flicking", Flicking);
app.mount("#app");
