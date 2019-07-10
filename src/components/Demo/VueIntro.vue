<template>
  <div class="intro">
    <div class="header-container mt-4">
      <span></span>
      <h2>What is Vue.js?</h2>
      
    </div>

    <b-container class="mt-4">
      <b-row v-for="i in Math.ceil(stargazers.length / starGroups)" :key="i" class="align-items-end">
        <b-col v-for="sg in stargazers.slice((i-1) * starGroups, i*starGroups)" :key="sg.repo">
          <stargazers :repo="sg.repo" :owner="sg.owner"></stargazers>
        </b-col>
        
      </b-row>
    </b-container>
    
    

  </div>
</template>

<script>
import Stargazers from '../Stargazers';

export default {
  name: "vue-intro",

  components: {
    Stargazers
  },

  props: {
    
  },

  data() {
    return {
      starGroups: 2
    };
  },

  computed: {
    stargazers(){
      return this.$root.config.stargazers;
    }
  }

 
};
</script>

<style>

</style>