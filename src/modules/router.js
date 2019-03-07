import VueRouter from 'vue-router';
import Vue from 'vue';
import GettingStarted from '../components/Demo/Examples/GettingStarted';
import Components from '../components/Demo/Examples/Components';
import CounterExample from '../components/Demo/Examples/CounterExample';
import VueRouterExample from '../components/Demo/Examples/VueRouterExample';
import TheVueInstance from '../components/Demo/TheVueInstance';
import HelloWorld from '../components/Demo/HelloWorld';
import SingleFileDescription from '../components/Demo/Examples/SingleFileDescription';
import SingleFileExample from '../components/Demo/Examples/SingleFileExample';
import MappingExample from '../components/Demo/Examples/MappingExample';

Vue.use(VueRouter);

const routes = [
  { path: '/home', name: 'Home', component: HelloWorld },
  { path: '/the-vue-instance', name: 'The Vue Instance', component: TheVueInstance },
  { path: '/getting-started', name: 'Getting Started', component: GettingStarted },
  // { path: '/vue-vs-jquery', name: 'Vue vs jQuery', component: VueVsJQuery },
  { path: '/components', name: 'Components', component: Components },
  { path: '/counter-example', name: 'Counter Example', component: CounterExample },
  { path: '/single-file-components', name: 'Single File Components', component: SingleFileDescription },
  { path: '/single-file-example', name: 'Single File Example', component: SingleFileExample },
  { path: '/vue-router', name: 'Vue Router', component: VueRouterExample },
  { path: 'mapping-examples', name: 'Mapping Examples', component: MappingExample }
]

export default new VueRouter({
  routes: routes
});