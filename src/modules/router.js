import VueRouter from 'vue-router';
import Vue from 'vue';
import GettingStarted from '../components/Demo/Examples/GettingStarted';
import Components from '../components/Demo/Examples/Components';

Vue.use(VueRouter);

const routes = [
  { path: '/', name: 'Getting Started', component: GettingStarted },
  // { path: '/vue-vs-jquery', name: 'Vue vs jQuery', component: VueVsJQuery },
  { path: '/components', name: 'Components', component: Components },
  // { path: '/vue-file', name: 'The .vue file', component: VueFile },
  // { path: '/vue-router', name: 'Vue Router', component: VueRouterExample },
]

export default new VueRouter({
  routes: routes
});