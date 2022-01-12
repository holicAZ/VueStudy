import { createApp } from 'vue'
import App from './App.vue'
import mitt from 'mitt'

let emitter = mitt();
let app = createApp(App);
app.config.globalProperties.emitter = emitter; // global 한 변수 보관함

import store from './store.js'
import './registerServiceWorker'

app.use(store).mount('#app');
