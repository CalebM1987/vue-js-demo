<template>
<div>
  <h3>The <a href="https://router.vuejs.org/" target="_blank">Vue-Router</a></h3>

  <p>The Vue-Router allows you to create modern, single page apps in Vue.js.  The router also supports a history mode which allows the user to use the back and forward buttons in the browser.</p>

  <b-link :href="link" target="_blank" style="font-size: 1.5rem; margin-top: 2rem;"><span class="mr-2">Go to Example Page</span><font-awesome-icon :icon="['fas', 'external-link-alt']" class="ml-2"></font-awesome-icon></b-link>
  <hr>
  <b-embed type="iframe"
           aspect="16by9"
           :src="link"
           allowfullscreen>
  </b-embed>

</div>
  
</template>

<script>
export default {
  name: 'vue-router-example',
  data(){
    return {
      link: '//vue-router-demos.surge.sh/#/examples/basic'
    }
  }
}
</script>

