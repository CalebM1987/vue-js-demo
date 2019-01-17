<template>
  <div id="single-file-example">
    <!-- 'b-card-group' and 'b-card' are Bootstrap-Vue components -->
    <demo-content :code="code" :templateCode="tempCode" :lang="'html'">
      <b-form-group label="Show Cards for:">
        <b-form-checkbox-group v-model="selected" :options="options" stacked class="ml-3"/>
       
      </b-form-group>
      <b-card-group :columns="3">
      
      <!-- use the 'v-for' directive to repeat elements based on data array -->
      <b-card v-for="opt in options" :key="opt.value" class="m-2">
        <greeting :name="opt.label"></greeting>
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

  data(){
    return {
      // names: ['John', 'Paul', 'Kelly', 'Nate', 'Brittany', 'David'],
      code: singleFileCode,
      tempCode: singleFileTemplate,
      selected: ['john', 'paul', 'kelly', 'nate', 'brittany', 'david'],
      options: [
        {
          "value": "john",
          "label": "John"
        },
        {
          "value": "paul",
          "label": "Paul"
        },
        {
          "value": "kelly",
          "label": "Kelly"
        },
        {
          "value": "nate",
          "label": "Nate"
        },
        {
          "value": "brittany",
          "label": "Brittany"
        },
        {
          "value": "david",
          "label": "David"
        }
      ]
    }
  }

}
</script>
