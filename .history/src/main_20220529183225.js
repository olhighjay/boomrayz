import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import veeValidatePlugin from './includes/validation';
import { auth } from './includes/firebase';
import './assets/tailwind.css';
import './assets/main.css';

auth.onAuthStateChanged;

const app = createApp(App);
app.use(store);
app.use(router);
app.use(veeValidatePlugin);
app.mount('#app');
