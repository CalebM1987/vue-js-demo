import Vue from "vue";
import App from "./App.vue";
import BootstrapVue from "bootstrap-vue";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import router from "./modules/router";
import "@fortawesome/fontawesome-free/js/all";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import axios from "axios";
import BVColumn from './components/helpers/BVColumn';

// make this one global
Vue.component('b-v-column', BVColumn);

Vue.use(BootstrapVue);

// register these components globally
Vue.component("font-awesome-icon", FontAwesomeIcon);

Vue.config.productionTip = false;

axios.get("./config.json").then(config => {
  console.log("config is: ", config);
  const app = new Vue({
    render: h => h(App),
    router,
    data() {
      return {
        config: config.data
      };
    }
  }).$mount("#app");

  app.$router.replace("/home");
});
