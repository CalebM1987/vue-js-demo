<template>
  <demo-content :lang="'javascript'" :code="code" :templateCode="tempCode">
   
    <div id="components-demo" class="mt-4">
      <button-counter></button-counter>
      <button-counter class="mt-4"></button-counter>
      <button-counter class="mt-4"></button-counter>
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
      code: componentsCode,
      tempCode: componentsTemplate
    }
  },

}
</script>

