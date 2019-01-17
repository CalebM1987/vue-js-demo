<template>
  <div id="single-file-example">
    
    <demo-content :code="code" :templateCode="tempCode" :lang="'html'">

      <!-- checkbox to filter data -->
      <b-form-group label="Show Cards for:">
        <b-form-checkbox-group v-model="selected" :options="options" class="ml-3"/>
      </b-form-group>

      <!-- 'b-card-group' and 'b-card' are Bootstrap-Vue components -->
      <b-card-group :columns="3">
      
        <!-- use the 'v-for' directive to repeat elements based on data array -->
        <b-card v-for="person in selected" :key="person" class="m-2">
          <greeting :name="person"></greeting>
        </b-card>

      </b-card-group>
    </demo-content>
    
  </div>
</template>

<script>
import Greeting from './Greeting';
import DemoContent from '../DemoContent';
import { singleFileCode, singleFileTemplate } from '../../../data/snippets';

export default {
  name: 'single-file-example',

  // register Greeting here
  components: {
   Greeting,
   DemoContent
  },

  mounted(){
    this.selected = this.names.slice();
  },

  data(){
    return {
      names: ['John', 'Paul', 'Kelly', 'Nate', 'Brittany', 'David'],
      code: singleFileCode,
      tempCode: singleFileTemplate,
      selected: [],
    }
  },

  computed: {
    options(){
      return this.names.map(n => { return { value: n, text: n }});
    }
  }

}
</script>
