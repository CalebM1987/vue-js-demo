<template>
  <div id="single-file-example">
    
    <demo-content :code="code" :templateCode="tempCode" :lang="'html'" :codeLabel="'Greeting.vue file'" :templateLabel="'main.js file'">

      <b-row>
        <b-col>

          <!-- checkbox to filter data -->
          <b-form-group label="Show Cards for:">
            <b-form-checkbox-group v-model="selected" :options="options" class="ml-3"/>
          </b-form-group>

        </b-col>
      </b-row>
      
      <b-row class="mt-5">
        <b-col md="12" xl="10">

          <!-- 'b-card-group' and 'b-card' are Bootstrap-Vue components -->
          <b-card-group columns>
          
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
              Changed color for <strong>{{ info.name }}</strong> to <span class="clr" :style="`color: ${info.color}`">{{ info.color }}</span>
            </p>
          </div>

        </b-col>
      </b-row>

      
    </demo-content>
    
  </div>
</template>

<script>
import Greeting from './Greeting';
import DemoContent from '../helpers/DemoContent';
import { singleFileCode, singleFileTemplate } from '../../data/snippets';

export default {
  name: 'single-file-example',

  // register Greeting here
  components: {
   Greeting,
   DemoContent
  },

  mounted(){
    // make static copy of our names
    this.selected = this.names.slice();
  },

  data(){
    return {
      names: ['John', 'Paul', 'Kelly', 'Nate', 'Brittany', 'David'],
      code: singleFileCode,
      tempCode: singleFileTemplate,
      selected: [],
      infos: []
    }
  },

  methods: {
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
    },

  }

}
</script>


<style>
  .clr {
    background-color: lightgrey;
    padding: 3px;
  }
</style>