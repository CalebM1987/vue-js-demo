<template>
  <demo-content :lang="'javascript'" :code="code" :templateCode="tempCode">
   
    <div id="components-demo" class="mt-4">
      <div class="flex">
        <button @click="buttons++">Add Another Counter</button>
        <button @click="buttons--" class="ml-3" :disabled="!buttons">Remove Last Counter</button>
      </div>
      <hr>
      <!-- v-for range -->
      <button-counter v-for="n in buttons" :key="n" class="mt-3"></button-counter>
    </div>
    
  </demo-content>
  
</template>

<script>
import DemoContent from '../helpers/DemoContent';
import ButtonCounter from './ButtonCounter';
import { componentsTemplate, componentsCode } from '../../data/snippets';


export default {
  name: 'components',

  components: {
    DemoContent,
    ButtonCounter
  },

  data(){
    return {
      buttons: 1,
      code: componentsCode,
      tempCode: componentsTemplate
    }
  },

}
</script>

<style>
  button.disabled {
    cursor: not-allowed !important;
  }
</style>

