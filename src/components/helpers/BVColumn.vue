<template>
  <b-row>
    <b-col class="mx-auto" :xs="xs" :md="md" :lg="lg" :xl="xl">
      <slot></slot>
    </b-col>
  </b-row>
</template>

<script>

  export default {
    name: 'b-v-column',

    props:{
      xs: {
        type: Number,
        default: 12
      },
      md: {
        type: Number,
        default: 12
      },
      lg: {
        type: Number,
        default: 11,
      }, 
      xl: {
        type: Number,
        default: 10
      }
    },

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