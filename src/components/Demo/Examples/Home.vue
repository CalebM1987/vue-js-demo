<template>
  <demo-content :lang="'javascript'" :code="code" :templateCode="tempCode">
   
    <b-button class="btn mt-4" @click="reset">Clear Content</b-button>
    <b-form-input v-model="message" class="mt-3 mb-3" placeholder="enter message here"/>
    <div>Your message is: "{{ message }}"</div>
    
  </demo-content>
  
</template>

<script>
import DemoContent from '../DemoContent';
import { homeTemplate, gettingStartedCode } from '../../../data/snippets';

export default {
  name: 'home',

  components: {
    DemoContent
  },

  data(){
    return {
      message: '',
      code: gettingStartedCode,
      tempCode: gettingStartedTemplate
    }
  },

  methods: {
    reset(){
      this.message = '';
    }
  },

  mounted(){
    
  }
}
</script>

