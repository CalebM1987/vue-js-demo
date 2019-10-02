<template>
  <b-v-column>
    <info-group :info="aboutThisApp" title="App Info"></info-group>
  </b-v-column>
</template>

<script>
  import InfoGroup from '../helpers/InfoGroup';
  import { aboutThisApp } from '../../data/lecture';

  export default {
    name: 'about',

    components: {
      InfoGroup
    },

    data(){
      return {
        aboutThisApp
      }
    }

  }

</script>

<style>

</style>