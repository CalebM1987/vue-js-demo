<template>
  <div class="code-section">
    <div class="code-container mt-4">
      <p class="mb-2">{{ label || lang }}:</p>
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
  
  props: {
    lang: {
      type: String,
      default: 'html'
    },

    code: {
      type: String,
      default: ''
    },

    label: {
      type: String,
      default: ''
    }
  },

  // mounted(){
  //   console.log('lang is: ', this.lang)
  //   this.marked = highlight.highlight(this.lang, this.code);
  //   if (this.templateCode){
  //     this.markedTemplate = highlight.highlight('html', this.templateCode);
  //   }
  //   console.log('marked is: ', this.marked)
  // },

  computed: {
    marked(){
      return highlight.highlight(this.lang, this.code);
    }
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



