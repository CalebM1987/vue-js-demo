<template>
  <!-- injected into parent component -->
  <div>
    <p>Name Card</p>
    <div class="someClass text-center font-weight-bold" @click="changeColor" :style="textStyle">{{ greeting }}</div>
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
      },

    },

    data(){
      return {
        prefix: 'Hello',
        color: 'red',
        randomColors: [
          'red',
          'orange', 
          'yellow', 
          'green',
          'black', 
          'purple',
          'coral',
          'pink',
          'magenta',
          'plum',
          'royalblue',
          'white',
          'darkred'
        ]
      }
    },

    methods: {
      changeColor(){
        const otherColors = this.randomColors.filter(c => c !== this.color);
        this.color = otherColors[Math.floor(Math.random() * Math.floor(otherColors.length))];
        this.$emit('changed-color', { name: this.name, color: this.color });
      }
    },

    computed: {
      textStyle(){
        return {
          color: this.color
        }
      },

      greeting(){
        return `${this.prefix}, ${this.name}!`;
      }
      
    }
    
  }
</script>

<style>
/* nested component style definition */ 
  .someClass{
    background-color: lightblue;
    padding: 1rem;
    cursor: pointer !important;
  }

  .someClass:hover{
    text-decoration: underline;
  }
</style>