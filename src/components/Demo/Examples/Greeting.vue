<template>
  <!-- injected into parent component -->
  <div>
    <p>HTML Structure</p>
    <div class="someClass text-center font-weight-bold">{{ greeting }}</div>
  </div>
  <!-- injected into parent component -->
</template>

<script>
  // component definition
  export default{
    name: 'greeting',

    props: {
      name: {
        type: String,
        default: 'World'
      }
    },

    data(){
      return {
        prefix: 'Hello'
      }
    },

    computed: {
      greeting(){
        return `${this.prefix}, ${this.name}!`;
      }
      
    }
    
  }
</script>

<style>
/* nested component style definition */ 
  .someClass{
    color: red;
    background-color: lightblue;
    padding: 1rem;
  }
</style>