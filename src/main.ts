// global css
import '@quero/zilla-dictionary/dist/tokens.css';
import '@quero/zilla-core/src/zilla.scss';
import '@quero/yeti/dist/style.css';
import '~/assets/css/main.css';
import '%/assets/css/theme.css';

// dependecies
import '~/plugins/vee-validate';
import '~/plugins/font-awesome';
import '~/plugins/vue-gtag';
import '~/plugins/error-handler';

import { zilla } from '~/plugins/zilla';
import { createPinia } from 'pinia';
import { createApp } from 'vue';

// router
import router from '%/router';

// app mount
import App from './App.vue';

// application
const app = createApp(App);
const pinia = createPinia();

app.use(router);
app.use(pinia);
app.use(zilla);

app.mount('#app');
