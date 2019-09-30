<template>
  <b-card title="The Vue Instance" 
          img-src="../../../assets/vue-reactivity.png"
          style="max-width: 37rem;"
          class="mt-2 mb-4">
    <p class="card-text">Properties stored in Vue.js are <i>reactive</i>, meaning that whenever the <code>'message'</code> property in the <router-link tag="a" to="/getting-started">Getting Started</router-link> example is changed, the DOM will automatically update by following the <a href="https://pawelgrzybek.com/the-observer-pattern-in-javascript-explained/" target="_blank">Observer</a> Pattern.</p>
  </b-card>
</template>

<script>
export default {
  name: 'the-vue-instance'
}
</script>

