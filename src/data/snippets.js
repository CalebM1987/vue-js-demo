export const gettingStartedTemplate = `<div id="app">
  <b-button class="btn mt-1" @click="reset">Reset Content</b-button>

  <div class="w-50 mt-4">

    <!-- simple text input -->
    <div class="text-input-example">
      <h5>Simple Text Input</h5>
      <b-form-input v-model="message" class="mt-3 mb-3" placeholder="enter message here"/>
      <div><code>message</code>: "{{ message }}"</div>
    </div>
  </div>

  <!-- simple boolean example -->
  <div class="checkbox-boolean mt-5">
    <h5>Checkbox (Boolean)</h5>
    <input type="checkbox" id="checkbox" v-model="checked">
    <label for="checkbox" class="ml-3"><code>checked</code>: {{ checked }}</label>
  </div>

  <!-- multiple checkbox from vue docs -->
  <div class="checkbox-multiple mt-5">
    <h5>Checkbox (Multiple)</h5>
    <input type="checkbox" id="jack" value="Jack" v-model="selectedNames">
    <label for="jack" class="ml-2">Jack</label>
    <input type="checkbox" id="john" value="John" v-model="selectedNames" class="ml-3">
    <label for="john" class="ml-2">John</label>
    <input type="checkbox" id="mike" value="Mike" v-model="selectedNames" class="ml-3">
    <label for="mike" class="ml-2">Mike</label>
    <p><code>selectedNames</code>: {{ selectedNames }}</p>
  </div>

  <!-- select example -->
  <div class="select-example-single mt-5">
    <h5>Select (Single)</h5>
    <label for="selectSingle">Choose a name:</label>
    <select id="selectSingle" v-model="selectedName" style="width: 200px; margin-left: 1rem;">
      <option :value="null" disabled>choose name</option>
      <option value="Jack">Jack</option>
      <option value="John">John</option>
      <option value="Mike">Mike</option>
    </select>
    <p><code>selectedName</code>: {{ selectedName }}</p>
  </div>

  <!-- selected multiple -->
  <div class="select-example-multiple mt-5">
    <!-- notice the "multiple" attribute set below -->
    <h5>Select (Multiple)</h5>
    <select id="selectMultiple" v-model="selectedNames" multiple style="width: 200px;">
      <option :value="null" disabled>choose name(s)</option>
      <option value="Jack">Jack</option>
      <option value="John">John</option>
      <option value="Mike">Mike</option>
    </select>
    <p><code>selectedNames</code>: {{ selectedNames }}</p>
  </div>

  <!-- radio inputs -->
  <div class="radio-example mt-5">
    <h5>Radio Example</h5>
    <input type="radio" id="jack" value="Jack" v-model="selectedName">
    <label for="jack" class="ml-2">Jack</label>
    
    <input type="radio" id="john" value="John" v-model="selectedName" class="ml-3">
    <label for="John" class="ml-2">John</label>
    
    <input type="radio" id="mike" value="Mike" v-model="selectedName" class="ml-3">
    <label for="mike" class="ml-2">Mike</label>
    <p><code>selectedName</code>: {{ selectedName }}</p>
  </div>
</div>
`


export const gettingStartedCode = `const app = new Vue({
    el: '#app', // selector for vue instance to mount
  
    data(){
      return {
        message: '',
        checked: false,
        selectedName: null,
        selectedNames: [],
        code: gettingStartedCode,
        tempCode: gettingStartedTemplate
      }
    },
  
    methods: {
      reset(){
        this.message = '';
        this.checked = false;
        this.selectedName = null;
        this.selectedNames = [];
      }
    }
  }
})`

export const componentsTemplate = `<div id="components-demo" class="mt-4">
  <div class="flex">
    <button @click="buttons++">Add Another Counter</button>
    <button @click="buttons--" class="ml-3" :disabled="!buttons">Remove Last Counter</button>
  </div>
  <hr>
  <!-- v-for range -->
  <button-counter v-for="n in buttons" :key="n" class="mt-3"></button-counter>
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
const app =  new Vue({
  el: '#components-demo', d
  data(){ 
    return { 
      buttons: 1 
    }
  } 
})`

const greetingToken = '`${this.prefix}, ${this.name}!`'
export const singleFileCode = `<!-- template (Greeting.vue) -->
<template>
  <!-- injected into parent component -->
  <div>
    <p>Name Card</p>
    <div class="someClass text-center font-weight-bold" @click="changeColor" :style="textStyle">{{ greeting }}</div>
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
      },

    },

    data(){
      return {
        prefix: 'Hello',
        color: 'red', // default color
        randomColors: [
          'red',
          'orange', 
          'yellow', 
          'green',
          'black', 
          'purple',
          'coral',
          'pink',
          'magenta',
          'plum',
          'royalblue',
          'white',
          'darkred'
        ]
      }
    },

    methods: {
      changeColor(){
        const otherColors = this.randomColors.filter(c => c !== this.color);
        this.color = otherColors[Math.floor(Math.random() * Math.floor(otherColors.length))];
        // emit the 'changed-color' event
        this.$emit('changed-color', { name: this.name, color: this.color });
      }
    },

    computed: {
      textStyle(){
        return {
          color: this.color
        }
      },

      greeting(){
        return ${greetingToken};
      }
      
    }
    
  }
</script>

<style>
/* nested component style definition */ 
  .someClass{
    background-color: lightblue;
    padding: 1rem;
    cursor: pointer !important;
  }

  .someClass:hover{
    text-decoration: underline;
  }
</style>`

