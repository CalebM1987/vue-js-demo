<template>
  <b-container style="margin-bottom: 3rem;">
    <h2>Single File Vue Components</h2>

    <p>As an application scales up or grows in complexity, <b-link href="https://vuejs.org/v2/guide/single-file-components.html" target="_blank"><code>.vue</code> files</b-link> can be used to make a more modular application.  </p>
 
    <b-img src="../../../assets/vue-file.png" height="500" />

    <p>By developing this way, there are many advantages:</p>

    <ul>
      <li>use node.js</li>
      <ul>
        <li>use module bundlers such as Webpack, Rollup, or Broswerfy to compile</li>
      </ul>
      <li>compartmentalize css with the markup</li>
      <li>export individual componets as their own libraries</li>
      <ul>
        <li>exported components can be imported in other applications</li>
        <li>components can be called upon like normal <code>html</code> elements</li>
      </ul>
    </ul>

    <h3 class="mt-4">Reusuable Components</h3>
    <hr>
    <p>The <b-link href="https://bootstrap-vue.js.org" target="blank">Bootstrap-Vue</b-link> library is a great example of how to make highly reusable components. It implements Bootstrap 4 conventions and css as Vue.js components</p>

    <p class="embed-caption">Here is an example of a traditional Bootstrap 4 Modal, as shown below there is a lot of boilerplate <code>html</code> required.</p>

    <b-embed class="mb-4" type="iframe" src="https://getbootstrap.com/docs/4.0/components/modal/#modal-components" />

    <hr>
    <p class="embed-caption">And here is basically the same modal implemented as a <code>Bootstrap-Vue</code> Component:</p>

    <b-embed class="mb-2" type="iframe" src="https://bootstrap-vue.js.org/docs/components/modal" />


  </b-container>
  
</template>

<script>
export default {
  name: 'single-file-description'

}
</script>

<style>
.embed-caption {
  font-size: 1.15rem; 
  font-weight: 600; 
  margin-top: 3rem; 
  margin-bottom: 1rem;
}

</style>


