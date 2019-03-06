<template>
  <div class="code-section">
    <div class="code-container mt-4" v-if="markedTemplate.value">
      <p class="mb-2">template:</p>
      <pre><code :class="['hljs', lang]" v-html="markedTemplate.value">
        {{ markedTemplate.value }}
      </code></pre> 
    </div>
      
    <div class="code-container mt-4">
      <p class="mb-2">{{ lang == 'html' ? lang + '/Vue': lang}}:</p>
      <pre><code :class="['hljs', lang]" v-html="marked.value">
        {{ marked.value }}
      </code></pre> 
    </div>
  </div>
  
</template>

<script>
import 'highlight.js/styles/dracula.css';
import highlight from 'highlight.js';
import CodeMixin from './CodeMixin';

export default {
  name: 'code-container',
  mixins: [CodeMixin], 

  mounted(){
    console.log('lang is: ', this.lang)
    this.marked = highlight.highlight(this.lang, this.code);
    if (this.templateCode){
      this.markedTemplate = highlight.highlight('html', this.templateCode);
    }
    console.log('marked is: ', this.marked)
  }
}
</script>

<style>
.code-container pre code {
  max-height: 450px;
  max-width: 800px;
  overflow-y: auto;
}
</style>



