import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './scss/app.scss'
import VueGtag from "vue-gtag";

const app = createApp(App);

app.use(router);

app.use(VueGtag, {
    config: { id: "G-0ZSW258PBS" }
}, router);

app.mount('#app')