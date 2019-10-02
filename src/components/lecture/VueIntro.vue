<template>
  <b-container class="intro">
  
    <b-v-column class="mt-3">

        <info-group :title="'What is Vue.js?'" :info="intro"></info-group>

        <h3 class="mt-5">Github Stargazers for Major JS Frameworks</h3>
        <hr>

    </b-v-column>

    <b-row v-for="i in Math.ceil(stargazers.length / starGroups)" :key="i" class="align-items-end mt-5 mb-5">
      <b-col v-for="sg in stargazers.slice((i-1) * starGroups, i*starGroups)" :key="sg.repo">
        <stargazers :repo="sg.repo" :owner="sg.owner" :refresh="false"></stargazers>
      </b-col>
      
    </b-row>
  </b-container>
</template>

<script>
import Stargazers from '../helpers/Stargazers';
import { intro } from '../../data/lecture';
import InfoGroup from '../helpers/InfoGroup';
console.log('intro: ', intro)

export default {
  name: "vue-intro",

  components: {
    Stargazers,
    InfoGroup
  },

  props: {
    
  },

  data() {
    return {
      starGroups: 2,
      intro
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