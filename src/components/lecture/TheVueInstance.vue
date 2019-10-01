<template>
  <!-- style="max-width: 37rem;" -->
  <b-row>
    <b-col>
      <b-card title="The Vue Instance" 
          img-src="../../../assets/vue-reactivity.png"
          class="mt-2 mb-4">
        <!-- <p>In the examples shown so far, we have mostly only seen the <code>data</code> property used when initializing Vue (which should always be a <code>function</code> that returns an object).</p> -->
        <p class="card-text">Properties stored in Vue.js are <i>reactive</i>, meaning that whenever the <code>'msg'</code> property in the <router-link tag="a" to="/getting-started">Getting Started</router-link> example is changed, the DOM will automatically update by following the <a href="https://pawelgrzybek.com/the-observer-pattern-in-javascript-explained/" target="_blank">Observer</a> Pattern.</p>
        <p class="card-text">Aside from the <code>data</code> property that we have seen in all the prior examples, there are many other properties that can be set in a Vue Instance such as:</p>

        <ul>
          <li><code>data</code> - this must be a function so that each instance can maintain its own copy of the underlying data</li>
          <li><code>methods</code> - functions that handle logic for working with data</li>
          <li><code>computed</code> - properties are functions that dynamically update based in changes to the data or other computed properties.  Whenever properties used in the computed property are changed, the function will automatically recalculate the appropriate value.</li>
          <li><code>watch</code> - properties can also be <strong>watched</strong> to assign callback functions to handle any necessary logic when something changes.</li>
          <li><code>filters</code> - will take raw data values and format them for a nicer display where the syntax is <code>{{ filterSyntax }}</code>.  An example would be to take raw milliseconds and format it as a human readable date string:</li>
          <ul>
            <li style="font-size: 90%;"><code>{{ filterString }}</code></li>
          </ul>
        </ul>

        <h4 class="mt-4">Lifecycle Hooks</h4>
        <hr>
        <p class="card-text mt-3">In addition to the above properties, each instance also has Lifecycle hooks for the various stages of the instance creation and destruction.  See the image below:</p>

        <b-img src="../../../assets/lifecycle.png"></b-img>
      </b-card>

    </b-col>
  </b-row>
  
</template>

<script>
export default {
  name: 'the-vue-instance',
  data(){
    return {
      filterString: `<h4>Current Time: {{ dateInMilliseconds | prettyDateTime }}</h4>;`,
      filterSyntax: `{{ dataProperty | filterFunction }}`
    }
  }
}
</script>

