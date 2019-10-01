<template>
  <b-container  fluid style="margin-bottom: 3rem;">
    <b-row>
      <b-col class="mx-auto" md="12" xl="10">
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
          </ul>
        </div>

      </b-col>
    </b-row>

    <b-row class="mt-5">
      <b-col class="mx-auto" md="12" xl="10">
    
        <h3>Reusuable Components</h3>
        <hr>
        <p>The <b-link href="https://bootstrap-vue.js.org" target="blank">Bootstrap-Vue</b-link> library is a great example of how to make highly reusable components. It implements Bootstrap 4 conventions and css as Vue.js components.  However, those components are not built via <code>.vue</code> files, but instead implemented in pure JS via Vue's <a href="https://vuejs.org/v2/guide/render-function.html" target="_blank">render functions</a>.</p>

        <ul>
          <li><a href="https://getbootstrap.com/docs/4.0/components/modal/#modal-components" target="_blank">Bootstrap 4 Modal</a></li>
          <li><a href="https://bootstrap-vue.js.org/docs/components/modal" target="_blank">Vue Implementation of Bootstrap 4 Modal</a></li>
        </ul>
        <!-- <p class="embed-caption">Here is an example of a traditional Bootstrap 4 Modal, as shown below there is a lot of boilerplate <code>html</code> required.</p>

        <b-embed class="mb-4" type="iframe" src="https://getbootstrap.com/docs/4.0/components/modal/#modal-components" />
        <hr> -->
      </b-col>
    </b-row>

    
    <!-- <b-row class="mt-5">
      <b-col class="mx-auto" md="12" xl="10">
        <p class="embed-caption">And here is basically the same modal implemented as a <code>Bootstrap-Vue</code> Component:</p>

        <b-embed class="mb-2" type="iframe" src="https://bootstrap-vue.js.org/docs/components/modal" />
        <hr>
      </b-col>
    </b-row> -->


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


