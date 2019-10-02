<template>
  <b-container  fluid style="margin-bottom: 3rem;">
    <b-v-column class="mt-3">
      <h2>Single File Vue Components</h2>

      <div class="content" style="font-size: 1.1rem;">
        <p>As an application scales up or grows in complexity, <b-link href="https://vuejs.org/v2/guide/single-file-components.html" target="_blank"><code>.vue</code> files</b-link> can be used to make a more modular application.  </p>
  
        <b-img src="../../../assets/vue-file.png" height="600" />

        <p>By developing this way, there are many advantages:</p>

        <ul>
          <li>tooling with node.js</li>
          <ul>
            <li>use module bundlers such as Webpack, Rollup, or Broswerfy to compile</li>
          </ul>
          <li>compartmentalize css with the markup (<code>scoped</code> style tags)</li>
          <li>export individual componets as their own libraries</li>
          <ul>
            <li>exported components can be imported in other applications</li>
            <li>components can be called upon like normal <code>html</code> elements</li>
          </ul>
          <li>it is also worth noting that you <strong>do not</strong> have include the markup, JavaScript, and css all in the same file; they can be imported from external files.</li>
          <li>the downside is that plugins are required to transpile the single file components to Vue.js render functions. One example is the <a href="https://www.npmjs.com/package/vue-template-compiler" target="_blank">vue-template-compiler</a> for webpack.</li>
        </ul>
      </div>
    </b-v-column>

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


