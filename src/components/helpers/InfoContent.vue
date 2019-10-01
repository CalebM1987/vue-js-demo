<template>
  <div class="text-left">
    <p v-for="(p,i) in (info.text || [])" :key="i" :style="contentStyle" v-html="p"></p>
    <ul>
      <li v-for="(bullet,idx) in (info.bullets || [])" :key="idx" v-html="bullet" :style="listStyle"></li>
    </ul>
  </div>
</template>

<script>

  import InfoMixin from './InfoMixin';

  export default {
    name: 'info-content',

    mixins: [InfoMixin],

    data(){
      return {

      }
    },

    methods: {

    }

  }

</script>

<style>

</style>