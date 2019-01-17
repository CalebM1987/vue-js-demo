<template>
  
    <b-tabs>
      <b-tab title="Preview" active>
        <div class="preview-container mt-4">
          <slot></slot>
        </div>
      </b-tab>

      <b-tab title="Code">

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
        
     </b-tab>

    </b-tabs>

</template>

<script>
import 'highlight.js/styles/dracula.css';
import highlight from 'highlight.js';

export default {
  name: 'demo-content',

  props: {
    lang: {
      type: String,
      default: 'html'
    },

    code: {
      type: String,
      default: ''
    },

    templateCode: {
      type: String,
      default: ''
    }
  },

  data(){
    return {
      markedTemplate: {},
      marked: {}
    }
  },

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
  overflow-y: auto;
}
/* @import url(../../../css/zenburn.css); */

/* .code-container pre code {
    display: block;
    padding: 5px;
    overflow: auto;
    max-height: 490px;
    word-wrap: normal;
    font-size: 1.15rem;
}

.code-container code {
    font-family: monospace;
    text-transform: none;
}



pre, xmp, plaintext, listing {
    display: block;
    font-family: monospace;
    white-space: pre;
    margin: 1em 0px;
} */


</style>


