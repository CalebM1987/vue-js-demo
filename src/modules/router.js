import VueRouter from 'vue-router';
import Vue from 'vue';
import { menu } from '../data/menu';

Vue.use(VueRouter);

const isDev = window.location.origin.includes('localhost:');

const routes = [];

function loadRoute(item){
  const { route, name, component } = item;
  if (component){
    routes.push({ path: route, name, component } );
  }
  if (item.children){
    for (const child of item.children){
      loadRoute(child);
    }
  }
}

// load all routes
for (const item of menu){
  loadRoute(item);
}

export default new VueRouter({
  base: isDev ? './': './mn_gis/vue-js-demo',
  routes: routes,
  mode: 'history'
});