const styleToken = '`color: ${info.color}`';

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
      <b-card v-for="person in selected" :key="person" class="m-2">
        <greeting :name="person" @changed-color="displayColorChange"></greeting>
      </b-card>

    </b-card-group>

    <div class="mt-5">
      <!-- show event log here -->
      <h5>Events ({{ infos.length }}):</h5>
      <hr>
      <p v-for="(info,i) in infos" :key="i" >
        Changed color for <strong>{{ info.name }}</strong> to <span class="clr" :style="${styleToken}">{{ info.color }}</span>
      </p>
    </div>

    
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
      infos: []  // store events here
    }
  },

  methods: {

    /* event handler for 'changed-color' event */
    displayColorChange(info){
      this.infos.push(info);

      // clear message after 3 seconds
      setTimeout(()=>{
        this.infos.shift();
      }, 3000);

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

export const renderingTemplate = `<template>
  <div>
    <div class="conditional-section">
      <h4>What is you favorite NFC North Team?</h4>
      <!-- use v-for to loop through teams array -->
      <div v-for="team in teams" :key="team">
        <input type="radio" :value="team" v-model="selectedTeam">
        {{ team }}
      </div>
    </div>

    <!-- only show this section if a team has been selected -->
    <div class="display mt-5 font-weight-bold" v-if="selectedTeam">

      <!-- only show if bears or vikings -->
      <h3 v-if="['Bears', 'Vikings'].includes(selectedTeam)">Go {{ selectedTeam }}!!!</h3>

      <!-- boo for packers -->
      <h3 v-else-if="selectedTeam === 'Packers'">&#128078; Boo {{ selectedTeam }}! &#x1F44E;</h3>

      <!-- there are actually lions fans out there? -->
      <h3 v-else>Really, the {{ selectedTeam }} have fans?</h3>

    </div>

    <div v-show="selectedTeam" class="mt-4 text-secondary">
      <p>Your favorite NFC North team is the <strong>{{ selectedTeam }}</strong> 
        <span v-if="selectedTeam === 'Bears'">, Great Choice!</span>
      </p>
    </div>

  </div>
</template>`


export const renderingCode = `export default {
  name: 'football-teams',

  data(){
    return {
      teams: ['Vikings', 'Bears', 'Packers', 'Lions'],
      selectedTeam: null
    }
  }

}`

export const helloWorldExample = `<!DOCTYPE html>
<html lang="en">
  <meta>
    <meta charset="UTF-8">
    <title>Hello World in Vue.js</title>
  </meta>

  <body>
	
    <div id="app">
      <h1>{{ msg }}</h1>
    </div>

    <script
      src="//cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.min.js">
    </script>

    <script>
      new Vue({
        el: "#app",
        data() {
          return {
            msg: "Hello World!"
          }
        }
      });
    </script>

  </body>
</html>`

export const modelExampleTemplate = `<template>
  <div>
    <input type="text" v-model="message">
  </div>
</template>
`

export const modelExampleCode = `export default {
  name: 'model-example',

  data(){
    return {
      message: null
    }
  }
}
`

export const listExample = `<html lang="en">
  <meta>
    <meta charset="UTF-8">
    <title>Hello World in Vue.js</title>
  </meta>

  <body>
	
    <div id="app">
      <ul>
        <li v-for="fruit in fruits" :key="fruit">{{ fruit }}</li>
      </ul>
    </div>

    <script
      src="//cdnjs.cloudflare.com/ajax/libs/vue/2.6.10/vue.min.js">
    </script>

    <script>
      new Vue({
        el: "#app",
        data() {
          return {
            fruits: ['Apple', 'Banana', 'Orange', 'Strawberry']
          }
        }
      });
    </script>

  </body>
</html>
`

export const eventModifiersSnippet = `<!-- the click event's propagation will be stopped -->
<a v-on:click.stop="doThis"></a>

<!-- the submit event will no longer reload the page -->
<form v-on:submit.prevent="onSubmit"></form>

<!-- modifiers can be chained -->
<a v-on:click.stop.prevent="doThat"></a>

<!-- just the modifier -->
<form v-on:submit.prevent></form>

<!-- use capture mode when adding the event listener -->
<!-- i.e. an event targeting an inner element is handled here before being handled by that element -->
<div v-on:click.capture="doThis">...</div>

<!-- only trigger handler if event.target is the element itself -->
<!-- i.e. not from a child element -->
<div v-on:click.self="doThat">...</div>`


export const routerSetup = `import Vue from 'vue';
import VueRouter from 'vue-router';

// register plugin
Vue.use(VueRouter);

const User = {
  template: '<div>User {{ $route.params.id }}</div>'
}

const router = new VueRouter({
  routes: [
    // dynamic segments start with a colon
    { path: '/user/:id', component: User }
  ]
});`

export const mainVueRouter = `import Vue from 'vue';
import router from './router';

const app = new Vue({
  el: '#app',
  router
})`


export const vueConfigMapbox = `const webpack = require('webpack');
module.exports = {
  publicPath: './',
  configureWebpack: config => {
    // now we must provide a webpack plugin for mapbox-gl
    // https://github.com/phegman/vue-mapbox-gl#importing-mapbox-gl-js-with-webpack
    config.plugins.push(new webpack.ProvidePlugin({
      mapboxgl: 'mapbox-gl'
    }));
  }
}`