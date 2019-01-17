import Vue from 'vue'
import App from './App.vue'
import BootstrapVue from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import router from './modules/router';
import '@fortawesome/fontawesome-free/js/all';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

Vue.use(BootstrapVue);

// register these components globally
Vue.component('font-awesome-icon', FontAwesomeIcon);

Vue.config.productionTip = false

const app = new Vue({
  render: h => h(App),
  router,

}).$mount('#app');

app.$router.replace('/home');
