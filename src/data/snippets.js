export const gettingStartedTemplate = `<div id="app" class="text-center">
  <button class="btn mt-4" @click="reset">Clear Content</b-button>
  <input type="text" v-model="message" class="mt-3 mb-3" placeholder="enter message here"/>
  <div>Your message is: "{{ message }}"</div>
</div>`


export const gettingStartedCode = `const app = new Vue({
  el: '#app', // selector for vue instance to mount

  data(){
    return {
      message: ''
    }
  },

  methods: {
    reset(){
      this.message = '';
    }
  }
})`

export const componentsTemplate = `<div id="components-demo">
<button-counter></button-counter>
</div>`


export const componentsCode = `// Define a new component called button-counter
Vue.component('button-counter', {
  data() {
    return {
      count: 0
    }
  },
  template: \`<div>
    <button v-on:click="count++">You clicked me {{ count }} times.</button>
    <button class="ml-3" @click="count=0">reset counter</button>
  </div>\`
})

// now initialize vue instance 
const app =  new Vue({ el: '#components-demo' })`

export const singleFileCode = `<!-- template (Greeting.vue) -->
<template>
  <!-- injected into parent component -->
  <div>
    <p>HTML Structure</p>
    <div class="someClass text-center font-weight-bold">{{ greeting }}</div>
  </div>
  <!-- injected into parent component -->
</template>

<script>
  // component definition
  export default{
    name: 'greeting',

    props: {
      name: {
        type: String,
        default: 'World'
      }
    },

    data(){
      return {
        prefix: 'Hello'
      }
    },

    computed: {
      greeting(){
        return \`\${this.prefix}, \${this.name}!\`;
      }
    }
    
  }
</script>

<style>
/* nested component style definition */ 
  .someClass{
    color: red;
    background-color: lightblue;
    padding: 1rem;
  }
</style>`

export const singleFileTemplate = `<!-- main.js -->
<template>
  <div id="app">

    <!-- checkbox to filter data -->
    <b-form-group label="Show Cards for:">
      <b-form-checkbox-group v-model="selected" :options="options" class="ml-3"/>
    </b-form-group>

    <!-- 'b-card-group' and 'b-card' are Bootstrap-Vue components -->
    <b-card-group>
      
      <!-- use the 'v-for' directive to repeat elements based on data array -->
      <b-card v-for="name in names" :key="name">
        <greeting :name="name"></greeting>
      </b-card>

    </b-card-group>
    
  </div>
</template>

<script>
import Greeting from './components/Greeting';

const app = new Vue({
  el: '#app',

  // render function
  render: h => h(App),

  // register Greeting here
  components: {
   Greeting
  },

  mounted(){
    this.selected = this.names.slice();
  },

  data(){
    return {
      names: ['John', 'Paul', 'Kelly', 'Nate', 'Brittany', 'David'],
      selected: [], // this will be used to store the filter from checkbox
    }
  },

  computed: {
    options(){
      return this.names.map(n => { return { value: n, text: n }});
    }
  }

}).mount('#app');
`

export const esriLoaderTemplate = `
<template>
  <div id="viewDiv"></div>
</template>

<style>

  /* very important to set width and height! */
  #viewDiv{
    height: 100%;
    width: 100%;
  }

</style>
`

export const esriLoaderCode = `
import { loadModules, loadCss } from 'esri-loader';

// load the css from the esri loader;
loadCss('https://js.arcgis.com/4.10/esri/css/main.css');

export default {
  name: 'arcgis-map-view',

  data(){
    return {
      map: null,
      view: null
    }
  },

  async mounted(){
    try {
      const [esriMap, MapView] = await loadModules(['esri/Map', 'esri/views/MapView']);

      // initialize map and view
      this.map = new esriMap({
        basemap: "topo"
      });

      this.view = new MapView({
        container: "viewDiv",
        map: this.map,
        zoom: 16,
        center: [-93.265, 44.9778]
      });

      this.view.when(()=>{
        console.log('map view has loaded');
      })

    } catch(err){
      alert('Could not load the ArcGIS JavaScript API!');
    };
    
  }
  
}
`