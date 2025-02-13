import '@quero/zilla-dictionary/dist/tokens.css';
import '@quero/zilla-core/src/zilla.scss';
import './assets/css/main.css';
import './assets/css/theme.css';
import './plugins/font-awesome';

import { zilla } from './plugins/zilla';
import { createPinia } from 'pinia';
import { createApp } from 'vue';
import router from './router/index';
import App from './App.vue';

const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(zilla);

app.mount('#app');
