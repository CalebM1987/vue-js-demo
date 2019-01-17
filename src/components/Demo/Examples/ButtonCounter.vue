<template>
  <div>
    <button v-on:click="count++">You clicked me {{ count }} times.</button>
    <button class="ml-3" @click="count=0">reset counter</button>
  </div>
</template>

<script>
export default {
  name: 'button-counter',

  data: function () {
    return {
      count: 0
    }
  }
}
</script>
