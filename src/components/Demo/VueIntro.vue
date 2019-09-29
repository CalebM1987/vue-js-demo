<template>
  <b-container class="intro mt-4">
  
    <b-row>
      <b-col md="10" class="mx-auto">

        <div class="header-container mt-4">
          <span></span>
          <h2>What is Vue.js?</h2>
          
        </div>
        <b-card>
          <div class="text-left">
            <p v-for="(p,i) in intro.text" :key="i" style="font-size: 1.15rem;">{{ p }}</p>
            <ul>
              <li v-for="(bullet,i) in intro.bullets" :key="i">{{ bullet }}</li>
            </ul>
          </div>
        </b-card>

        <h3 class="mt-5">Github Stargazers for Major JS Frameworks</h3>
        <hr>

      </b-col>
    </b-row>

    <b-row v-for="i in Math.ceil(stargazers.length / starGroups)" :key="i" class="align-items-end mt-5 mb-5">
      <b-col v-for="sg in stargazers.slice((i-1) * starGroups, i*starGroups)" :key="sg.repo">
        <stargazers :repo="sg.repo" :owner="sg.owner" :refresh="false"></stargazers>
      </b-col>
      
    </b-row>
  </b-container>
</template>

<script>
import Stargazers from '../Stargazers';
import { intro } from '../../data/lecture.json';
console.log('intro: ', intro)

export default {
  name: "vue-intro",

  components: {
    Stargazers
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