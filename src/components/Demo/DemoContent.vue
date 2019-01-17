<template>
  
    <div class="demo-content-container">
      <!-- Tabbed View -->
      <b-tabs v-if="_mode == 'tabs'" style="margin-bottom: 3rem;">
        <b-tab title="Preview" active>
          <div class="preview-container mt-4">
            <slot></slot>
          </div>
        </b-tab>

        <b-tab title="Code">
          <code-container :lang="lang" :code="code" :templateCode="templateCode"/>
        </b-tab>

      </b-tabs>

      <!-- Side by Side View -->
      <div class="side-by-side" style="margin-bottom: 3rem;" v-else>
        <h3>Preview:</h3>
        <div class="content">
          <slot></slot>
        </div>

        <hr class="mt-4 mb-4">

        <h3>Code:</h3>
        <code-container :lang="lang" :code="code" :templateCode="templateCode"/>

      </div>

      <div class="view-footer">
        <span title="switch view" class="fa-btn" @click="changeView">
          <font-awesome-icon :icon="icon" :rotation="rotation"/>
        </span>
      </div>
    </div>

</template>

<script>
import CodeMixin from './CodeMixin.js';
import CodeContainer from './CodeContainer';

export default {
  name: 'demo-content',

  mixins: [CodeMixin],

  components: {
    CodeContainer
  },

  props: {

    mode: {
      type: String,
      default: 'tabs'
    }

  },

  data(){
    return {
      _mode: null,
      icon: ['far', 'list-alt'],
      rotation: 0
    }
  },

  methods: {
    changeView(){
      console.log('called change view: ', this._mode)
      this._mode = this._mode === 'tabs' ? 'side': 'tabs';
      console.log('after: ', this._mode);
      this.setIcon();
    },

    setIcon(){
      if (this._mode == 'tabs'){
        this.icon = ['fas', 'columns'];
        this.rotation = 270;
      } else {
        this.icon = ['far', 'list-alt'];
        this.rotation = 0;
      } 
      console.log('updated icon: ', this.icon)
      
    }
  },

  beforeMount(){
    console.log('before mount mode', this.mode)
    this._mode = this.mode;
  },

  mounted(){
    console.log('mounted demo content', this._mode, this.icon)
    this.setIcon();
  },

  watch: {
    mode(newVal){
      this._mode = newVal;
    },

    // _mode(newVal){
    //   console.log('mode changed: ', newVal)
    //   this.setIcon();
    // }
  }

}
</script>

<style>

.view-footer{
  position: fixed;
  right: 1.75rem;
  bottom: 1rem;
}


</style>


