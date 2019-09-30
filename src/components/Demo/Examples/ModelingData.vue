<template>
  <demo-content :lang="'javascript'" :code="code" :templateCode="tempCode">

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
  },

  mounted(){
    
  }
}
</script>

