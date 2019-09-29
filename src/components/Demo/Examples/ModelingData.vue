<template>
  <demo-content :lang="'javascript'" :code="code" :templateCode="tempCode">
    <div class="w-50 ml-4">
      <!-- <b-card title="The Vue Instance" 
              img-src="../../../assets/vue-reactivity.png"
              style="max-width: 30rem;"
              class="mt-2 mb-4">
        <p class="card-text">Properties stored in Vue.js are <i>reactive</i>, meaning that whenever the <code>'message'</code> property in the example below, the DOM will automatically update by following the <a href="https://pawelgrzybek.com/the-observer-pattern-in-javascript-explained/" target="_blank">Observer</a> Pattern.</p>
      </b-card>

      <hr class="mt-3 mb-3"> -->
    
      <div class="example">
        <b-button class="btn mt-4" @click="reset">Clear Content</b-button>
        <b-form-input v-model="message" class="mt-3 mb-3" placeholder="enter message here"/>
        <div>Your message is: "{{ message }}"</div>
      </div>
    </div>
    
    
    
  </demo-content>
  
</template>

<script>
import DemoContent from '../DemoContent';
import { gettingStartedTemplate, gettingStartedCode } from '../../../data/snippets';

export default {
  name: 'getting-started',

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

