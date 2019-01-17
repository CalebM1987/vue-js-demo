<template>
  <div id="app">
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

  data(){
    return {
      names: ['John', 'Paul', 'Kelly', 'Nate', 'Brittany']
    }
  }

}).mount('#app');
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  /* margin-top: 60px; */
}

.fa-btn{
  font-size: 1.5rem;
  cursor: pointer;
}
</style>
